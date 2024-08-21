import styled from 'styled-components';
export const CartContainer = styled.div`
  padding: 39px 20px 0;
  .cartName {
    max-width: 335px;
    margin: 0 auto;
    font-size: 28px;
    @media screen and (min-width: 768px) {
      max-width: 704px;
    }
    @media screen and (min-width: 1440px) {
      max-width: 704px;
      margin: 0 auto 0 0;
    }
  }

  @media screen and (min-width: 375px) {
    padding: 39px 0;
  }
  @media screen and (min-width: 768px) {
    padding: 80px 32px 0;
  }
  @media screen and (min-width: 1440px) {
    width: 1184px;
    margin: auto;
    padding: 92px 0 120px;
  }
`;
export const CartMain = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 375px;
  margin-top: 40px;

  @media screen and (min-width: 375px) {
    padding: 0;
    align-items: center;
    max-width: 100%;
  }
  @media screen and (min-width: 768px) {
    max-width: 100%;
    margin-top: 32px;
  }
  @media screen and (min-width: 1440px) {
    gap: 96px;
    margin-top: 40px;
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const CartFormDiv = styled.div`
  border-radius: 27px;
  max-width: 335px;
  padding: 20px 20px 40px;
  background: #fff;
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: #6a6a6f;
  margin-bottom: 80px;
  @media screen and (min-width: 375px) {
  }
  @media screen and (min-width: 768px) {
    padding: 40px 92px 40px 78px;
    max-width: 704px;
    margin-bottom: 64px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 628px;
    padding: 40px;
    margin-bottom: 0;
  }
`;
export const CartFormHead = styled.p`
  font-weight: 600;
  font-size: 20px;
  line-height: 140%;
  color: #1d1e21;
  margin-bottom: 14px;
`;

export const CartInput = styled.input`
  border: 1px solid rgba(29, 30, 33, 0.2);
  border-radius: 60px;
  width: 100%;
  height: 44px;
  padding: 18px;
  font-size: 12px;
  margin-top: 8px;

  &::placeholder {
    font-size: 12px;
    font-weight: 400;
  }

  &:hover,
  &:focus,
  &:active {
    border-color: #59b17a;
    outline: none;
  }

  @media screen and (min-width: 375px) {
    width: 295px;
  }
  @media screen and (min-width: 768px) {
    width: 260px;
    display: flex;
  }
`;
export const CartLabel = styled.label`
  font-weight: 600;
  font-size: 14px;
  line-height: 129%;
  color: #1d1e21;
  position: relative;
  left: 20px;
`;

export const CartForm = styled.form`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 40px;
  @media screen and (min-width: 768px) {
    gap: 20px 14px;
  }
`;
export const CartPriceDiv = styled.div`
  border-radius: 8px;
  width: 100%;
  height: 65px;
  background: #e7f1ed;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 18px;
  line-height: 140%;
  color: #1d1e21;
`;
export const CartFormButton = styled.button`
  border-radius: 60px;
  border: none;
  padding: 13px 32px;
  max-width: 141px;
  height: 44px;
  background: ${(props) => (props.disabled ? 'rgb(136, 178, 152)' : '#59b17a')};
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  color: #fff;
  margin-top: 6px;
  cursor: ${(props) => (props.disabled ? 'none' : 'pointer')};
  transition: box-shadow 0.3s ease;
  &:hover,
  &:focus,
  &:active {
    box-shadow: ${(props) =>
      props.disabled ? 'none' : ' 0 4px 8px rgba(0, 0, 0, 0.2);'};
  }
`;
export const CartForHr = styled.hr`
  max-width: 530px;
  width: 100%;
  margin: 26px auto 40px auto;
  border: 0.5px solid rgba(29, 30, 33, 0.1);
  @media screen and (min-width: 768px) {
    margin: 24px auto 40px auto;
  }
`;
export const CartRadioDiv = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 20px;
  list-style-type: none;
  padding: 0;

  span {
    margin-left: 8px;
  }
`;

export const CartRadioItem = styled.li`
  position: relative;
  display: flex;
  gap: 8px;
  font-weight: 400;
  font-size: 12px;
  text-align: center;
  color: #fcfcfc;
  align-items: center;

  @media only screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

export const RadioButton = styled.input`
  height: 14px;
  width: 14px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
  cursor: pointer;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    border: 2px solid rgba(18, 20, 23, 0.2);
  }

  &:checked:before {
    border-color: #59b17a;
    background-color: #fff;
  }

  &:checked::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background-color: #59b17a;
    transform: translate(-50%, -50%);
    visibility: visible;
  }
`;

export const CartError = styled.div`
  color: red;
  position: relative;
  left: 20px;
  font-size: 12px;
`;

export const CartErrorRadio = styled.div`
  color: red;
  font-size: 12px;
`;
