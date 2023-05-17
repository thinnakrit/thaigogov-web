import styled from '@emotion/styled';
import { Container, Row } from 'react-grid-system';

export const BoxTitleWrapper = styled.div`
  max-width: 95%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 25px;
  display: flex;
  font-size: 22px;
  font-weight: 900;
  border-top: 1px solid rgb(227, 229, 250);
  padding-top: 25px;
`;

export const BoxWrapper = styled(Container)`
  max-width: 95% !important;
  margin-left: auto !important;
  margin-right: auto !important;
  padding-left: 0px !important;
  padding-right: 0px !important;
`;

export const BoxRowWrapper = styled(Row)`
  margin-top: 25px;
`;

export const BoxListWrapper = styled.div`
  border-radius: 1.14rem;
  border: 1px solid rgb(227, 229, 250);
  background: rgb(255, 255, 255);
  margin-bottom: 10px;
  padding: 15px;
  position: relative;
  cursor: pointer;
  display: flex;
  flex: 1;

  .__box-list-source {
    position: relative;
    margin-right: 20px;
    width: 80px;
    height: 80px;
    overflow: hidden;
    border-radius: 15px;
    display: flex;
    align-items: center;
    jusify-content: center;
    img {
      width: 80px;
    }
  }

  .__box-list-content {
    display: flex;
    flex: 1;
    flex-direction: column;
  }

  .__box-list-title {
    font-size: 16px;
    font-weight: 700;
  }

  .__box-list-short-desc {
    font-size: 13px;
    font-weight: 300;
  }
`;
