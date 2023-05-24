import { Fragment, ReactNode } from 'react';
import { ReactSVG } from 'react-svg';
//
import { PageWrapper } from '@root/components/commons/layout/page';
import { HeaderWrapper } from '@root/components/commons/layout/header';
import { FooterWrapper } from '@root/components/commons/layout/footer';
//
const PrimaryTemplate = ({ children }: { children: ReactNode }) => {
  return (
    <Fragment>
      <HeaderWrapper>
        <div className="__header-body">
          <div className="__header-left">
            <img
              src="/tgg-logo.png"
              alt="logo"
              style={{
                width: 65
              }}
            />
          </div>
          <div className="__header-right">
            <div className="__header-search">ค้นหา</div>
            <div className="__header-menu">ข่าวจากรัฐ</div>
            <div className="__header-option">menu</div>
          </div>
        </div>
      </HeaderWrapper>
      <PageWrapper>
        {children}
        <FooterWrapper>
          <div>
            แพลตฟอร์มนี้จัดทำขึ้นโดยประชาชน โดยรัฐบาลไม่มีส่วนเกี่ยวข้องใดๆ
          </div>
          <div className="__footer-box">
            <div className="__download-app-list">
              <div>ใช้งานผ่านแอพลิเคชั่น</div>
              <div className="line-button">
                <div className="line-button-icon">
                  <ReactSVG
                    src="/icon/line.svg"
                    beforeInjection={(svg) => {
                      svg.setAttribute('style', 'width: 34px;  height: 34px');
                    }}
                  />
                </div>
                <div className="line-button-detail">
                  <div className="line-button-get">GET IN ON</div>
                  <div className="line-button-name">Line Official</div>
                </div>
              </div>
              <div className="__download-button">
                <div className="__download-button-icon">
                  <ReactSVG
                    src="/icon/apple-store.svg"
                    beforeInjection={(svg) => {
                      svg.setAttribute('style', 'width: 24px;  height: 24px');
                    }}
                  />
                </div>
                <div className="__download-button-detail">
                  <div className="__download-button-get">Download on the</div>
                  <div className="__download-button-name">Apple Store</div>
                </div>
              </div>
              <div className="__download-button">
                <div className="__download-button-icon">
                  <ReactSVG
                    src="/icon/google-play.svg"
                    beforeInjection={(svg) => {
                      svg.setAttribute('style', 'width: 24px; height: 24px');
                    }}
                  />
                </div>
                <div className="__download-button-detail">
                  <div className="__download-button-get">GET IT ON</div>
                  <div className="__download-button-name">Google Play</div>
                </div>
              </div>
              <div className="__download-button">
                <div className="__download-button-icon">
                  <ReactSVG
                    src="/icon/app-gallery.svg"
                    beforeInjection={(svg) => {
                      svg.setAttribute(
                        'style',
                        'width: 24px; height: 24px; background: #C02C31; border-radius: 5px;'
                      );
                    }}
                  />
                </div>
                <div className="__download-button-detail">
                  <div className="__download-button-get">EXPLORE IT ON</div>
                  <div className="__download-button-name">App Gallary</div>
                </div>
              </div>
            </div>
            <div className="__footer-box-list">
              <div>กระทรวง</div>
              <ul>
                <li>กระทรวงกลาโหม</li>
                <li>กระทรวงมหาดไท</li>
              </ul>
            </div>
            <div className="__footer-box-list">
              <div>พันธมิตร</div>
              <ul>
                <li>ลงทะเบียนนักเขียน</li>
                <li>อัพเดทข้อมูลรับสมัครงานราชการ</li>
              </ul>
            </div>
            <div className="__footer-box-list">
              <div>ข้อมูลแพลตฟอร์ม</div>
              <ul>
                <li>แนะนำ/เสนอแนะ</li>
                <li>ข้อตกลงและเงื่อนไขการใช้งาน</li>
                <li>ข้อมูลคุ้กกี้</li>
                <li>ข้อมูลผู้จัดทำและรายละเอียดระบบ</li>
              </ul>
            </div>
          </div>
          <div className="__licence">
            © 2023 เว็บไซต์นี้เป็นกรรมสิทธิ์และดําเนินการโดย Phatthalung Market
            Limited Ltd. (0933564001621)
            การใช้งานเว็บไซต์นี้ถือว่าท่านตกลงและยอมรับใน{' '}
            <a href="#">ข้อกำหนดและเงื่อนไขข้อกำหนดการใช้งาน</a> และ{' '}
            <a href="#">คำชี้แจ้งสิทธิส่วนบุคคล</a> ของเรา
          </div>
        </FooterWrapper>
      </PageWrapper>
    </Fragment>
  );
};

export default PrimaryTemplate;
