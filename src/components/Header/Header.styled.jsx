import styled from 'styled-components';
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  position: relative;
  z-index: 5;
  width: 100%;
  max-width: 375px;
  min-width: 320px;
  padding: 25px 20px;
  @media screen and (min-width: 768px) {
    max-width: 100%;
    padding: 28px 32px 0 32px;
  }
  @media screen and (min-width: 1440px) {
    padding: 28px 128px;
  }
`;
export const LogoDiv = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  &:hover,
  &:focus,
  &:active {
    /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); */
  }
  .logoImg {
    width: 32px;
    height: 32px;
  }
  @media screen and (min-width: 768px) {
    .logoImg {
      width: 44px;
      height: 44px;
    }
  }
`;
export const LogoText = styled.p`
  font-weight: 600;
  font-size: 16px;
  letter-spacing: -0.03em;
  color: ${({ $isHomePage }) => ($isHomePage ? ' #fff' : '#1d1e21')};
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;
export const NavDiv = styled.nav`
  align-items: center;
  display: none;
  @media screen and (min-width: 1280px) {
    display: flex;
  }
`;
export const NavParagraf = styled.div`
  padding: 8px;
  background: white;
  border-radius: 60px;
  border: 1px solid rgba(29, 30, 33, 0.1);
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  &:hover,
  &:focus,
  &:active {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;
export const NavParagrafInner = styled.p`
  padding: 8px 20px;
  margin: 0;
  background: white;
  background: ${({ $isActive }) => ($isActive ? ' #59b17a' : '#fff')};
  border-radius: 60px;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  white-space: nowrap;
  color: ${({ $isActive }) => ($isActive ? ' #fff' : ' #93939a')};
`;
export const MidleDiv = styled.div`
  width: 2px;
  height: 12px;
  background: white;
  position: relative;
`;
export const InnerDiv = styled.div`
  width: 6px;
  height: 12px;
  left: -2px;
  background: white;
  position: absolute;
  border-top: 1px solid rgba(29, 30, 33, 0.1);
  border-bottom: 1px solid rgba(29, 30, 33, 0.1);
  border-left: 1px solid white;
  border-right: 1px solid white;
`;
export const RegDiv = styled.div`
  display: flex;
  gap: 4px;
  display: none;

  @media screen and (min-width: 1280px) {
    display: flex;
  }
`;
export const RegButton = styled.button`
  background: #59b17a;
  border: 1px solid rgba(241, 241, 241, 0.5);
  border-radius: 60px;
  padding: 16px 32px;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  color: #f1f1f1;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  &:hover,
  &:focus,
  &:active {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;
export const LoginButton = styled.button`
  background: none;
  border: 1px solid #59b17a;
  border-radius: 60px;
  padding: 16px 32px;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  color: ${({ $isHomePage }) => ($isHomePage ? ' #fff' : '#59b17a')};
  text-decoration: underline;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  &:hover,
  &:focus,
  &:active {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;
export const LogoutButton = styled.button`
  border: 1px solid rgba(89, 177, 122, 0.5);
  border-radius: 60px;
  padding: 16px 32px;
  height: 46px;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  color: #59b17a;
  display: none;
  cursor: pointer;
  @media screen and (min-width: 1280px) {
    display: flex;
  }
`;
export const HeaderCartDiv = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 100%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  &:hover,
  &:focus,
  &:active {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;
export const HeaderRegDiv = styled.div`
  display: flex;
  gap: 8px;
`;
export const HeaderNameDiv = styled.div`
  width: 44px;
  height: 44px;
  display: flex;
  border-radius: 100%;
  background: ${({ $isHomePage }) =>
    $isHomePage ? ' #fff' : 'rgba(89, 177, 122, 0.1)'};
  font-weight: 600;
  font-size: 18px;
  line-height: 140%;
  color: #59b17a;
  align-items: center;
  justify-content: center;
`;
export const HeaderCartNumber = styled.div`
  border-radius: 100%;
  background: #e7f1ed;
  display: flex;
  width: 16px;
  height: 16px;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 12px;
  color: #59b17a;
  position: absolute;
  top: 0;
  right: 0;
`;
export const BurgerMenu = styled.div`
  display: block;
  @media screen and (min-width: 1280px) {
    display: none;
  }
`;
export const RegDivTablet = styled.div`
  display: flex;
  @media screen and (min-width: 1280px) {
    align-items: center;
  }
`;
