import styled from '@emotion/styled';

export const FooterWrapper = styled.footer`
  border-top: 1px solid rgb(227, 229, 250);
  margin-top: 25px;
  padding: 25px;

  .__download-app-list {
    display: inline-flex;
    flex-direction: column;
    gap: 5px;
  }

  .__footer-box {
    display: flex;
    flex: 1;
    gap: 25px;

    .__footer-box-list {
      display: flex;
      flex: 1;
      gap: 25px;
      flex-direction: column;
    }
  }
`;
