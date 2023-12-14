
const checkOffsetValue = (offset) => {
  const maxOffset = 14;
  const minOffset = -12;

  if (offset > maxOffset || offset < minOffset || offset !== ~~offset) {
    return `enter an integer offset value in the range from ${minOffset} to +${maxOffset}`;
  }

  return offset;
};

const getTimeUtcString = (offset, isPm = true) => {
  offset = checkOffsetValue(offset);

  if (offset != Number(offset)) {
    return offset;
  }

  const twelveHours = 12;
  const minuteAmountInOneHour = 60;
  const twentyFourHours = 24;
  const date = new Date();
  const TimeByOffset = (date.getTimezoneOffset() / minuteAmountInOneHour) + offset;
  let hours = date.getHours() + TimeByOffset;

  if (hours <= 0) {
    hours += twentyFourHours;
  }

  if (hours >= twentyFourHours) {
    hours -= twentyFourHours;
  }

  let minutes = date.getMinutes();

  if (isPm && hours < twelveHours) {
    hours += twelveHours;
  }

  if (!isPm && hours > twelveHours) {
    hours -= twelveHours;
  }

  return minutes < 10 ? `${hours}:0${minutes}` : `${hours}:${minutes}`;
};

export default getTimeUtcString;







