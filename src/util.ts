import $ from 'jquery';
import { CommandType } from './CommandType';

export function getCommandTypeText(): CommandType {
  var commandTypeSelection = $('#commandTypeSelection');
  var commandTypeSelIndex = commandTypeSelection.prop('selectedIndex');
  return commandTypeSelection.find('option').eq(commandTypeSelIndex).html() as CommandType;
}

export function getSourceUnitText() {
  var sourceUnitSelection = $('#sourceTimeUnitSelection');
  var sourceUnitSelIndex = sourceUnitSelection.prop('selectedIndex');
  return sourceUnitSelection.find('option').eq(sourceUnitSelIndex).html();
}

export function getDisplayUnitText() {
  var displayUnitSelection = $('#displayTimeUnitSelection');
  var displayUnitSelIndex = displayUnitSelection.prop('selectedIndex');
  return displayUnitSelection.find('option').eq(displayUnitSelIndex).html();
}

export function getFilenameWithoutExt(filename) {
  return escape(filename.split('.').slice(0, -1).join('.'));
}
