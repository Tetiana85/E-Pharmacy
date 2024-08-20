// import styled from 'styled-components';
// export const FeaturesSectionUl = styled.ul`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 48px;
//   font-weight: 600;
//   font-size: 14px;
//   color: #1d1e21;
//   line-height: 125%;
//   letter-spacing: -0.02em;
//   max-width: 300px;
//   flex-wrap: wrap;
//   margin-bottom: 80px;
//   @media screen and (min-width: 375px) {
//   }
//   @media screen and (min-width: 768px) {
//     font-size: 16px;
//     max-width: 768px;
//     flex-direction: row;
//     margin-bottom: 120px;
//     justify-content: center;
//   }
//   @media screen and (min-width: 1440px) {
//     max-width: 1152px;
//     gap: 48px;
//   }
// `;
// export const FeaturesDiv = styled.div`
//   display: flex;
//   gap: 8px;
// `;

import styled from 'styled-components';

export const FeaturesSectionUl = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: 600;
  font-size: 14px;
  color: #1d1e21;
  line-height: 125%;
  letter-spacing: -0.02em;
  margin-bottom: 80px;
  flex-wrap: nowrap;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  padding: 10px 0;
  max-width: 100%;

  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
    max-width: 768px;
    flex-direction: row;
    margin-bottom: 120px;
    justify-content: center;
    overflow-x: hidden;
    scroll-snap-type: none;
    gap: 43px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1152px;
    font-size: 16px;
    gap: 60px;
  }
`;

export const FeaturesDiv = styled.div`
  display: flex;
  gap: 8px;
  flex: 0 0 auto;
  scroll-snap-align: start;
  min-width: 240px;
  width: 240px;

  @media screen and (min-width: 375px) {
    min-width: 260px;
    width: 260px;
  }

  @media screen and (min-width: 768px) {
    min-width: unset;
    width: auto;
  }
`;
