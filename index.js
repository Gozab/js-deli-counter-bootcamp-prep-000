//probably want to return the array and just slice off the last position
function takeANumber(katzDeli, name) {
  let i = i + 1;
  //i++;
  katzDeli.push(i);
  return `"Welcome, ${name}. You are number ${katzDeli.length} in line."`
}

takeANumber(katzDeli, name);