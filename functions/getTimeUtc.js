
const getTimeUtc = (deviation, isPm) => {
  deviation = deviation - 5;
  let hours = new Date().getHours() + deviation;
  if (hours <= 0) {
    hours += 24
  }
  if (hours >= 24) {
    hours -= 24
  }
  if (isPm === true && hours < 12) {
    hours += 12
  }
  if (isPm === false && hours > 12) {
    hours -= 12
  }
  let minutes = new Date().getMinutes();
  hours = Math.abs(hours);
  return (minutes < 10)
    ? `${isPm ? 'p.m. ' + hours : 'a.m. ' + hours}:${minutes = '0' + minutes}`
    : `${isPm ? 'p.m. ' + hours : 'a.m. ' + hours}:${minutes}`;
}



export default getTimeUtc;






