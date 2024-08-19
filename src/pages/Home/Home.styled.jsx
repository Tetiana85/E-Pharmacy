import styled from 'styled-components';
export const HomeContainer = styled.main`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: -104px;
`;
export const HomeMain = styled.div`
  width: 100%;
  height: 812px;
  background: #59b17a;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 40px;
  padding: 0 20px;
  @media screen and (min-width: 768px) {
    height: 1024px;
    margin-bottom: 64px;
  }
`;
export const HomeMainText = styled.p`
  /* width: 609px; */
  font-weight: 600;
  font-size: calc(40px + (50 - 40) * ((100vw - 320px) / (375 - 320)));
  /* font-size: 74px; */
  width: 100%;
  max-width: 331px;
  line-height: 100%;
  color: #fff;
  text-shadow: 0 4px 85px 0 rgba(29, 30, 33, 0.3);
  margin-bottom: 24px;
  position: relative;
  z-index: 2;
  @media screen and (min-width: 375px) {
    font-size: 50px;
  }
  @media screen and (min-width: 768px) {
    font-size: 74px;
    max-width: 609px;
  }
`;
export const HomeMainImg = styled.img`
  position: absolute;
  bottom: -84px;
  right: -77px;
  width: 134%;

  @media screen and (min-width: 768px) {
    /* max-width: 704px; */
    bottom: -160px;
    right: -96px;
    width: 125%;
  }
`;

export const HomeText = styled.p`
  font-weight: 400;
  font-size: calc(10px + (12 - 10) * ((100vw - 320px) / (375 - 320)));
  line-height: 125%;
  color: #fff;
  /* width: 207px; */
  position: relative;
  left: calc(167px + (177 - 167) * ((100vw - 320px) / (375 - 320)));
  width: calc(116px + (156 - 116) * ((100vw - 320px) / (375 - 320)));

  @media screen and (min-width: 375px) {
    font-size: 12px;
    left: 177px;
    width: 156px;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    width: 207px;
    left: 390px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 16px;
    line-height: 133%;
    right: -355px;
  }
`;
export const HomeStores = styled.h2`
  font-weight: 600;
  font-size: 28px;
  line-height: 120%;
  text-align: center;
  max-width: 291px;
  color: #1d1e21;
  margin: 0;
  margin-bottom: 14px;
  @media screen and (min-width: 768px) {
    font-size: 40px;
    max-width: 553px;
  }
`;
export const HomeSearch = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 125%;
  text-align: center;
  color: #93939a;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    margin-bottom: 64px;
  }
`;
export const HomeReviews = styled.p`
  font-weight: 600;
  font-size: 28px;
  line-height: 120%;
  text-align: center;
  color: #1d1e21;
  margin-bottom: 14px;
  max-width: 291px;
  @media screen and (min-width: 768px) {
    font-size: 40px;
    max-width: 553px;
  }
`;
export const HomeReviewsText = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  text-align: center;
  color: #93939a;
  margin-bottom: 64px;
  @media screen and (min-width: 768px) {
    margin-bottom: 88px;
  }
  @media screen and (min-width: 1440px) {
  }
`;
