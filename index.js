//--------TAKE-A-NUMBER--------//
function takeANumber(katzDeli, name) {
  let i = i + 1;
  katzDeli.push(i);
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`
}

takeANumber(katzDeli, name);

//--------NOW-SERVING---------//


function nowServing(deliLine){
  if (deliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else
  return `Currently serving ${deliLine.shift()}.`;
    //deliLine = deliLine.shift();
  
}

nowServing(deliLine);

//-------CURRENT-LENGTH-------//


function currentLine(deliLine){
  if (deliLine.length === 0) {
    return "The line is currently empty."
  } else {
    //let i = 0;
    for (i = 0; i < deliLine.length; i++) {
    return `The line is currently: ${i+1}. ${deliLine[i]}, `
    
    }
  }
}

currentLine(deliLine);