const getTimeUtcString = (offset, isPm = true) => {
  const date = new Date();
  const minutesRaw = date.getMinutes();
  const minutes = minutesRaw < 10 ? `0${minutesRaw}` : minutesRaw;
  let hours = date.getUTCHours();

  if (checkOffsetParameter(offset)) {
    hours += offset;
  }

  const formattedHours = getFormattedHours(hours, isPm);
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
  return true
}

const getFormattedHours = (hours, isPm) => {
  const hourAmoutInOneDay = 24;
  const twelveHours = 12;

  if (hours <= 0) {
    hours += hourAmoutInOneDay;
  }

  if (hours >= hourAmoutInOneDay) {
    hours -= hourAmoutInOneDay;
  }

  if (isPm && hours < twelveHours) {
    hours += twelveHours;
  }

  if (!isPm && hours > twelveHours) {
    hours -= twelveHours;
  }

  return hours;
}

export default getTimeUtcString;







