import {
  Adress,
  CloseDiv,
  MedicineStoreAdres,
  MedicineStoreContainer,
  MedicineStoreLi,
  MedicineStoreName,
  MedicineStoreUl,
  MedicineStoreVisiteDiv,
  NameDiv,
  OpenDiv,
  SpinerDiv,
  StarDiv,
  StarDivMob,
  StarNambeDiv,
  StarNumber,
  VisiteButton,
} from './MedicineStore.styled';
import sprite from '../../img/sprite.svg';
import elementsImg from '../../img/elements.png';
import elementsImgTablet from '../../img/elements_tablet.png';
import { useEffect, useState } from 'react';
import { getStore } from '../../redux/operation';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { SpinnerCircularFixed } from 'spinners-react';

const MedicineStore = () => {
  const [store, setStore] = useState([]);
  const dispatch = useDispatch();
  const isTablet = useMediaQuery({
    query: '(min-width: 768px)',
  });
  const isLoading = useSelector((state) => state.isLoading);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchStore = async () => {
      const res = await dispatch(getStore());
      if (res.meta.requestStatus === 'fulfilled') {
        setStore(res.payload);
      }
    };
    fetchStore();
  }, [dispatch]);
  const displayedMedStor = isTablet ? store.slice(0, 8) : store;
  return (
    <MedicineStoreContainer>
      <h3>Medicine store</h3>
      {isLoading ? (
        <SpinerDiv>
          <SpinnerCircularFixed
            size={50}
            thickness={100}
            speed={100}
            color="rgba(57, 172, 115, 1)"
            secondaryColor="rgba(172, 212, 182, 0.6)"
          />
        </SpinerDiv>
      ) : (
        <MedicineStoreUl>
          {displayedMedStor?.map((item) => (
            <MedicineStoreLi key={item._id}>
              <NameDiv>
                <MedicineStoreName>{item.name}</MedicineStoreName>
                <StarDivMob>
                  <StarNambeDiv>
                    <svg width="18" height="18">
                      <use href={`${sprite}#starY`}></use>
                    </svg>
                    <StarNumber>{item.rating}</StarNumber>
                  </StarNambeDiv>
                  {item.status === 'open' ? (
                    <OpenDiv>open</OpenDiv>
                  ) : (
                    <CloseDiv>close</CloseDiv>
                  )}
                </StarDivMob>
              </NameDiv>
              <MedicineStoreAdres>
                <svg width="18" height="18">
                  <use href={`${sprite}#map-pin`}></use>
                </svg>
                <Adress>{item.address}</Adress>
              </MedicineStoreAdres>
              <MedicineStoreAdres>
                <svg width="18" height="18">
                  <use href={`${sprite}#phone`}></use>
                </svg>
                <p>{item.phone}</p>
              </MedicineStoreAdres>
              <MedicineStoreVisiteDiv>
                <VisiteButton>Visit Store</VisiteButton>
                <StarDiv>
                  <StarNambeDiv>
                    <svg width="18" height="18">
                      <use href={`${sprite}#starY`}></use>
                    </svg>
                    <StarNumber>{item.rating}</StarNumber>
                  </StarNambeDiv>
                  {item.status === 'open' ? (
                    <OpenDiv>open</OpenDiv>
                  ) : (
                    <CloseDiv>close</CloseDiv>
                  )}
                </StarDiv>
              </MedicineStoreVisiteDiv>
              {isTablet ? (
                <img
                  src={elementsImgTablet}
                  alt="elements"
                  style={{
                    position: 'absolute',
                    top: '18px',
                    right: '18px',
                    width: '90px',
                    height: '90px',
                    borderRadius: '18px',
                    transform: 'scale(1.4)',
                  }}
                />
              ) : (
                <img
                  src={elementsImg}
                  alt="elements"
                  style={{
                    position: 'absolute',
                    bottom: '18px',
                    right: '18px',
                    width: '90px',
                    height: '90px',
                    borderRadius: '18px',
                    transform: 'scale(1.4)',
                  }}
                />
              )}
            </MedicineStoreLi>
          ))}
        </MedicineStoreUl>
      )}
    </MedicineStoreContainer>
  );
};
export default MedicineStore;
