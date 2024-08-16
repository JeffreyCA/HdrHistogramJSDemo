import { CommandType } from './CommandType';

export function parseMemtierAppendedJson(rawJson, commandTypeText: CommandType) {
  const jsonObject = JSON.parse(rawJson);
  const compressedHistograms = jsonObject.map(
    (obj) => obj['ALL STATS'][commandTypeText]['Percentile Latencies']['Histogram log format']['Compressed Histogram']
  );
  return compressedHistograms;
}

export function parseMedianRPSMemtierAppendedJson(rawJson, commandTypeText: CommandType) {
  const jsonObject = JSON.parse(rawJson);

  // Extract RPS and histogram values
  const results = jsonObject.map((result) => ({
    rps: result['ALL STATS'][commandTypeText]['Ops/sec'],
    histogram:
      result['ALL STATS'][commandTypeText]['Percentile Latencies']['Histogram log format']['Compressed Histogram'],
  }));

  // Sort by RPS
  results.sort((a, b) => a.rps - b.rps);

  // Calculate median rps
  let midIndex = Math.floor(results.length / 2);
  if (results.length % 2 === 0) {
    midIndex += 1;
  }
  const medianResult = results[midIndex];
  return medianResult.histogram;
}

export function parseMemtierRunCountJson(rawJson, commandTypeText: CommandType) {
  const jsonObject = JSON.parse(rawJson);

  // Iterate over the keys of the object
  for (const key in jsonObject) {
    // Check if the key matches the pattern "Aggregated average results"
    if (key.startsWith('AGGREGATED AVERAGE RESULTS')) {
      // Extract the value associated with the "Compressed Histogram" key
      const compressedHistogram =
        jsonObject[key][commandTypeText]['Percentile Latencies']['Histogram log format']['Compressed Histogram'];
      return compressedHistogram;
    }
  }

  // Return null if no matching key is found
  return undefined;
}
