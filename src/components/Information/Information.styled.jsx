import styled from 'styled-components';
export const InformationUl = styled.ul`
  width: 100%;
  max-width: 335px;
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  margin: auto;
  margin-bottom: 80px;
  gap: 16px;

  @media screen and (min-width: 375px) {
    padding: 0;
  }
  @media screen and (min-width: 768px) {
    max-width: 670px;
    margin-bottom: 120px;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 28px;
    padding: 0;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1019px;
    flex-wrap: nowrap;
  }
`;

export const InformationLi = styled.li`
  border: 1.15px solid #f1f1f1;
  border-radius: 27px;
  padding: 14px 18px;
  width: 100%;
  max-width: 335px;
  margin: auto;
  background: #fdfdfd;
  display: flex;
  flex-direction: column;
  height: 126px;
  justify-content: space-between;

  @media screen and (min-width: 375px) {
  }
  @media screen and (min-width: 768px) {
    margin: 0;
    width: 321px;
    height: 167px;
  }
  @media screen and (min-width: 1440px) {
  }
`;
export const TopInformationDiv = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  color: #252539;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const NumberDiv = styled.div`
  width: 54px;
  height: 54px;
  border-radius: 100%;
  background: rgba(231, 241, 237, 0.4);
  font-weight: 400;
  font-size: 28px;
  line-height: 100%;
  text-align: center;
  color: #59b17a;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 74px;
    height: 74px;
  }
`;
export const BottomInformationDiv = styled.div`
  display: flex;
  gap: 28px;
  align-items: center;
  font-weight: 500;
  font-size: 36px;
  line-height: 140%;
  color: #252539;
  @media screen and (max-width: 767px) {
    font-size: 24px;
  }
`;
export const ShopNow = styled.p`
  font-weight: 400;
  font-size: 13px;
  line-height: 140%;
  color: #93939a;
`;
