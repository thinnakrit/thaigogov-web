import { validCases } from './formats';
//
import type { TCases, TValidOutput, TValidCase } from './formats';
//
export const isValidate = async (
  value: string,
  valid_cases: TCases | TCases[]
): Promise<TValidOutput> => {
  let valid: TValidOutput = { status: true, message: '' };
  if (!value) return valid;

  if (Array.isArray(valid_cases)) {
    for (let valid_case of valid_cases) {
      valid = checkCase(value, valid_case);
      if (!valid.status) break;
    }
  } else {
    valid = checkCase(value, valid_cases);
  }
  return Promise.resolve(valid);
};

export const checkCase = (
  value: string = '',
  valid_case: string | TCases
): TValidOutput => {
  let check: TValidOutput = { status: true, message: '' };

  if (!value) return check;

  let c: TValidCase = validCases.find((c) => {
    return c.name === valid_case;
  }) as TValidCase;

  check.status = (c.isNotAccept == true ? false : true) == c.regex.test(value);
  check.message = c.message || '';

  return check;
};
