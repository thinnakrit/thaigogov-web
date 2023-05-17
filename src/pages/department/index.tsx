import { Fragment } from 'react';
import styled from '@emotion/styled';
import { Col } from 'react-grid-system';
import { v4 as uuid } from 'uuid';

import { BoxListWrapper, BoxRowWrapper, BoxTitleWrapper, BoxWrapper } from '@root/components/commons/layout/box';
import BoxList from '@root/components/widgets/box/BoxList';
import { AsideWrapper } from '@root/components/commons/layout/aside';
//
export default function Department() {
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
        <div className="__web-title">กระทรวง</div>
        <div className="__web-desc">
          รวมข้อมูลภาครัฐเพื่อ<u>ประชาชน</u>ชาวไทยโดยคนไทย
        </div>
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
      </AsideWrapper>
    </Fragment>
  );
}
