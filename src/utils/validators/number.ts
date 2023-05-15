const validatedNumber = (value: string) => {
  return isNaN(Number(value)) ? false : true;
};

export default validatedNumber;
