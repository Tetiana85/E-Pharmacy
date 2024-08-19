import styled from 'styled-components';
import photoM from '../../img/add-mob.png';
import photo from '../../img/Add.png';
export const AddMedicinesContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 64px;
  border-radius: 32px;
  padding: 40px 20px 20px 20px;
  background: #59b17a;
  box-sizing: border-box;
  height: 674px;
  width: 100%;
  max-width: calc(300px + (335 - 300) * ((100vw - 320px) / (375 - 320)));
  flex-direction: column;
  gap: 39px;

  @media screen and (min-width: 375px) {
  }
  @media screen and (min-width: 768px) {
    max-width: 704px;
    padding: 104px 52px 40px 48px;
    height: 911px;
    gap: 0;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1248px;
    height: 486px;
    flex-direction: row;
    padding: 40px 40px 40px 80px;
  }
`;

export const AddMedicinesLeft = styled.div`
  max-width: 288px;
  @media screen and (min-width: 768px) {
    max-width: 100%;
  }
`;
export const AddMedicinesParagraf = styled.p`
  font-weight: 600;
  font-size: 28px;
  line-height: 114%;
  letter-spacing: -0.01em;
  color: #f1f1f1;
  margin-bottom: 24px;
  @media screen and (min-width: 768px) {
    font-size: 48px;
    line-height: 115%;
  }
`;
export const AddMedicinesText = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: #f1f1f1;
  margin-bottom: 40px;
  @media screen and (max-width: 767px) {
    font-size: 14px;
    line-height: 129%;
  }
`;
export const AddMedicinesButton = styled.button`
  border: 1px solid rgba(241, 241, 241, 0.5);
  border-radius: 60px;
  padding: 13px 50px;
  background: none;
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  color: #f1f1f1;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  &:hover,
  &:focus,
  &:active {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 83px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 0;
  }
`;
export const AddMedicinesImgDiv = styled.div`
  background-image: url(${photoM});

  width: 295px;
  height: 335px;
  @media screen and (min-width: 768px) {
    background-image: url(${photo});
    background-repeat: no-repeat;
    width: 608px;
    height: 406px;
  }
  @media screen and (min-width: 1440px) {
  }
`;
