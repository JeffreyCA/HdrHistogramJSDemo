import * as hdr from 'hdr-histogram-js';
import $ from 'jquery';
import { DummyData } from './DummyData';
import { getDisplayUnitText, getSourceUnitText } from './util';

export class ChartWrapper {
  chartData: google.visualization.DataTable | null = null;
  chart: google.visualization.LineChart | null = null;
  dataView: google.visualization.DataView | null = null;
  chartOptions: google.visualization.LineChartOptions;

  maxPercentile: number = 10000;
  maxYRange: number | undefined = undefined;

  ticks = [
    { v: 1, f: '0%' },
    { v: 10, f: '90%' },
    { v: 100, f: '99%' },
    { v: 1000, f: '99.9%' },
    { v: 10000, f: '99.99%' },
    { v: 100000, f: '99.999%' },
    { v: 1000000, f: '99.9999%' },
    { v: 10000000, f: '99.99999%' },
    { v: 100000000, f: '99.999999%' },
  ];

  constructor() {
    var displayUnitText = getDisplayUnitText();
    this.chartOptions = {
      title: 'Latency by Percentile Distribution',
      height: 500,
      hAxis: {
        title: 'Percentile',
        minValue: 1,
        logScale: true,
        ticks: this.ticks,
        viewWindowMode: 'explicit',
        viewWindow: {
          max: this.maxPercentile,
          min: 1,
        },
      },
      vAxis: { title: 'Latency (' + displayUnitText + ')', minValue: 0, viewWindow: { max: this.maxYRange } },
      legend: { position: 'right', alignment: 'center' /*, textStyle: { fontSize: 11 }*/ },
      chartArea: { left: 75, top: 50, right: 200, height: 400 },
    };
  }

  drawInitialChart() {
    // Load some static example data:
    var histos = DummyData.reverse();
    var names = ['A', 'B', 'C'];
    this.setChartData(names, histos);
    this.drawChart();
  }

  appendDataSeries(histo, name, dataSeries) {
    var displayUnitText = getDisplayUnitText();
    var sourceUnitText = getSourceUnitText();

    var sourceUnitFactor = getTimeUnitFactor(sourceUnitText);
    var displayUnitFactor = getTimeUnitFactor(displayUnitText);

    // Helper function to get the time unit factor
    function getTimeUnitFactor(unit) {
      switch (unit) {
        case 'seconds':
          return 1;
        case 'milliseconds':
          return 1000;
        case 'microseconds':
          return 1000000;
        case 'nanoseconds':
          return 1000000000;
        default:
          return 1;
      }
    }

    let series;
    let seriesCount;
    if (dataSeries.length == 0) {
      series = [['X', name]];
      seriesCount = 1;
    } else {
      series = dataSeries;
      series[0].push(name);
      seriesCount = series[0].length - 1;
    }

    let lines = histo.split('\n');

    let seriesIndex = 1;
    for (var i = 0; i < lines.length; i++) {
      let line = lines[i].trim();
      let values = line.trim().split(/[ ]+/);

      if (line[0] != '#' && values.length == 4) {
        let y = parseFloat(values[0]) / (sourceUnitFactor / displayUnitFactor);
        let x = parseFloat(values[3]);

        if (!isNaN(x) && !isNaN(y)) {
          if (seriesIndex >= series.length) {
            series.push([x]);
          }

          while (series[seriesIndex].length < seriesCount) {
            series[seriesIndex].push(null);
          }

          series[seriesIndex].push(y);
          seriesIndex++;
        }
      }
    }

    while (seriesIndex < series.length) {
      series[seriesIndex].push(null);
      seriesIndex++;
    }

    return series;
  }

  setChartData(names, histos) {
    while (names.length < histos.length) {
      names.push('Unknown');
    }

    var series = [];
    for (var i = 0; i < histos.length; i++) {
      if (!histos[i].startsWith('HIST')) {
        console.log('Good old histogram output parsing for ' + names[i]);
        series = this.appendDataSeries(histos[i], names[i], series);
      } else {
        console.log('Will try base64 decoding on ' + names[i]);
        var histogram = hdr.decodeFromCompressedBase64(histos[i], 32, true);
        var histoOutput = histogram.outputPercentileDistribution();
        series = this.appendDataSeries(histoOutput, names[i], series);
      }
    }

    this.chartData = google.visualization.arrayToDataTable(series);
  }

