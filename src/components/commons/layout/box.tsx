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

  background: rgb(255, 255, 255);
  margin-bottom: 10px;
  padding: 15px;
  position: relative;
  cursor: pointer;
  display: flex;
  flex: 1;
  box-shadow: 0 20px 25px -5px rgb(150 150 180 / 40%),
    0 10px 10px -5px rgb(150 150 180 / 20%);

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

export const ActivityBoxListWrapper = styled.div(
  ({
    sourceBackground,
    sourceUrl
  }: {
    sourceBackground?: string;
    sourceUrl?: string;
  }) => {
    return `
  border-radius: 1.14rem;
  background: rgb(255, 255, 255);
  position: relative;
  cursor: pointer;
  display: flex;
  flex: 1;
  width: 350px;
  height: 280px;
  overflow: hidden;
  z-index: 1;
  box-shadow: 0 20px 25px -5px rgb(150 150 180 / 40%),
    0 10px 10px -5px rgb(150 150 180 / 20%);
  ransform-style: preserve-3d;
  transition: box-shadow 0.2s ease, transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }
  .__box-background-source {
    position: absolute;
    width: 350px;
    height: 280px;
    background-image: url(${sourceUrl});
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 2;
    

    &:before {
      content: '';
      position: absolute;
      width: 350px;
      height: 280px;
      top: 0px;
      left: 0px;
      background-image: linear-gradient(
        135deg,
        ${sourceBackground} 0%,
        rgba(0, 128, 255, 0) 70%,
        rgba(255, 255, 255, 0) 100%
      );
      z-index: 2;
    }
  }

  .__box-body {
    position: relative;
    z-index: 3;
    padding: 25px;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;

    .__box-body-content {
      color: #fff;

      .__box-title {
        font-size: 22px;
        font-weight: 500;
      }

      .__box-desc {
        font-size: 13px;
        font-weight: 300;
      }
    }
  }
`;
  }
);
