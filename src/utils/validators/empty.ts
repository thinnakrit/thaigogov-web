export const stringHandler = (string: string | null | undefined): string => {
  return string ? string : '';
};

export const numberHandler = (number: number | null | undefined): number => {
  return number ? number : 0;
};

export const isEmpty = (value: any): boolean => {
  if (typeof value === 'number') return false;

  return (
    value === undefined ||
    value === null ||
    (typeof value === 'object' &&
      (Object.keys(value).length === 0 || value.length === 0)) ||
    (typeof value === 'string' && value.trim().length === 0)
  );
};

export const isEmptyObject = (value: any) => {
  let v = Object.assign({}, value);

  if (typeof v === 'object' && Object.keys(v).length === 0) {
    return true;
  }
  return false;
};
