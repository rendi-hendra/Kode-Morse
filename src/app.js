import { sandiMorse, valMorse } from "./data.js";

export function encode(input) {
  const inMorseArr = input.split(" ");
  let result = [];

  for (let i = 0; i < inMorseArr.length; i++) {
    for (let j = 0; j < sandiMorse.length; j++) {
      if (inMorseArr[i] == sandiMorse[j]) {
        result.push(valMorse[j]);
        break;
      }
    }
  }

  const newArr = result.map((a, i) => (a == "*" ? " " : a));
  return newArr.join("");
}

export function decode(input) {
  const alfaArr = input.split("");
  const result = [];
  const newAlfaArr = alfaArr.map((a, i) => (a == " " ? (a = "*") : a));

  for (let i = 0; i < newAlfaArr.length; i++) {
    for (let j = 0; j < valMorse.length; j++) {
      if (newAlfaArr[i] == valMorse[j]) {
        result.push(sandiMorse[j]);
        break;
      }
    }
  }
  return result.join(" ");
}
