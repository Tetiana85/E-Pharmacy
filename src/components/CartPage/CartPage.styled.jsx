import styled from 'styled-components';
export const CartContainer = styled.div`
  width: 1224px;
  padding: 20px;
  margin: auto;
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    width: 704px;
  }
  @media screen and (max-width: 767px) {
    width: 335px;
    padding: 0;
  }
`;
export const CartMain = styled.div`
  display: flex;
  gap: 96px;
  margin-top: 32px;
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    flex-direction: column;
  }
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const CartFormDiv = styled.div`
  border-radius: 27px;
  width: 628px;
  background: #fff;
  padding: 40px;
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: #6a6a6f;
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    width: 704px;
  }
  @media screen and (max-width: 767px) {
    width: 355px;
    padding: 20px;
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
  width: 260px;
  height: 44px;
  padding: 18px;
  display: flex;
  margin-top: 8px;
  @media screen and (max-width: 767px) {
    width: 295px;
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
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 40px;
  @media screen and (max-width: 767px) {
    justify-content: flex-start;
  }
`;
export const CartPriceDiv = styled.div`
  border-radius: 8px;
  width: 548px;
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
  width: 141px;
  height: 44px;
  background: ${(props) => (props.disabled ? 'rgb(136, 178, 152)' : '#59b17a')};
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  color: #fff;
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
  width: 530px;
  margin: 40px auto;
  border: 0.5px solid rgba(29, 30, 33, 0.1);
  @media screen and (max-width: 767px) {
    width: 100%;
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
  height: 12px;
  width: 12px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    background-color: #59b17a;
    border: 1px solid #d1d5db;
  }

  &:checked:before {
    border-color: #fcfcfc;
  }

  &:checked::after {
    content: '';
    position: absolute;
    top: 50%;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: #fcfcfc;
    transform: translate(-50%, -50%);
    visibility: visible;
  }
`;

export const CartError = styled.div`
  color: red;
  position: relative;
  left: 20px;
`;

export const CartErrorRadio = styled.div`
  color: red;
`;
