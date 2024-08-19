import { Field, Form } from 'formik';
import styled from 'styled-components';

export const MedicineContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  /* width: 1223px; */
  padding: 72px 20px 120px 20px;
  margin: auto;
  box-sizing: border-box;
  font-weight: 600;
  font-size: 28px;
  line-height: 114%;
  color: #1d1e21;
  max-width: 335px;
  padding: 0 10px;

  @media screen and (min-width: 375px) {
    padding: 0;
  }
  @media screen and (min-width: 768px) {
    max-width: 704px;
    padding: 62px 0px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1183px;
  }
`;

export const MedicineH2 = styled.h2`
  font-weight: 600;
  font-size: 28px;
  line-height: 114%;
  color: #1d1e21;
`;

export const MedicineUl = styled.ul`
  display: flex;
  gap: 33px;
  flex-wrap: wrap;
  margin: auto;
  @media screen and (min-width: 768px) {
    gap: 13px;
    & > li {
      margin-bottom: 19px;
    }
  }
  @media screen and (min-width: 1440px) {
    gap: 21px;
    & > li {
      margin-bottom: 27px;
    }
  }
`;

export const MedicineLi = styled.li`
  width: 100%;
  max-width: 335px;
  height: 443px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 8px;
  @media screen and (min-width: 375px) {
  }
  @media screen and (min-width: 768px) {
    width: 226px;
    height: 403px;
  }
  @media screen and (min-width: 1440px) {
    width: 280px;
    height: 423px;
  }
  @media screen and (max-width: 767px) {
    /* */
  }
`;

export const MedicineImgDiv = styled.div`
  border: 1.15px solid rgba(89, 177, 122, 0.6);
  border-radius: 20px;
  padding: 14px 18px;
  width: 100%;
  height: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    height: 260px;
  }
  @media screen and (max-width: 767px) {
    height: 300px;
  }
`;

export const MedicineInfDiv = styled.div`
  max-width: 335px;
  width: 100%;
  height: 135px;
  box-sizing: border-box;
  border-radius: 20px;
  background: #fff;
  padding: 20px;
  font-weight: 600;
  font-size: 18px;
  line-height: 140%;
  color: #1d1e21;

  @media screen and (min-width: 375px) {
  }
  @media screen and (min-width: 768px) {
    width: 100%;
    height: 135px;
  }
  @media screen and (min-width: 1440px) {
    width: 280px;
  }
`;

export const MedicineNameDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
  .medicineP {
    width: 123px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .medicinePrice {
    font-weight: bold !important;
  }
`;

export const MedicineFirm = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: rgba(29, 30, 33, 0.6);
  margin-bottom: 14px;
`;

export const ButtonsDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const MedicineAddButton = styled.button`
  border-radius: 24px;
  border: none;
  padding: 10px 16px;
  background: #59b17a;
  font-weight: 500;
  font-size: 14px;
  line-height: 100%;
  text-align: center;
  color: #fff;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  &:hover,
  &:focus,
  &:active {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const MedicineDetailsButton = styled.button`
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: #1d1e21;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  &:hover,
  &:focus,
  &:active {
    color: #59b17a;
  }
`;

export const FilterButton = styled.button`
  border-radius: 60px;
  padding: 13px 30px;
  width: 116px;
  height: 44px;
  background: #59b17a;
  border: none;
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  &:hover,
  &:focus,
  &:active {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  @media screen and (min-width: 768px) {
    width: 116px;
  }
`;

export const FilterForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 335px;
  /* padding: 0 10px; */

  @media screen and (min-width: 768px) {
    gap: 14px;
    padding: 0;
    flex-direction: row;
    width: 100%;
    max-width: 576px;
    /* justify-content: space-between; */
  }
`;

export const Select = styled.div`
  @media screen and (min-width: 768px) {
    width: 214px;
  }
`;
export const FieldSearch = styled(Field)`
  border: 1px solid rgba(29, 30, 33, 0.1);
  border-radius: 60px;
  width: 214px;
  height: 44px;
  background: #fff;
  padding-left: 18px;
  padding-right: 40px;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: #1d1e21;
  width: 100%;

  &::placeholder {
    color: rgba(29, 30, 33, 0.4);
  }

  &:hover,
  &:focus,
  &:active {
    border-color: #59b17a;
    outline: none;
  }

  @media screen and (min-width: 768px) {
    width: 224px;
  }
`;

export const SearchSvg = styled.svg`
  position: absolute;
  top: 13px;
  right: 20px;
`;
