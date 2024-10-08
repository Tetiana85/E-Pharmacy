import styled from 'styled-components';
export const NearestStoreUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  margin-bottom: 80px;
  width: 100%;
  max-width: 335px;
  padding: 0 10px;
  gap: 20px;
  @media screen and (min-width: 375px) {
    padding: 0;
    gap: 16px;
  }
  @media screen and (min-width: 768px) {
    max-width: 704px;
    margin-bottom: 120px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1248px;
    gap: 36px;
  }
`;

export const NearestStoreLi = styled.li`
  position: relative;
  border: 1.15px solid #f1f1f1;
  border-radius: 27px;
  padding: 32px;
  height: 202px;
  background: #e7f1ed;
  box-sizing: border-box;
  width: 100%;
  max-width: 335px;
  height: 202px;
  @media screen and (min-width: 768px) {
    max-width: 344px;
    height: 232px;
    padding: 40px 24px 36px 40px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 392px;
  }
`;
export const NearestStoreName = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  font-size: 20px;
  line-height: 140%;
  color: #1d1e21;
  align-items: center;
  margin-bottom: 40px;
  @media screen and (max-width: 767px) {
    margin-bottom: 32px;
    align-items: flex-start;
  }
`;
export const Name = styled.p`
  width: 123px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 16px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;
export const NearestStoreOpen = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
`;
export const OpenDiv = styled.div`
  border-radius: 8px;
  width: 65px;
  height: 34px;
  background: rgba(89, 177, 122, 0.1);
  font-weight: 600;
  font-size: 12px;
  line-height: 150%;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  color: #59b17a;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const CloseDiv = styled.div`
  border-radius: 8px;
  width: 65px;
  height: 34px;
  background: rgba(232, 80, 80, 0.1);
  font-weight: 600;
  font-size: 12px;
  line-height: 150%;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  color: #e85050;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const StarDiv = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
`;
export const StarNumber = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  color: #1d1e21;
`;
export const NearestStoreAdress = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: #93939a;
`;
export const NearestStoreAdressSvg = styled.div`
  display: flex;
  gap: 8px;
`;
export const Adress = styled.p`
  width: 120px;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;
