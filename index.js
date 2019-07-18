
function takeANumber(katzDeli) {
  let i = i + 1;
  katzDeli.push(i);
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`
}

takeANumber(katzDeli, name);

//----------------------------//


function nowServing(deliLine){
  if (deliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else
  return `Currently serving ${deliLine.shift()}.`;
    //deliLine = deliLine.shift();
  
}

nowServing(deliLine);

//----------------------------//


function currentLine(deliLine){
  if (deliLine.length === 0) {
    return "The line is currently empty."
  } else {
    let i = i + 1;
    return `The line is currently: ${katzDeli.length}. `
  }
}

currentLine(deliLine);