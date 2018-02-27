const falseFill = () => new Array(16).fill(false);

// Drum Arrays
let kicks = falseFill();
let snares = falseFill();
let hiHats = falseFill();
let rideCymbals = falseFill();

// getArrayName Function to be able to integrate it inside the toggleDrum function
const getArrayName = (name) => {
  if (name === 'kicks') {
    return kick;
  } else if (name === 'snares') {
    return snares;
  } else if (name === 'hiHats') {
    return hiHats;
  } else if (name === 'rideCymbals') {
      return rideCymbals;
  } else {
    return;
  }
}

// toggleDrum Function
const toggleDrum = (arrayName, i) => {
  // we call here the getArrayName on toggleDrum attribute
  const drums = getArrayName(arrayName);


  if (drum[i] === true) {
    return drum[i] = false;
  } else {
    return drum[i] = true;
  }
};
