const getTimeUtcString = (offset, is24HourFormat = true) => {
  const date = new Date();
  const minutesRaw = date.getMinutes();
  const minutes = minutesRaw < 10 ? `0${minutesRaw}` : minutesRaw;
  let hours = date.getUTCHours();
  console.log(hours);

  if (isOffsetCorrect(offset)) {
    hours += offset;
  }

  const formattedHours = getFormattedHours(hours, is24HourFormat);

  return `${formattedHours}:${minutes}`;
}

const isOffsetCorrect = (offset) => {
  const maxOffset = 14;
  const minOffset = -12;

  if (offset > maxOffset || offset < minOffset) {
    throw new Error(`enter an offset value in the range from ${minOffset} to +${maxOffset}`);
  }

  if (offset !== ~~offset) {
    throw new Error('enter an integer offset value');
  }

  return true;
}

const getFormattedHours = (hours, is24HourFormat) => {
  const hourAmoutInOneDay = 24;
  const twelveHours = 12;

  if (hours <= 0) {
    hours += hourAmoutInOneDay;
  }

  if (hours >= hourAmoutInOneDay) {
    hours -= hourAmoutInOneDay;
  }

  if (is24HourFormat && hours < twelveHours) {
    hours += twelveHours;
  }

  return (!is24HourFormat && hours > twelveHours) ? hours -= twelveHours : hours;
}

export default getTimeUtcString;