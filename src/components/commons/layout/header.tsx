import styled from '@emotion/styled';

export const HeaderWrapper = styled.header`
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  overflow-x: hidden;

  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  z-index: 4;
  transition: all 1s ease 0s;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  .__header-body {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 95%;
    height: 65px;
    margin-left: auto;
    margin-right: auto;
  }

  .__header-left {
    height: 65px;
    padding-left: 10px;
    padding-right: 10px;
  }

  .__header-right {
    display: flex;
    flex-direction: row;
    gap: 15px;
  }
`;
