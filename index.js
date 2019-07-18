//probably want to return the array and just slice off the last position
function takeANumber(katzDeli, name) {
  let i = 0;
  i++;
  katzDeli.push(i);
  return `"Welcome, ${name}. You are number ${katzDeli.slice(-1)} in line."`
}

takeANumber(katzDeli, name);