import styled from 'styled-components';

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap: 8px;
  @media screen and (max-width: 767px) {
    margin-bottom: 20px;
  }
`;

export const PageButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 44px;
  height: 44px;
  border-radius: 100%;
  border: 1px solid rgba(38, 38, 38, 0.2);
  background: none;
  cursor: pointer;
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  @media screen and (max-width: 767px) {
    width: 40px;
    height: 40px;
    justify-content: center;
  }
`;
export const Pages = styled.div`
  display: flex;
  gap: 10px;
  margin: 0 16px;
  @media screen and (max-width: 767px) {
    margin: 0;
    gap: 5px;
  }
`;

export const PageSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 44px;
  height: 44px;
  border-radius: 100%;
  border: 1px solid rgba(38, 38, 38, 0.2);
  text-align: center;
  font-weight: 700;
  font-size: 18px;
  line-height: 122%;
  cursor: pointer;
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  @media screen and (max-width: 767px) {
    width: 33px;
    height: 33px;
  }
`;
export const PageSpanActiv = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 44px;
  height: 44px;
  border-radius: 100%;
  border: none;
  background: #59b17a;
  color: #fff;
  font-weight: 700;
  font-size: 18px;
  line-height: 122%;
  text-align: center;

  @media screen and (max-width: 767px) {
    width: 33px;
    height: 33px;
  }
`;
