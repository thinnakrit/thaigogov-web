import { NextPageContext } from 'next';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { Analytics } from '@vercel/analytics/react';
//
import LocaleProvider, { flattenMessages } from '@root/hooks/LocaleContext';
import { messages } from '@root/locales';
import store from '@root/stores';
import getLocale from '@root/utils/locale/getLocale';
import { PageWrapper } from '@root/components/commons/layout/page';
import { HeaderWrapper } from '@root/components/commons/layout/header';
import { FooterWrapper } from '@root/components/commons/layout/footer';
import PrimaryTemplate from '@root/components/template/PrimaryTemplate';
//
import '@root/styles/global.scss';
import '@root/styles/button.scss';
import 'swiper/css';
//
function MyApp({
  Component,
  pageProps,
  locale
}: AppProps & {
  locale: string;
}) {
  return (
    <LocaleProvider
      locale={locale}
      messages={flattenMessages(messages[locale])}
    >
      <Provider store={store}>
        <Analytics />
        <PrimaryTemplate>
          <Component {...pageProps} />
        </PrimaryTemplate>
      </Provider>
    </LocaleProvider>
  );
}

MyApp.getInitialProps = async (ctx: NextPageContext) => {
  const locale = await getLocale(ctx);

  return { locale, messages: messages[locale] };
};

export default MyApp;
