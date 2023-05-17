import { Fragment } from 'react';
import styled from '@emotion/styled';
import { Col } from 'react-grid-system';
import { v4 as uuid } from 'uuid';

import { BoxListWrapper, BoxRowWrapper, BoxTitleWrapper, BoxWrapper } from '@root/components/commons/layout/box';
import BoxList from '@root/components/widgets/box/BoxList';
import { AsideWrapper } from '@root/components/commons/layout/aside';
//
export default function Home() {
  const todayLsit = [
    {
      title: 'รักษาพยาบาล',
      shortDescription: 'ค้นหาโรงพยาบาล / ติดต่อ / ร้องเรียน / สถิติ ฯลฯ'
    },
    {
      title: 'รักษาพยาบาล',
      shortDescription: 'ค้นหาโรงพยาบาล / ติดต่อ / ร้องเรียน / สถิติ ฯลฯ'
    }
  ];

  const departmentLsit = [
    {
      title: 'กระทรวงการศึกษา',
      shortDescription: '-'
    },
    {
      title: 'กระทรวงคมนาคม',
      shortDescription: '-'
    }
  ];

  return (
    <Fragment>
      <AsideWrapper>
        <div className="__web-title">Thai Go to Government</div>
        <div className="__web-desc">
          รวมข้อมูลภาครัฐเพื่อ<u>ประชาชน</u>ชาวไทยโดยคนไทย
        </div>
        <BoxTitleWrapper>วันนี้คุณต้องการทำอะไร ?</BoxTitleWrapper>
        <BoxWrapper fluid>
          <BoxRowWrapper gutterWidth={10}>
            {todayLsit.map((list) => {
              return (
                <Col xs={12} md={4} xl={3} key={uuid()}>
                  <BoxList title={list.title} shortDescription={list.shortDescription} />
                </Col>
              );
            })}
          </BoxRowWrapper>
        </BoxWrapper>
        <BoxTitleWrapper>กระทรวง</BoxTitleWrapper>
        <BoxWrapper fluid>
          <BoxRowWrapper gutterWidth={10}>
            {departmentLsit.map((list) => {
              return (
                <Col xs={12} md={4} xl={3} key={uuid()}>
                  <BoxList title={list.title} shortDescription={list.shortDescription} />
                </Col>
              );
            })}
          </BoxRowWrapper>
        </BoxWrapper>
        <BoxTitleWrapper>รับสมัครงานจากภาครัฐ</BoxTitleWrapper>
        <BoxWrapper fluid>
          <BoxRowWrapper gutterWidth={10} justify="start">
            <Col xs={12} md={4} xl={3}>
              <BoxListWrapper>
                <div className="__box-list-source">
                  <img src="https://prod-mfp-imgsrv.tillitsdone.com/uploads/medium__76d149dd4f.jpg" alt="xx" />
                </div>
                <div className="__box-list-content">
                  <div className="__box-list-title">รับสมัครครูอัตราจ้าง โรงเรียนxxx</div>
                  <div className="__box-list-short-desc">รายละเอียดการรับสมัคร</div>
                  <div className="__box-list-short-desc">สังกัด: กระทรวงศึกษาธิการ</div>
                  <div className="__box-list-short-desc">วันที่ประกาศ: 12/05/2566</div>
                </div>
              </BoxListWrapper>
            </Col>
          </BoxRowWrapper>
        </BoxWrapper>
      </AsideWrapper>
    </Fragment>
  );
}
