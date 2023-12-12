
const getTimeUtcString = (offset, isPm = true) => {
  const maxOffset = 14;
  const minOffset = -12;
  const twelveHours = 12;
  const oneHour = 60;
  const twentyFourHours = 24;
  const date = new Date();

  if (offset > maxOffset || offset < minOffset || offset !== ~~offset) {
    return 'enter an integer offset value in the range from -12 to +14'
  }
  let localOffset = date.getTimezoneOffset() / oneHour;
  localOffset < 0 ? localOffset = Math.abs(localOffset) : localOffset;
  offset -= localOffset;
  let hours = date.getHours() + offset;

  if (hours <= 0) hours += twentyFourHours;

  if (hours >= twentyFourHours) hours -= twentyFourHours;

  let minutes = date.getMinutes();
  minutes < 10 ? minutes = '0' + minutes : minutes;

  if (isPm && hours < twelveHours) hours += twelveHours;

  if (isPm === false && hours > twelveHours) hours -= twelveHours;

  return isPm ? `${hours}:${minutes}` : `${hours}:${minutes}`;

};




export default getTimeUtcString;






