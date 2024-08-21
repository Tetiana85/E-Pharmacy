import styled from 'styled-components';
export const DrugContainer = styled.div`
  margin: 0 auto;
  display: flex;
  gap: 8px;
  justify-content: center;
  position: relative;
  max-width: 375px;
  flex-direction: column;
  margin-bottom: 60px;
  padding: 20px;

  @media screen and (min-width: 375px) {
  }

  @media screen and (min-width: 768px) {
    align-items: center;
    max-width: 704px;
    padding: 32px 0;
    margin-bottom: 88px;
    gap: 16px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    max-width: 1184px;
    align-items: start;
    padding: 0;
    margin: 78px auto 120px;
    gap: 0;
  }
`;

export const DrugCart = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    width: 100%;

    gap: 16px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: column;
  }
`;
export const DrugImgDiv = styled.div`
  border: 1.15px solid rgba(89, 177, 122, 0.6);
  border-radius: 27px;
  padding: 14px 18px;
  max-width: 100%;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    width: 364px;
    height: 284px;
  }

  @media screen and (min-width: 1440px) {
    height: 337px;
  }
`;
export const DrugInfDiv = styled.div`
  border-radius: 20px;
  width: 100%;
  height: 160px;
  background: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    width: 324px;
    height: 284px;
    position: relative;
    padding: 32px;
  }
  @media screen and (min-width: 1440px) {
    width: 364px;
    height: 174px;
    padding: 20px;
  }
`;
export const DrugNameDiv = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  font-size: 16px;
  line-height: 140%;
  color: #1d1e21;

  @media screen and (min-width: 768px) {
    flex-direction: column;
    gap: 54px;
    font-size: 20px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
  }
`;

export const DrugFirm = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  margin-top: 4px;
  color: rgba(29, 30, 33, 0.6);

  @media screen and (min-width: 768px) {
    position: absolute;
    top: 53px;
  }
`;

export const DrugButtonsDiv = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 60px;
  margin-top: 32px;

  @media screen and (min-width: 375px) {
    gap: 47px;
  }

  @media screen and (min-width: 768px) {
    gap: 12px;
    margin-top: 66px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 60px;
  }
`;

export const DrugAddButton = styled.button`
  border-radius: 60px;
  border: none;
  padding: 13px 25px;
  width: 100%;
  max-width: calc(120px + (140 - 120) * ((100vw - 320px) / (375 - 320)));
  height: 44px;
  background: #59b17a;
  font-weight: 500;
  font-size: calc(12px + (14 - 12) * ((100vw - 320px) / (375 - 320)));
  line-height: 129%;
  color: #fff;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  &:hover,
  &:focus,
  &:active {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  @media screen and (min-width: 375px) {
    max-width: 140px;
    gap: 47px;
    padding: 13px 32px;
    font-size: 14px;
  }
`;
export const PlusMinusDiv = styled.div`
  border-radius: 60px;
  display: flex;
  gap: 12px;
  max-width: 108px;
  height: 44px;
  padding: 12px 18px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  align-items: center;
  justify-content: center;
`;
export const PlusMinusButton = styled.button`
  color: #59b17a;
  background: none;
  border: none;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
    color: rgba(89, 177, 122, 0.4);
  }
`;

export const InformDiv = styled.div`
  border-radius: 27px;
  background: #fff;
  padding: 20px;
  max-width: 335px;

  @media screen and (min-width: 768px) {
    max-width: 704px;
    padding: 32px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 800px;
    padding: 40px;
  }
`;
export const InformButtonsDiv = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
`;
export const InformButton = styled.button`
  border-radius: 40px;
  border: none;
  padding: 8px 25px;
  width: 120px;
  height: 33px;
  background: ${({ $prop }) =>
    $prop ? ' #59b17a' : 'rgba(89, 177, 122, 0.1)'};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: calc(12px + (14 - 12) * ((100vw - 320px) / (375 - 320)));
  letter-spacing: -0.05em;
  text-align: center;
  color: ${({ $prop }) => ($prop ? ' #fff' : '#59b17a')};
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  &:hover,
  &:focus,
  &:active {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  @media screen and (min-width: 375px) {
    font-size: 14px;
  }
`;
