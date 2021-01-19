const angleHour = (hour, min) => {
  let temp = min / 12;
  let hourAngle = (hour * 30) + temp;
  return hourAngle;
}

const angleMin = (min) => {
  return min * 6;
}

const mainFunc = (time) => {
  let arr = time.split(":");

  let hour = parseInt(arr[0]);
  let min = parseInt(arr[1]);

  let anH = angleHour(hour, min);
  let anM = angleMin(min);

  let angle = Math.abs(anH - anM);

  if (angle < 180) {
    return angle;
  }
  else {
    return 360 - angle;
  }
}


// tests
let time = "8:15";
let res = mainFunc(time);
console.log(res);

let time2 = "12:10";
let res2 = mainFunc(time2);
console.log(res2);
