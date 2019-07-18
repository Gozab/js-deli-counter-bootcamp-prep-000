//var katzDeli = katzDeli.length;
//probably want to return the array and just slice off the last position
function takeANumber(katzDeli, name) {
   return `"Welcome, ${name}. You are number ${katzDeli.slice(-1)[0]} in line."`
}

takeANumber(katzDeli, name);