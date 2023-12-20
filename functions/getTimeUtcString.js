const getTimeUtcString = (offset, isPm = true) => {
  const twelveHours = 12;
  const date = new Date();
  const minutesOfTime = date.getMinutes();
  const minutes = minutesOfTime < 10 ? `0${minutesOfTime}` : minutesOfTime;
  checkOffsetParameter(offset);
  let hours = date.getUTCHours() + offset;
  let formattedHours = getFormattedHours(hours);

  if (isPm && formattedHours < twelveHours) {
    formattedHours += twelveHours;
  }

  if (!isPm && formattedHours > twelveHours) {
    formattedHours -= twelveHours;
  }

  return `${formattedHours}:${minutes}`;
};

const checkOffsetParameter = (offset) => {
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

const getFormattedHours = (hours) => {
  const hourAmoutInOneDay = 24;

  if (hours <= 0) {
    hours += hourAmoutInOneDay;
  }

  if (hours >= hourAmoutInOneDay) {
    hours -= hourAmoutInOneDay;
  }

  return hours;
}

export default getTimeUtcString;


