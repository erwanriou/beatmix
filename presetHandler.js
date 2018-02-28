// Use this presets array inside your presetHandler
const presets = require('./presets');

// Getpresets function to define it qnd return the correct preset array:
const getPreset = (i) => {
  if (!presets) {
    return;
  }
  return presets[i] ;
}

const getNewPreset = (i, array) => {
  if (!presets[i]) {
    return;
  }
  presets[i] = array;
  return presets[i];
}


// presetHandler function:
const presetHandler = (method, i, newPresetArray) => {
  // return with GET method
  if (method === 'GET') {
    let preset = getPreset(i);
    if (preset) {
      return [200, preset];
    } else {
      return [404];
    }
  } else if (method === 'PUT') {
    const newPreset = getNewPreset(i, newPresetArray);
    if (newPreset) {
      return [200, newPreset];
    } else {
      return [404];
    }
  } else {
    return [400];
  }
};












// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;
