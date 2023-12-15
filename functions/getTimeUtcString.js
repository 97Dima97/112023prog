let getTimeUtcString = (offset, isPm = true) => {
  const maxOffset = 14;
  const minOffset = -12;
  const twelveHours = 12;
  const hourAmoutInOneDay = 24;
  const date = new Date();
  const resultParameterChekc = checkOffsetParameter(offset);

  if (!resultParameterChekc) {
    return `enter an integer offset value in the range from ${minOffset} to +${maxOffset}`;
  }

  let timeByOffset = date.getUTCHours() + offset;
  const minutesOfTime = date.getMinutes();
  const minutes = minutesOfTime < 10 ? `0${minutesOfTime}` : minutesOfTime;

  if (timeByOffset <= 0) {
    timeByOffset += hourAmoutInOneDay;
  }

  if (timeByOffset >= hourAmoutInOneDay) {
    timeByOffset -= hourAmoutInOneDay;
  }

  if (isPm && timeByOffset < twelveHours) {
    timeByOffset += twelveHours;
  }

  if (!isPm && timeByOffset > twelveHours) {
    timeByOffset -= twelveHours;
  }

  return `${timeByOffset}:${minutes}`;

};

const checkOffsetParameter = (offset) => {
  const maxOffset = 14;
  const minOffset = -12;

  try {

    if (offset > maxOffset || offset < minOffset || offset !== ~~offset) {
      throw new Error();
    }

  } catch (err) {
    return false;
  }

  return true;
};

export default getTimeUtcString;
