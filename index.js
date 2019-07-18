katzDeli = katzDeli.length+1;
//probably want to return the array and just slice off the last position
function takeANumber(katzDeli, name) {
  return `"Welcome, ${name}. You are number ${katzDeli} in line."`
}

takeANumber(katzDeli, name);