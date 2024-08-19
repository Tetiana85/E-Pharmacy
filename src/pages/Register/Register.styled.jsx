import { ErrorMessage, Field, Form } from 'formik';
import styled from 'styled-components';
export const RegisterContainer = styled.div`
  margin: auto;
  display: flex;
  box-sizing: border-box;
  position: relative;
  flex-direction: column;
  align-items: center;
  padding: 106px 10px;
  max-width: 335px;

  @media screen and (min-width: 375px) {
    padding: 106px 0;
  }

  @media screen and (min-width: 768px) {
    max-width: 100%;
    padding: 168px 122px 0 32px;
    justify-content: center;
    gap: 54px;
    align-items: flex-start;
  }
  @media screen and (min-width: 1440px) {
    flex-direction: row;
    padding: 226px 122px 0 32px;
  }
`;
export const RegisterText = styled.div`
  /* width: 540px; */
  position: relative;
  color: #1d1e21;
  margin-bottom: 20px;
  @media screen and (min-width: 375px) {
  }
  @media screen and (min-width: 768px) {
    line-height: 121%;
    width: 614px;
  }
  h3 {
    font-size: calc(26px + (28 - 26) * ((100vw - 320px) / (375 - 320)));
    font-weight: 600;
    line-height: 121%;
    @media screen and (min-width: 375px) {
      font-size: 28px;
    }
    @media screen and (min-width: 768px) {
      font-size: 54px;
      line-height: 121%;
    }
  }
`;
export const RegisterImg = styled.img`
  position: absolute;
  width: calc(85px + (95 - 85) * ((100vw - 320px) / (375 - 320)));
  height: calc(83px + (93 - 83) * ((100vw - 320px) / (375 - 320)));
  top: -58px;
  right: calc(15px + (10 - 15) * ((100vw - 320px) / (375 - 320)));

  @media screen and (min-width: 375px) {
    right: 15px;
    width: 95px;
    height: 93px;
  }
  @media screen and (min-width: 768px) {
    width: 179px;
    height: 175px;
    top: -100px;
    right: 16px;
  }
`;
export const RegisterTextSpan = styled.span`
  color: #59b17a;
`;
export const RegisterForm = styled(Form)`
  max-width: 335px;
  width: 100%;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: rgba(29, 30, 33, 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  @media screen and (min-width: 375px) {
  }
  @media screen and (min-width: 768px) {
    max-width: 574px;
    align-items: flex-start;
  }
`;
export const LoginForm = styled(Form)`
  width: 323px;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: rgba(29, 30, 33, 0.4);
  display: flex;
  flex-direction: column;
  gap: 62px;
  @media screen and (max-width: 767px) {
    bottom: -122px;
    align-items: center;
  }
`;
export const RegisterFieldDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  max-width: 100%;
  @media screen and (min-width: 768px) {
    & > :last-child {
      margin-bottom: 62px;
    }
  }
  .inputBox {
    width: 100%;
    @media screen and (min-width: 768px) {
      width: auto;
    }
  }
`;
export const LogFieldDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;
export const RegisterField = styled(Field)`
  border: 1px solid rgba(29, 30, 33, 0.1);
  border-radius: 60px;
  width: 100%;
  height: 44px;
  background: #fff;
  padding: 0 18px;
  @media screen and (min-width: 768px) {
    width: 280px;
  }
`;

export const RegisterButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 14px;
  @media screen and (min-width: 768px) {
    width: auto;
  }
`;
export const RegisterButton = styled.button`
  border-radius: 60px;
  border: none;
  width: 100%;
  height: 44px;
  background: #59b17a;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  color: #fff;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  &:hover,
  &:focus,
  &:active {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  @media screen and (min-width: 768px) {
    width: 280px;
  }
`;

export const Error = styled(ErrorMessage)`
  color: red;
`;

export const FonDiv = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 10px;
  bottom: -170px;
  right: 0;
  @media screen and (max-width: 767px) {
    bottom: -122px;
  }
`;
