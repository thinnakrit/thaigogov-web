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
//
import '@root/styles/global.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
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
        <HeaderWrapper>
          <div>logo</div>
          <div>
            <div>ค้นหา</div>
            <div>ข่าวจากรัฐ</div>
            <div>menu</div>
          </div>
        </HeaderWrapper>
        <PageWrapper>
          <Component {...pageProps} />
        </PageWrapper>
        <FooterWrapper>xxx</FooterWrapper>
      </Provider>
    </LocaleProvider>
  );
}

MyApp.getInitialProps = async (ctx: NextPageContext) => {
  const locale = await getLocale(ctx);

  return { locale, messages: messages[locale] };
};

export default MyApp;
