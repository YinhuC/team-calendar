import seedrandom from 'seedrandom';

export default function(seed) {
  const randomNumber = seedrandom(seed);
  const red = Math.floor(randomNumber()*256);
  const blue = Math.floor(randomNumber()*256);
  const green = Math.floor(randomNumber()*256);
  const hexcode = '#'+toHex(red) + toHex(blue) + toHex(green);
  const lightness = (Math.max(red, blue, green)+ Math.min(red, blue, green))/2;
  const textColour = lightness<150?'#FFFFFF':'#000000';
  return {fill: hexcode, text: textColour};
}

function toHex(value) {
  return ('00'+value.toString(16)).slice(-2);
}
