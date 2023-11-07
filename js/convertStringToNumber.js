export const convertStringToNumber = (str) => {
  const noSpaceX = str.replace(/\s+/g, '');
  const num = parseFloat(noSpaceX);

  if (!isNaN(num) && isFinite(num)) {
    return num;
  } else {
    return false;
  }
};
