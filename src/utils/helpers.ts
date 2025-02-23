export const resizeImageUrl = (url: string) => {
  if (!url) return '';

  const regexX = /_SX\d+_/;
  const regexY = /_SY\d+_/;

  if (regexX.test(url)) {
    return url.replace(regexX, '_SX300_');
  }
  if (regexY.test(url)) {
    return url.replace(regexY, '_SY300_');
  }

  return url;
};

export const truncateText = (text: string, length: number) => {
  return text.length > length ? text.slice(0, length) + '...' : text;
};
