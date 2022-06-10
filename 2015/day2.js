// https://adventofcode.com/2015/day/2
async function advent() {
  // Get puzzle input from text file
  const response = await fetch('day2.txt');
  const responseTxt = await response.text();
  // Turn each box dimensions into array
  const responseArr = responseTxt.split('\r\n');
  // Sort edge size ascending
  const dimensions = responseArr.map(box => box.split('x').sort((a,b) => a - b));

  // Calculate results
  const result = dimensions.reduce((accumulator, currentBox) => {
    // Convert edge sizes into int type
    const currentBoxInt = currentBox.map(edge => parseInt(edge)); 
    const areaNeededEachBox = 3*currentBoxInt[0]*currentBoxInt[1] + 2*currentBoxInt[1]*currentBoxInt[2] + 2*currentBoxInt[0]*currentBoxInt[2]; 
    const ribbonNeededEachBox = (currentBoxInt[0] + currentBoxInt[1])*2 + (currentBoxInt[0]*currentBoxInt[1]*currentBoxInt[2]);
    
    return accumulator + ribbonNeededEachBox;
  }, 0);

  return result;
}

advent().then(result => console.log(result));

// Part One: 1588178
// Part Two: 3783758