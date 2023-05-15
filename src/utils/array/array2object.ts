function convertArrayToObject<T extends { [key: string]: any }>({
  data,
  keyName
}: {
  data: T[];
  keyName: string;
}): Record<string, T> {
  const result: Record<string, T> = {};
  if (data && keyName) {
    data.forEach((item) => {
      result[item[keyName]] = item;
    });
  }

  return result;
}

export default convertArrayToObject;
