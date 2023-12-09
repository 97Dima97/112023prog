
const getTimeUtc = (deviation, isPm = true) => {

  if (deviation > 14 || deviation < -12 || deviation !== ~~deviation) {
    return 'unavailable value'
  }
  let localDeviation = new Date().getTimezoneOffset() / 60;
  localDeviation = Math.abs(localDeviation);
  deviation -= localDeviation;
  let hours = new Date().getHours() + deviation;

  if (hours <= 0) hours += 24;

  if (hours >= 24) hours -= 24;

  let minutes = new Date().getMinutes();
  minutes = minutes <= 9 ? minutes = '0' + minutes : minutes;

  if (isPm === true && hours < 12) hours += 12;

  if (isPm === false && hours > 12) hours -= 12;

  return isPm ? `p.m. ${hours}:${minutes}` : `a.m. ${hours}:${minutes}`;
};



export default getTimeUtc;






