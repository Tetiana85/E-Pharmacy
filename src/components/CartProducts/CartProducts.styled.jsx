import styled from 'styled-components';

export const LoaderContainer = styled.div`
  position: absolute;
  top: 300px;
  right: 20%;
  transform: translateX(-50%);
`;

export const CartProductUl = styled.ul`
  max-width: 355px;
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  position: relative;

  @media screen and (min-width: 375px) {
  }
  @media screen and (min-width: 768px) {
    max-width: 704px;
    margin-bottom: 100px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 460px;
  }
`;
export const CartProductLi = styled.li`
  width: 100%;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(29, 30, 33, 0.1);
  display: flex;
  gap: 20px;
  &:last-child {
    border-bottom: none;
  }
  @media screen and (min-width: 768px) {
  }
`;
export const CartProductImgDiv = styled.div`
  border: 1.15px solid #f1f1f1;
  border-radius: 27px;
  min-width: 120px;
  height: 120px;
  display: flex;
  @media screen and (min-width: 768px) {
    min-width: auto;
    width: 122px;
    height: 133px;
  }
`;

export const CartProductInfDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 203px;
  justify-content: space-between;
  font-weight: 400;
  font-size: 14px;
  line-height: 129%;
  color: #6a6a6f;
  @media screen and (min-width: 768px) {
    width: 562px;
  }
  @media screen and (min-width: 768px) {
    width: 318px;
  }
`;

export const CartProductNamePrice = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-weight: 600;
  font-size: 18px;
  line-height: 140%;
  color: #1d1e21;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;
export const CartProductButtonsDiv = styled.div`
  display: flex;
  width: 108px;
  padding: 0 18px;
  border-radius: 40px;
  border: 1px solid rgba(29, 30, 33, 0.1);
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  text-align: center;
  color: #1d1e21;
  gap: 12px;
  @media screen and (max-width: 767px) {
    width: 95px;
  }
`;
export const CartProductRemove = styled.button`
  border-radius: 40px;
  cursor: pointer;
  border: none;
  padding: 8px 12px;
  width: 89px;
  height: 33px;
  background: rgba(232, 80, 80, 0.1);
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.05em;
  text-align: center;
  color: #e85050;
`;

export const CartProductPlusMinusButton = styled.button`
  background: none;
  border: none;
  color: #59b17a;
  font-size: 27px;

  &:hover,
  &:focus,
  &:active {
    color: rgba(89, 177, 122, 0.4);
  }
`;
export const CartButtonsDiv = styled.div`
  display: flex;
  gap: 19px;
  justify-content: space-between;
  flex-wrap: wrap;
  @media screen and (min-width: 375px) {
    flex-wrap: nowrap;
  }
  @media screen and (min-width: 768px) {
  }
`;
export const CartEmpty = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 48px;
  font-weight: 600;
  font-size: 18px;
  line-height: 140%;
  color: #1d1e21;
`;
export const DopDiv = styled.div`
  display: block;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const DopDivOrder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-weight: 600;
  font-size: 16px;
  line-height: 140%;
  color: #1d1e21;
  margin-bottom: 18px;
  @media screen and (min-width: 375px) {
    margin-bottom: 0;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
export const DopDivHealth = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 117%;
  color: #6a6a6f;
`;
