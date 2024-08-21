import styled from 'styled-components';
export const FooterContainer = styled.footer`
  background: #59b17a;
  width: 100%;
  height: 334px;
  padding: 20px;
  color: #f7f8fa;
  @media screen and (min-width: 768px) {
    padding: 32px;
  }
  @media screen and (min-width: 1440px) {
    padding: 0;
  }
`;
export const InnerFooterContainer = styled.div`
  margin: auto;
  @media screen and (min-width: 768px) {
  }
`;
export const TopFooterDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-bottom: calc(70px + (80 - 70) * ((100vw - 320px) / (375 - 320)));

  @media screen and (min-width: 375px) {
    margin-bottom: 80px;
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 88px;
    flex-direction: row;
    max-width: 100%;
  }
  @media screen and (min-width: 1440px) {
    padding: 40px 128px 64px 128px;
    margin-bottom: 0;
  }
`;
export const Nav = styled.nav`
  display: flex;
  gap: 31px;
  font-weight: 600;
  font-size: 14px;
  line-height: 125%;
  color: #f7f8fa;
  margin-top: 40px;
  @media screen and (min-width: 768px) {
    gap: 32px;
    font-size: 16px;
    margin-top: 0;
  }
`;
export const FooterLogoDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  font-weight: 600;
  font-size: 16px;
  letter-spacing: -0.03em;
  color: #f7f8fa;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }

  .footerLogo {
    width: 32px;
    @media screen and (min-width: 768px) {
      width: 44px;
    }
  }
`;
export const FooterText = styled.p`
  max-width: 261px;
  font-size: 14px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 311px;
  }
`;
export const MediaDiv = styled.div`
  display: none;
  gap: 12px;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;
export const Media = styled.a`
  border: 1px solid rgba(247, 248, 250, 0.1);
  border-radius: 10px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  &:hover,
  &:focus,
  &:active {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(247, 248, 250, 0.5);
  }
  .footerIcon {
    width: 28px;
    height: 28px;
  }
`;
export const BottomFooterDiv = styled.div`
  display: flex;
  font-size: 10px;
  gap: 10px;
  font-weight: 400;
  align-items: center;
  justify-content: flex-start;
  padding-top: 20px;
  border-top: 1px solid rgba(247, 248, 250, 0.3);
  flex-wrap: wrap;
  @media screen and (min-width: 768px) {
    padding-top: 40px;
    font-size: 14px;
    line-height: 100%;
    color: #f7f8fa;
    justify-content: center;
    gap: 24px;
  }
  @media screen and (min-width: 1440px) {
    padding: 41px;
  }
`;
export const Span = styled.span`
  width: 1px;
  height: 20px;
  background: #f7f8fa;
  opacity: 0.2;
`;

export const FooterNavP = styled.p`
  color: #fff;
  text-decoration: ${({ $isActive }) => ($isActive ? ' underline' : 'none')};
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  &:hover,
  &:focus,
  &:active {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;
export const Div = styled.div`
  display: flex;
  gap: 270px;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 32px;
  }
  @media screen and (min-width: 1440px) {
    flex-direction: row;
    align-items: flex-start;
    width: 704px;
    justify-content: space-between;
  }
`;
