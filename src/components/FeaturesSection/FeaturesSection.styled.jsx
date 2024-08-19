import styled from 'styled-components';
export const FeaturesSectionUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  font-weight: 600;
  font-size: 14px;
  color: #1d1e21;
  line-height: 125%;
  letter-spacing: -0.02em;
  max-width: 300px;
  flex-wrap: wrap;
  margin-bottom: 80px;
  @media screen and (min-width: 375px) {
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
    max-width: 768px;
    flex-direction: row;
    margin-bottom: 120px;
    justify-content: center;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1152px;
    gap: 48px;
  }
`;
export const FeaturesDiv = styled.div`
  display: flex;
  gap: 8px;
`;
