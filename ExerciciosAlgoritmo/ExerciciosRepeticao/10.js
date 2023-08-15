// Inverter uma string
const inputString = "reconhecimento";
let reversedString = "";
for (let i = inputString.length - 1; i >= 0; i--) {
  reversedString += inputString[i];
}
console.log("String invertida:", reversedString);
