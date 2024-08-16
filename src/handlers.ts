import $ from 'jquery';
import { ChartWrapper } from './chart.ts';
import { parseMedianRPSMemtierAppendedJson, parseMemtierAppendedJson, parseMemtierRunCountJson } from './json.ts';
import { getCommandTypeText, getFilenameWithoutExt } from './util';

export let lastEvt: JQuery.ChangeEvent | undefined = undefined;

function getShowMedianResultForAppend() {
  var showMedianCheckbox = $('#radio-show-median');
  return showMedianCheckbox.prop('checked');
}

export function handleFileSelectMemtierAppended(evt: JQuery.ChangeEvent, chartWrapper: ChartWrapper) {
  lastEvt = evt;
  const files = (evt.target as HTMLInputElement).files; // FileList object
  const fileDisplayArea = $('#fileDisplayArea-append');

  const names: string[] = [];
  const histos: string[] = [];
  const fileNames: string[] = [];

  fileDisplayArea.text('file selected...\n');
  const showMedianOnly = getShowMedianResultForAppend();

  if (files == null) {
    return;
  }
  const commandTypeText = getCommandTypeText();

  // Loop through the FileList and render image files as thumbnails.
  for (let i = 0, f; (f = files[i]); i++) {
    const reader = new FileReader();
    reader.onload = (function (theFile: File) {
      fileNames.push(theFile.name);
      return function (e) {
        const rawJson = e.target!.result;
        if (showMedianOnly) {
          const medianHistogram = parseMedianRPSMemtierAppendedJson(rawJson, commandTypeText);
          if (medianHistogram) {
            const nameWithIndex = getFilenameWithoutExt(theFile.name);
            histos.push(medianHistogram);
            names.push(nameWithIndex);
            chartWrapper.setChartData(names, histos);
            chartWrapper.drawChart();
          }
        } else {
          const parsedCompressedHistograms = parseMemtierAppendedJson(rawJson, commandTypeText);
          if (parsedCompressedHistograms) {
            for (let i = 0; i < parsedCompressedHistograms.length; i++) {
              const histogram = parsedCompressedHistograms[i];
              const nameWithIndex = getFilenameWithoutExt(theFile.name) + ' ' + (i + 1);
              histos.push(histogram);
              names.push(nameWithIndex);
            }
            chartWrapper.setChartData(names, histos);
            chartWrapper.drawChart();
          }
        }
        fileDisplayArea.text('Plotting input from: ' + fileNames + '\n');
      };
    })(f);

    // Read in the image file as a data URL.
    reader.readAsText(f);
  }
}

export function handleFileSelectMemtierRunCount(evt: JQuery.ChangeEvent, chartWrapper: ChartWrapper) {
  lastEvt = evt;
  const files = evt.target.files; // FileList object
  const fileDisplayArea = $('#fileDisplayArea-runcount');

  const names: string[] = [];
  const histos: string[] = [];
  const fileNames: string[] = [];

  fileDisplayArea.text('file selected...\n');

  // Loop through the FileList and render image files as thumbnails.
  for (var i = 0, f; (f = files[i]); i++) {
    var reader = new FileReader();

    reader.onload = (function (theFile) {
      fileNames.push(theFile.name);
      return function (e) {
        var parsedCompressedHistogram = parseMemtierRunCountJson(e.target!.result, getCommandTypeText());
        if (parsedCompressedHistogram) {
          const nameWithIndex = getFilenameWithoutExt(theFile.name);
          histos.push(parsedCompressedHistogram);
          names.push(nameWithIndex);
          chartWrapper.setChartData(names, histos);
          chartWrapper.drawChart();
        }
        fileDisplayArea.text('Plotting input from: ' + fileNames + '\n');
      };
    })(f);

    // Read in the image file as a data URL.
    reader.readAsText(f);
  }
}

export function handleRawDataInputChange(chartWrapper: ChartWrapper) {
  lastEvt = undefined;
  const labels: string[] = [];
  const histos: string[] = [];
  const container = $('#hdr-inputs');
  const rows = container.find('div');
  for (let i = 0; i < rows.length; i++) {
    const labelInput = $(rows[i]).find("input[id^='b64-label']");
    const textInput = $(rows[i]).find("input[id^='b64-input']");
    if (labelInput.val() && textInput.val()) {
      labels.push(labelInput.val() as string);
      histos.push(textInput.val() as string);
    }
  }

  for (let j = 0; j < labels.length; j++) {
    chartWrapper.setChartData(labels, histos);
    chartWrapper.drawChart();
  }
}
