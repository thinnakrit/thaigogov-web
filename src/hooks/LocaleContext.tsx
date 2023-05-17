import { messages } from '@root/locales';
import { setCookie } from 'cookies-next';
import React, { PropsWithChildren, useEffect, useState, useContext } from 'react';
import { useIntl, createIntl, createIntlCache, IntlConfig, MessageDescriptor, RawIntlProvider } from 'react-intl';

type localeType = IntlConfig['locale'];
type messagesType = IntlConfig['messages'];

export type TI18n = (id: string, values?: { [key: string]: string }, defaultMessage?: string, options?: any) => string;

export const i18n: TI18n = (id, values, defaultMessage, options): string => {
  const intl = useIntl();
  if (intl) {
    if (id === '-') {
      return '-';
    }

    const text = intl.formatMessage(
      {
        id: id,
        defaultMessage: defaultMessage || 'NOT_FOUND_INTL_KEY',
        fallbackOnEmptyString: true
      } as MessageDescriptor,
      values,
      options
    );
    if (text !== 'NOT_FOUND_INTL_KEY') {
      return text;
    } else {
      // Fallback
      const fallbackText = intl.formatMessage(
        {
          id: id,
          defaultMessage: defaultMessage || 'NOT_FOUND_INTL_KEY',
          defaultLocale: 'en',
          fallbackOnEmptyString: true
        } as MessageDescriptor,
        values,
        options
      );
      // Have fallback message
      if (fallbackText !== 'NOT_FOUND_INTL_KEY') {
        return fallbackText;
      } else {
        // Don't have fallback message
        return '';
      }
    }
  }
  return '';
};
export interface ILocaleContextProps {
  onChangeLocale: (locale: localeType) => void;
  locale: localeType;
  messages: messagesType;
  currentLocale: string | undefined;
  i18n: (id: string, values?: { [key: string]: string }, defaultMessage?: string, options?: any) => any;
}

const LocaleContext = React.createContext<any>({
  i18n: (id: string, values?: { [key: string]: string }, defaultMessage?: string, options?: any): any => {},
  currentLocale: undefined as string | undefined,
  onChangeLocale: (locale: string) => {}
});

export const flattenMessages = (nestedMessages: any, prefix = '') => {
  if (nestedMessages === null || nestedMessages === undefined) {
    return {};
  }
  return Object.keys(nestedMessages).reduce((messages, key) => {
    const value = nestedMessages[key];
    const prefixedKey = prefix ? `${prefix}.${key}` : key;

    if (typeof value === 'string') {
      Object.assign(messages, { [prefixedKey]: value });
    } else {
      Object.assign(messages, flattenMessages(value, prefixedKey));
    }

    return messages;
  }, {});
};

/**
 * useLocale context
 * @function i18n
 * @param id The lang key
 * @param values The object for injected value into text use `{value_key}`
 * Example: `This is example in {value_key}, Thanks!`
 * @returns Text
 *
 * For get current locale
 * @function currentLocale
 * @returns en or th
 *
 * For change language
 * @function onChangeLocale
 * @param lang en or th
 */
export const useLocale = () => useContext<ILocaleContextProps>(LocaleContext);

export const withLocaleHOC = (Component: any) => {
  return (props: any) => {
    const locale = useLocale();

    return <Component locale={locale} {...props} />;
  };
};

const cache = createIntlCache();

const IntlProvider = (
  props: PropsWithChildren & {
    locale: localeType;
    messages?: any;
  }
) => {
  const [intl, setIntl] = useState(
    createIntl({ locale: props.locale, messages: flattenMessages(props.messages) }, cache)
  );

  const handleChangeLocale = async (nextLocale: localeType) => {
    setCookie('lang', nextLocale);
    setIntl(createIntl({ locale: nextLocale, messages: flattenMessages(messages[nextLocale]) }, cache));
  };

  const i18nContext = (
    id: string,
    values?: { [key: string]: string },
    defaultMessage?: string,
    options?: any
  ): string => {
    if (id === '-') {
      return '-';
    }

    const text = intl.formatMessage(
      {
        id: id,
        defaultMessage: defaultMessage || 'NOT_FOUND_INTL_KEY',
        fallbackOnEmptyString: true
      } as MessageDescriptor,
      values,
      options
    );
    if (text !== 'NOT_FOUND_INTL_KEY') {
      return text;
    } else {
      // Fallback
      const fallbackText = intl.formatMessage(
        {
          id: id,
          defaultMessage: defaultMessage || 'NOT_FOUND_INTL_KEY',
          defaultLocale: 'en',
          fallbackOnEmptyString: true
        } as MessageDescriptor,
        values,
        options
      );
      // Have fallback message
      if (fallbackText !== 'NOT_FOUND_INTL_KEY') {
        return fallbackText;
      } else {
        // Don't have fallback message
        return '';
      }
    }
  };

  const handleSetIntl = () => {
    setIntl(createIntl({ locale: props.locale, messages: flattenMessages(props.messages) }, cache));
  };

  useEffect(() => {
    handleSetIntl();
  }, [props.locale]);

  const currentLocale = intl.locale;

  return (
    <LocaleContext.Provider
      value={{
        currentLocale: currentLocale,
        i18n: i18nContext,
        onChangeLocale: handleChangeLocale
      }}
    >
      <RawIntlProvider value={intl}>{props.children}</RawIntlProvider>
    </LocaleContext.Provider>
  );
};
export default IntlProvider;