  doExport() {
    const defaultFileName = 'Histogram.png';
    const scaleFactor = 1.375;
    const chartWidth = $('#chart_div').width()!;
    const chartHeight = $('#chart_div').height()!;
    const tempDiv = document.createElement('div');
    document.body.appendChild(tempDiv);

    const scaledChart = new google.visualization.LineChart(tempDiv);
    const scaledChartOptions: google.visualization.LineChartOptions = structuredClone(this.chartOptions);

    scaledChartOptions.width = chartWidth * scaleFactor;
    scaledChartOptions.height = chartHeight * scaleFactor;
    scaledChartOptions.chartArea!.height = (this.chartOptions.chartArea!.height as number) * scaleFactor;

    scaledChart.draw(this.dataView!, scaledChartOptions);
    const imageUri = scaledChart.getImageURI();

    if (window.showSaveFilePicker) {
      fetch(imageUri)
        .then((res) => {
          return res.blob();
        })
        .then((blob) => {
          const options: SaveFilePickerOptions = {
            types: [
              {
                description: 'PNG Image',
                accept: {
                  'image/png': ['.png'],
                },
              },
            ],
            startIn: 'downloads',
            suggestedName: defaultFileName,
          };
          return window.showSaveFilePicker(options).then(function (handle) {
            return handle.createWritable().then(function (writable) {
              return writable.write(blob).then(function () {
                return writable.close();
              });
            });
          });
        });
    } else {
      const saveImg = document.createElement('a');
      saveImg.href = imageUri;
      saveImg.download = defaultFileName;
      saveImg.click();
    }
    tempDiv.remove();
    return { typed: '' };
  }

  drawChart() {
    var displayUnitText = getDisplayUnitText();
    this.chartOptions = {
      title: 'Latency by Percentile Distribution',
      height: 500,
      hAxis: {
        title: 'Percentile',
        minValue: 1,
        logScale: true,
        ticks: this.ticks,
        viewWindowMode: 'explicit',
        viewWindow: {
          max: this.maxPercentile,
          min: 1,
        },
      },
      vAxis: { title: 'Latency (' + displayUnitText + ')', minValue: 0, viewWindow: { max: this.maxYRange } },
      legend: { position: 'right', alignment: 'center' /*, textStyle: { fontSize: 11 }*/ },
      chartArea: { left: 75, top: 50, right: 200, height: 400 },
    };

    // add tooltips with correct percentile text to data:
    var columns: any[] = [0];
    for (var i = 1; i < this.chartData!.getNumberOfColumns(); i++) {
      columns.push(i);
      columns.push({
        type: 'string',
        properties: {
          role: 'tooltip',
        },
        calc: (function (j) {
          return function (dt, row) {
            var percentile = 100.0 - 100.0 / dt.getValue(row, 0);
            return (
              dt.getColumnLabel(j) +
              ': ' +
              percentile.toPrecision(7) +
              "%'ile = " +
              dt.getValue(row, j) +
              ' ' +
              displayUnitText
            );
          };
        })(i),
      });
    }
    this.dataView = new google.visualization.DataView(this.chartData!);
    this.dataView.setColumns(columns);

    this.chart = new google.visualization.LineChart($('#chart_div')[0]);
    this.chart.draw(this.dataView, this.chartOptions);
  }

  showValue(newValue) {
    var x = Math.pow(10, newValue);
    var percentile = 100.0 - 100.0 / x;
    $('#percentileRange').text(percentile + '%');
    this.maxPercentile = x;
    this.drawChart();
    return { typed: '' };
  }

  updateMaxYRange(value) {
    if (value === '') {
      this.maxYRange = undefined;
    } else {
      this.maxYRange = parseFloat(value);
    }
    this.drawChart();
  }
}
