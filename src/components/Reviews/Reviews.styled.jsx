import styled from 'styled-components';
export const ReviewsUl = styled.ul`
  display: flex;
  max-width: 335px;
  padding: 0 10px;

  @media screen and (min-width: 768px) {
    gap: 16px;
    max-width: 100%;
  }
  @media screen and (min-width: 1440px) {
    gap: 28px;
  }
`;
export const ReviewsLi = styled.li`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  text-align: center;
  border: 1px solid #f1f1f1;
  border-radius: 27px;
  padding: 54px 16px 16px 16px;
  width: 100%;
  height: 232px;
  background: #fdfdfd;
  box-sizing: border-box;
  gap: 16px;
  font-weight: 600;
  font-size: 20px;
  line-height: 150%;
  text-align: center;
  color: #1d1e21;

  @media screen and (min-width: 768px) {
    max-width: 344px;
    padding: 54px 16px 32px 16px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 382px;
    padding: 54px 28px 32px 28px;
  }
`;

export const ReviewsText = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  text-align: center;
  color: #93939a;
  @media screen and (min-width: 768px) {
  }
`;
export const ReviewsImgDiv = styled.div`
  border-radius: 100%;
  width: 72px;
  height: 72px;
  background: pink;
  position: absolute;
  top: -33px;
  overflow: hidden;
`;
export const ReviewsImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
