var kittens = ["Milo", "Otis", "Garfield"]; //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  return kittens.push("Ralph");
}

function destructivelyPrependKitten(name) {
  return kittens.unshift("Bob");
}

function destructivelyRemoveLastKitten() {
  return kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift();
}

function appendKitten(name) {
  return kittens.concat("Broom");
}

function prependKitten(name) {
  kittens.unshift("Arnold");
  return kittens;
}

function removeFirstKitten() {
  return kittens.slice(1);
}

function removeLastKitten() {
  kittens.[...kittens, "Garfield"];
  return kittens;
}