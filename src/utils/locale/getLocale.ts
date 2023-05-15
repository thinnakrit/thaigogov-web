import nextCookie from 'next-cookies';
import { setCookie } from 'cookies-next';

const acceptLanguages = ['en', 'th'];
const defaultLocale = acceptLanguages[0];

const getLocale = async ({ ctx }: any) => {
  try {
    const cookieLocale = nextCookie(ctx).lang;
    let locale = defaultLocale;
    if (cookieLocale) {
      locale = cookieLocale;
    } else {
      setCookie('lang', defaultLocale);
    }
    return locale;
  } catch (error) {
    console.error(error);
    return defaultLocale;
  }
};

export default getLocale;
