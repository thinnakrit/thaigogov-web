import { NextPageContext } from 'next';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
//
import LocaleProvider, { flattenMessages } from '@root/hooks/LocaleContext';
import { messages } from '@root/locales';
import store from '@root/stores';
import getLocale from '@root/utils/locale/getLocale';

function MyApp({
  Component,
  pageProps,
  locale
}: AppProps & {
  locale: string;
}) {
  return (
    <LocaleProvider locale={locale} messages={flattenMessages(messages[locale])}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </LocaleProvider>
  );
}

MyApp.getInitialProps = async (ctx: NextPageContext) => {
  const locale = await getLocale(ctx);

  return { locale, messages: messages[locale] };
};

export default MyApp;
