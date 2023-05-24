import { Fragment } from 'react';
import styled from '@emotion/styled';
import { Col } from 'react-grid-system';
import { v4 as uuid } from 'uuid';
import Sticky from 'react-stickynode';
//
import {
  BoxListWrapper,
  BoxRowWrapper,
  BoxTitleWrapper,
  BoxWrapper
} from '@root/components/commons/layout/box';
import BoxList from '@root/components/widgets/box/BoxList';
import { AsideWrapper } from '@root/components/commons/layout/aside';
import Carousel from '@root/components/commons/carousel';
//
export default function DepartmentDetail() {
  return (
    <Fragment>
      <AsideWrapper>
        <div className="__web-title">กระทรวงการศึกษาธิการ</div>
        <div className="__web-desc">
          รวมข้อมูลภาครัฐเพื่อ<u>ประชาชน</u>ชาวไทยโดยคนไทย
        </div>
        <BoxWrapper fluid>
          <BoxRowWrapper gutterWidth={25}>
            <Col xs={12} md={4} xl={3}>
              <Sticky enabled={true} top={100}>
                <DepartmentProfileWrapper>
                  <div className="__profile-logo">logo</div>
                  <div className="__profile-contact">
                    <div className="__profile-contact-list">
                      <div className="__profile-contact-list-detail">tel</div>
                      <div className="__profile-contact-list-detail">email</div>
                      <div className="__profile-contact-list-social">
                        <div>facebook</div>
                        <div>twitter</div>
                      </div>
                    </div>
                    <div className="__profile-contact-map">map</div>
                  </div>
                </DepartmentProfileWrapper>
              </Sticky>
            </Col>
            <Col xs={12} md={8} xl={9}>
              <DepartmentCarousel>
                <Carousel />
              </DepartmentCarousel>
              <BoxWrapper fluid>
                <BoxRowWrapper gutterWidth={25}>
                  <BoxContentListWrapper>
                    <div className="__content-cover">cover</div>
                    <div className="__content-title">title</div>
                    <div className="__content-short-desc">short_desc</div>
                    <div className="__content-tags">tags</div>
                    <div className="__content-date">date</div>
                  </BoxContentListWrapper>
                </BoxRowWrapper>
              </BoxWrapper>
            </Col>
          </BoxRowWrapper>
        </BoxWrapper>
      </AsideWrapper>
    </Fragment>
  );
}

const BoxContentListWrapper = styled.div``;

const DepartmentProfileWrapper = styled.div`
  display: flex;
  background-color: #fff;
  border-radius: 15px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px;
  gap: 25px;

  .__profile-logo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 150px;
    border-radius: 100%;
    background: #ccc;
  }

  .__profile-contact {
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;

    .__profile-contact-list {
      display: flex;
      flex-direction: column;
      flex: 1;
      width: 100%;
      gap: 5px;
      .__profile-contact-list-social {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 25px;
      }
    }
  }
`;

const DepartmentCarousel = styled.div``;
