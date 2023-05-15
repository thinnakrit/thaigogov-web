const truncate = (str: string | undefined, max: number) => {
  if (str && max > 0) {
    return str.length > max ? str.substring(0, max) + '...' : str;
  }
  return null;
};

export default truncate;
