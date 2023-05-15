import { isEmpty } from '@root/utils/validators/empty';

const safeMap = (values: any): any[] => {
  if (isEmpty(values)) {
    return [];
  }

  return values;
};

export default safeMap;
