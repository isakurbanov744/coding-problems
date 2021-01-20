const angleHour = (hour: number, min: number) => {
  let temp: number = min / 12;
  let hourAngle: number = (hour * 30) + temp;
  return hourAngle;
}

const angleMin = (min: number) => {
  return min * 6;
}

const mainFunc = (time: string) => {
  let arr: Array<string> = time.split(":");

  let hour: number = parseInt(arr[0]);
  let min: number = parseInt(arr[1]);

  let anH: number = angleHour(hour, min);
  let anM: number = angleMin(min);

  let angle: number = Math.abs(anH - anM);

  if (angle < 180) {
    return angle;
  }
  else {
    return 360 - angle;
  }
}


// tests
let time: string = "8:15";
let res = mainFunc(time);
console.log(res);

let time2: string = "12:10";
let res2 = mainFunc(time2);
console.log(res2);
