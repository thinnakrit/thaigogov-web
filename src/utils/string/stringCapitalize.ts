const stringCapitalize = (value: string | undefined): string => {
  return value ? value.replace(/\b\w/g, (l) => l.toUpperCase()) : '';
};

export default stringCapitalize;
