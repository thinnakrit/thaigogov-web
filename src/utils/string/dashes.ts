import { isEmpty } from '@root/utils/validators/empty';

const dashes = (str: any, response: any) => {
  return !isEmpty(str) ? response : '-';
};

export default dashes;
