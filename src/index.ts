import * as hdr from 'hdr-histogram-js';
import $ from 'jquery';
import Split from 'split.js';
import { ChartWrapper } from './chart.ts';
import {
  handleFileSelectMemtierAppended,
  handleFileSelectMemtierRunCount,
  handleRawDataInputChange,
  lastEvt,
} from './handlers.ts';

let b64InputRowCount = 1;
let chartWrapper: ChartWrapper;

window.onload = () => {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    // Great success! All the File APIs are supported.
  } else {
    alert('The File APIs are not fully supported in this browser.');
  }

  // Load the Visualization API and the corechart package.
  google.load('visualization', '1.0', { packages: ['corechart'] });

  $(window).on('error', function (e) {
    $('#errorbox').html(e.toString());
    $('#errorbox-close').css('display', 'block');
  });

  chartWrapper = new ChartWrapper();

  $('#files-append').on('change', (evt) => handleFileSelectMemtierAppended(evt, chartWrapper));
  $('#files-runcount').on('change', (evt) => handleFileSelectMemtierRunCount(evt, chartWrapper));

  // Set a callback to run when the Google Visualization API is loaded.
  hdr.initWebAssembly().then(() => google.setOnLoadCallback(() => chartWrapper.drawInitialChart()));

  // Define event listeners for label and text input changes
  $('#hdr-inputs').on('input', () => handleRawDataInputChange(chartWrapper));

  Split(['#chart_div', '#chart_split_right'], {
    minSize: 200,
    sizes: [40, 60],
  });

  var gutter = $('.gutter')[0];
  var dragging = false;

  $(gutter).on('mousedown', function (e) {
    dragging = true;
  });

  $(window).on('mouseup', function (e) {
    if (!dragging) return;
    chartWrapper.drawChart();
    dragging = false;
  });

  $('#errorbox-close').on('click', clearErrorBox);

  $('#radio-compressed-histogram').on('change', function (e) {
    toggleDiv('group-compressed-histogram');
  });

  $('#radio-memtier-append').on('change', function (e) {
    toggleDiv('group-memtier-append');
  });

  $('#radio-memtier-runcount').on('change', function (e) {
    toggleDiv('group-memtier-runcount');
  });

  $('#add-row-button').on('click', addB64InputRow);
  $('#radio-show-median').on('change', toggleMedianRPS);
  $('#commandTypeSelection').on('change', commandTypeChanged);
  $('#sourceTimeUnitSelection').on('change', timeUnitsChanged);
  $('#displayTimeUnitSelection').on('change', timeUnitsChanged);
  $('#export-button').on('click', () => chartWrapper.doExport());
  $('#percentile-range-input').on('change', function (e) {
    const inputElement = this as HTMLInputElement;
    chartWrapper.showValue(inputElement.value);
  });
  $('#yAxisMaxInput').on('change', function (e) {
    const inputElement = this as HTMLInputElement;
    chartWrapper.updateMaxYRange(inputElement.value);
  });
};

function getCurrentFormat() {
  const inputTypeRadios = document.getElementsByName('formatType');
  let checkedValue;
  for (let i = 0; i < inputTypeRadios.length; i++) {
    const radioElement = inputTypeRadios[i] as HTMLInputElement;
    if (radioElement.checked) {
      checkedValue = radioElement.value;
      break;
    }
  }
  return checkedValue;
}

function forceReload() {
  const currentFormat = getCurrentFormat();
  if (currentFormat === 'group-compressed-histogram') {
    handleRawDataInputChange(chartWrapper);
  } else if (lastEvt && currentFormat === 'group-memtier-append') {
    handleFileSelectMemtierAppended(lastEvt, chartWrapper);
  } else if (lastEvt && currentFormat === 'group-memtier-runcount') {
    handleFileSelectMemtierRunCount(lastEvt, chartWrapper);
  }
}

function timeUnitsChanged() {
  forceReload();
}

function commandTypeChanged() {
  forceReload();
}

function toggleMedianRPS() {
  forceReload();
}

const groupDivIds = ['group-compressed-histogram', 'group-memtier-append', 'group-memtier-runcount'];

function toggleDiv(divId) {
  groupDivIds.forEach((id) => {
    if (divId !== id) {
      $(`#${id}`).css('display', 'none');
    } else {
      $(`#${id}`).css('display', 'block');
    }
  });
}

export function deleteRow(button) {
  const row = button.parentNode;
  row.parentNode.removeChild(row);
}

(window as any).deleteRow = deleteRow;

function addB64InputRow() {
  const container = $('#hdr-inputs');
  const newRow = $('<div>').css('margin-bottom', '5px');
  newRow.html(
    '<input type="text" id="b64-label-' +
      b64InputRowCount +
      '" placeholder="Enter label">' +
      ' ' +
      '<input type="text" id="b64-input-' +
      b64InputRowCount +
      '" placeholder="Enter base64 histogram" style="width: 50%;">' +
      ' ' +
      '<button onclick="deleteRow(this)" style="margin-left: 10px;">X</button>'
  );
  container.append(newRow);
  b64InputRowCount++;
}

function clearErrorBox() {
  $('#errorbox').html('');
  $('#errorbox-close').css('display', 'none');
}
