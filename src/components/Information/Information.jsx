import {
  BottomInformationDiv,
  InformationLi,
  InformationUl,
  NumberDiv,
  ShopNow,
  TopInformationDiv,
} from './Information.styled';
import { NavLink, useLocation } from 'react-router-dom';

const Information = () => {
  const location = useLocation();

  return (
    <InformationUl>
      <InformationLi>
        <TopInformationDiv>
          <NumberDiv>1</NumberDiv>
          <p>Huge Sale</p>
        </TopInformationDiv>
        <BottomInformationDiv>
          <p>70%</p>
          <NavLink to="/medicine" state={{ from: location.pathname }}>
            <ShopNow>Shop now</ShopNow>
          </NavLink>
        </BottomInformationDiv>
      </InformationLi>
      <InformationLi>
        <TopInformationDiv>
          <NumberDiv>2</NumberDiv>
          <p>Secure delivery</p>
        </TopInformationDiv>
        <BottomInformationDiv>
          <p>100%</p>
          <NavLink to="/medicine" state={{ from: location.pathname }}>
            <ShopNow>Read more</ShopNow>
          </NavLink>
        </BottomInformationDiv>
      </InformationLi>
      <InformationLi>
        <TopInformationDiv>
          <NumberDiv>3</NumberDiv>
          <p>Off</p>
        </TopInformationDiv>
        <BottomInformationDiv>
          <p>35%</p>
          <NavLink to="/medicine" state={{ from: location.pathname }}>
            <ShopNow>Shop now</ShopNow>
          </NavLink>
        </BottomInformationDiv>
      </InformationLi>
    </InformationUl>
  );
};
export default Information;
