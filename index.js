
function takeANumber(katzDeli, name) {
  let i = i + 1;
  katzDeli.push(i);
  return `"Welcome, ${name}. You are number ${katzDeli.length} in line."`
}

takeANumber(katzDeli, name);

//----------------------------//


function nowServing(deliLine){
  if (deliLine[]) {
    return "There is nobody waiting to be served!"
  } else
  return `"Currently serving ${deliLine[0]}."`;
  deliLine.shift();

}

nowServing(katzDeli);

//----------------------------//


function currentLine(katzDeli){
  
}

