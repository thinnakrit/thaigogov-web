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
export default function Department() {
  const list = [
    {
      title: 'รายชื่อโรพยาบาลรัฐ',
      shortDescription: '-'
    },
    {
      title: 'รายชื่อโรพยาบาลเอกชน',
      shortDescription: '-'
    },
    {
      title: 'สถานพยาบาล',
      shortDescription: '-'
    },
    {
      title: 'กายภาพบำบัด',
      shortDescription: '-'
    },
    {
      title: 'คลินิกมะเร็ง',
      shortDescription: '-'
    },
    {
      title: 'หลอดเลือดและหัวใจ',
      shortDescription: '-'
    },
    {
      title: 'สมอง',
      shortDescription: '-'
    },
    {
      title: 'ระบบทางเดินหายใจ',
      shortDescription: '-'
    },
    {
      title: 'ศัลยกรรม',
      shortDescription: '-'
    }
  ];

  return (
    <Fragment>
      <AsideWrapper>
        <div className="__web-title">รักษาพยาบาล</div>
        <BoxWrapper fluid>
          <BoxRowWrapper gutterWidth={10}>
            {list.map((list) => {
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
      </AsideWrapper>
    </Fragment>
  );
}
