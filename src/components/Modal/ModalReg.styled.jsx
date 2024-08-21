import { Field } from 'formik';
import styled from 'styled-components';

export const ModalRegContainer = styled.div`
  background: #fff;
  border-radius: 20px;
  width: 343px;
  position: relative;
  padding: 40px 34px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 101;
  gap: 14px;
  font-weight: 400;
  font-size: 14px;
  line-height: 125%;
  text-align: center;
  color: #6a6a6f;

  .textLink {
    font-size: 12px;
  }

  @media screen and (min-width: 320px) and (max-width: 374px) {
    width: calc(100% - 30px);
    padding: 40px 20px;
  }

  @media screen and (min-width: 768px) {
    width: 463px;
    padding: 50px 70px;
    font-size: 16px;

    .textInfo {
      width: 280px;
    }
  }
`;
export const ModalRegField = styled(Field)`
  width: 100%;
  border: 1px solid rgba(29, 30, 33, 0.1);
  border-radius: 60px;
  padding: 13px 18px;
`;
export const ModalRegH3 = styled.h3`
  font-weight: 600;
  font-size: 28px;
  line-height: 114%;
  text-align: center;
  color: #1d1e21;
`;
