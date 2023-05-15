export type TValidOutput = {
  status: boolean;
  message: string;
};

export type TValidCase = {
  name: TCases;
  message: string;
  regex: RegExp;
  isNotAccept?: boolean;
};

export type TCases =
  | 'number_only'
  | 'eng_only'
  | 'email'
  | 'eng_number_underscore'
  | 'not_accept_special_char'
  | 'eng_number_underscore_dot'
  | 'date_format'
  | 'max_length_5'
  | 'max_length_6'
  | 'max_length_13'
  | 'max_length_14'
  | 'max_length_16'
  | 'max_length_20'
  | 'max_length_30'
  | 'max_length_100'
  | 'max_length_200'
  | 'max_length_256'
  | 'max_length_500'
  | 'SPEC001'
  | 'SPEC002'
  | 'not_accept_space'
  | 'eng_number_underscore_dot_space'
  | 'min_length_3';

export const validCases: TValidCase[] = [
  {
    name: 'number_only',
    message: '',
    regex: /^[0-9]*$/
  },
  {
    name: 'eng_only',
    message: '',
    regex: /^[a-zA-Z]*$/
  },
  {
    name: 'email',
    message: '',
    regex:
      /^(([-\w\d]+)(\.[-\w\d]+)*@([-\w\d]+)(\.[-\w\d]+)*(\.([a-zA-Z]{2,5}|[\d]{1,3})){1,2})$/
  },
  {
    name: 'eng_number_underscore',
    message: '',
    regex: /^[a-z,A-Z,0-9,_]*$/
  },
  {
    name: 'not_accept_special_char',
    message: '',
    regex:
      /^\`|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=|\[|\{|\]|\}|\||\\|\'|\<|\,|\.|\>|\?|\/|\"|\;|\:$/,
    isNotAccept: true
  },
  {
    name: 'eng_number_underscore_dot',
    message: '',
    regex: /^[a-z,A-Z,0-9,_,.]*$/
  },
  {
    name: 'date_format',
    message: '',
    regex:
      /(19|20)[0-9]{2}[- / .](0[1-9]|1[012])[- / .]((0[1-9]|[12][0-9]|3[01]){1})/
  },
  {
    name: 'max_length_5',
    message: '',
    regex: /^.{0,5}$/
  },
  {
    name: 'max_length_6',
    message: '',
    regex: /^.{0,6}$/
  },
  {
    name: 'max_length_13',
    message: '',
    regex: /^.{0,13}$/
  },
  {
    name: 'max_length_14',
    message: '',
    regex: /^.{0,14}$/
  },
  {
    name: 'max_length_16',
    message: '',
    regex: /^.{0,16}$/
  },
  {
    name: 'max_length_20',
    message: '',
    regex: /^.{0,20}$/
  },
  {
    name: 'max_length_30',
    message: '',
    regex: /^.{0,30}$/
  },
  {
    name: 'max_length_100',
    message: '',
    regex: /^.{0,100}$/
  },
  {
    name: 'max_length_200',
    message: '',
    regex: /^.{0,200}$/
  },
  {
    name: 'max_length_256',
    message: '',
    regex: /^.{0,256}$/
  },
  {
    name: 'max_length_500',
    message: '',
    regex: /^.{0,500}$/
  },
  {
    name: 'SPEC001',
    message: '',
    regex:
      /^\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\_|\+|\=|\{|\}|\[|\]|\||\\|\/|\:|\;|\"|\'|\<|\>|\,|\.|\?$/,
    isNotAccept: true
  },
  {
    name: 'SPEC002',
    message: '',
    regex:
      /^\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=|\{|\}|\[|\]|\||\\|\/|\:|\;|\"|\'|\<|\>|\,|\?$/,
    isNotAccept: true
  },
  {
    name: 'not_accept_space',
    message: '',
    regex: /( +)/,
    isNotAccept: true
  },
  {
    name: 'eng_number_underscore_dot_space',
    message: '',
    regex: /^[a-z,A-Z,0-9,_,.,\s]*$/
  },
  {
    name: 'min_length_3',
    message: '',
    regex: /^.{3,}$/
  }
];
