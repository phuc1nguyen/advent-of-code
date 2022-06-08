async function advent() {
  const response = await fetch('day2.txt');
  const result = await response.text();
  const test = result.split('\r\n');

  console.log(test);
}

advent();