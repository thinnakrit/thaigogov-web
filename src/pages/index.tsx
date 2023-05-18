import { Fragment } from 'react';
import styled from '@emotion/styled';
import { Col } from 'react-grid-system';
import { v4 as uuid } from 'uuid';

import {
  BoxListWrapper,
  BoxRowWrapper,
  BoxTitleWrapper,
  BoxWrapper
} from '@root/components/commons/layout/box';
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
    },
    {
      title: 'รักษาพยาบาล',
      shortDescription: 'ค้นหาโรงพยาบาล / ติดต่อ / ร้องเรียน / สถิติ ฯลฯ'
    },
    {
      title: 'รักษาพยาบาล',
      shortDescription: 'ค้นหาโรงพยาบาล / ติดต่อ / ร้องเรียน / สถิติ ฯลฯ'
    },
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

  const queueLsit = [
    {
      title: 'กรมสนับสนุนบริการสุขภาพ',
      shortDescription: 'ระบบจองคิวออนไลน์ กรมสนับสนุนบริการสุขภาพ',
      externalLink: 'http://queue.hss.moph.go.th/home/bookingqueue'
    },
    {
      title: 'โรงพยาบาล',
      shortDescription: 'ระบบจองคิวออนไลน์ ของโรงพยาบาลในประเทศไทย'
    },
    {
      title: 'จองคิวทำใบขับขี่ออนไลน์',
      shortDescription: 'จองคิวทำใบขับขี่ออนไลน์ กรมการขนส่ง',
      externalLink: 'https://gecc.dlt.go.th/login'
    },
    {
      title: 'จองคิวทำบัตรประชาชนออนไลน์',
      shortDescription: 'นัดหมายเพื่อขอรับบริการล่วงหน้า ณ ที่ว่าการอำเภอ',
      externalLink: 'https://q-online.bora.dopa.go.th'
    },
    {
      title: 'จองคิวทำบัตรประชาชนออนไลน์',
      shortDescription: 'นัดหมายเพื่อขอรับบริการล่วงหน้า ณ ที่ว่าการอำเภอ',
      externalLink: 'https://q-online.bora.dopa.go.th'
    }
  ];

  return (
    <Fragment>
      <AsideWrapper>
        <div className="__web-title">Thai Go to Government</div>
        <div className="__web-desc">
          รวมข้อมูลภาครัฐเพื่อ<u>ประชาชน</u>ชาวไทยโดยคนไทย
        </div>
        <div>
          <SpecialSlideWrapper>
            <div className="__special-wrapper">
              <div className="__special-title">
                <h2>ค้นหาสิ่งที่อยากจะทำ</h2>
              </div>
              <div className="__special-detail">
                เช่น วิธีจดทะเบียนพานิชย์ ทำใบขับขี่ ร้องเรียนเทศบาล
                และเรื่องอื่นๆ
              </div>
              <div className="__special-search">
                <input
                  placeholder="ระบุสิ่งที่ต้องการค้นหา..."
                  className="__special-search-input"
                />
                <button className="__special-search-button">ค้นหา</button>
              </div>
            </div>
          </SpecialSlideWrapper>
        </div>
        <BoxTitleWrapper>วันนี้คุณต้องการทำอะไร ?</BoxTitleWrapper>
        <BoxWrapper fluid>
          <BoxRowWrapper gutterWidth={10}>
            {todayLsit.map((list) => {
              return (
                <Col xs={12} md={4} xl={3} key={uuid()}>
                  <BoxList
                    title={list.title}
                    shortDescription={list.shortDescription}
                  />
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
                  <BoxList
                    title={list.title}
                    shortDescription={list.shortDescription}
                  />
                </Col>
              );
            })}
          </BoxRowWrapper>
        </BoxWrapper>
        <BoxTitleWrapper>ระบบจองคิวหน่วยงานรัฐ</BoxTitleWrapper>
        <BoxWrapper fluid>
          <BoxRowWrapper gutterWidth={10}>
            {queueLsit.map((list) => {
              return (
                <Col xs={12} md={4} xl={3} key={uuid()}>
                  <BoxList
                    title={list.title}
                    shortDescription={list.shortDescription}
                  />
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
                  <img
                    src="https://prod-mfp-imgsrv.tillitsdone.com/uploads/medium__76d149dd4f.jpg"
                    alt="xx"
                  />
                </div>
                <div className="__box-list-content">
                  <div className="__box-list-title">
                    รับสมัครครูอัตราจ้าง โรงเรียนxxx
                  </div>
                  <div className="__box-list-short-desc">
                    รายละเอียดการรับสมัคร
                  </div>
                  <div className="__box-list-short-desc">
                    สังกัด: กระทรวงศึกษาธิการ
                  </div>
                  <div className="__box-list-short-desc">
                    วันที่ประกาศ: 12/05/2566
                  </div>
                </div>
              </BoxListWrapper>
            </Col>
          </BoxRowWrapper>
        </BoxWrapper>
      </AsideWrapper>
    </Fragment>
  );
}

const SpecialSlideWrapper = styled.div`
  .__special-wrapper {
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 95%;
    margin-left: auto;
    margin-right: auto;
  }

  .__special-title {
    h2 {
      font-size: 40px;
      overflow: hidden;
      text-align: left;
      text-overflow: ellipsis;
      text-shadow: 0 6px 12px rgb(0 0 0 / 8%);
      padding: 0px;
      margin: 0px;
    }
  }

  .__special-detail {
    font-size: 20px;
    overflow: hidden;
    text-align: left;
    text-overflow: ellipsis;
    text-shadow: 0 6px 12px rgb(0 0 0 / 8%);
    padding: 0px;
    margin: 0px;
  }

  .__special-search {
    align-items: center;
    background: #fff;
    border: 1px solid transparent;
    border-radius: 12px;
    box-sizing: border-box;
    color: #212121;
    display: flex;
    height: 56px;
    padding: 0 3px 0 16px;
    position: relative;
    max-width: 800px;
    border: 1px solid #ff5b00;
    margin-top: 20px;

    .__special-search-input {
      background-color: transparent;
      border: unset;
      border-radius: 6px;
      box-sizing: border-box;
      caret-color: #ff5722;
      color: #212121;
      font-size: 16px;
      font-size: 18px;
      font-weight: 400;
      height: 54px;
      line-height: 1.5;
      overflow: hidden;
      padding: 15px 0;
      position: relative;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 100%;
      outline: none;
    }

    .__special-search-button {
      align-items: center;
      background: #ff5b00;
      border-radius: 8px;
      color: #fff;
      cursor: pointer;
      display: flex;
      flex: none;
      font-size: 16px;
      font-weight: 500;
      height: 48px;
      line-height: 1.5;
      margin-left: 16px;
      padding: 0 40px;
      border: unset;
    }
  }
`;
