export const resizeImageUrl = (url: string) => {
  const regexX = /(_SX\d+_)/;
  const regexY = /(_SY\d+_)/;
  return regexX
    ? url.replace(regexX, `_SX300_`)
    : url.replace(regexY, `_SY300_`);
};

export const truncateText = (text: string, length: number) => {
  return text.length > length ? text.slice(0, length) + '...' : text;
};
