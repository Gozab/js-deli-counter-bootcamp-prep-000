//var katzDeli = katzDeli.length;
//probably want to return the array and just slice off the last position
function takeANumber(katzDeli, name) {
   return `"Welcome, ${name}. You are number ${katzDeli.splice(-1)} in line."`
}

takeANumber(katzDeli, name);