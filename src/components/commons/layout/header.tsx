import styled from '@emotion/styled';

export const HeaderWrapper = styled.header`
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  overflow-x: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 65px;
  z-index: 4;
  transition: all 1s ease 0s;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;
