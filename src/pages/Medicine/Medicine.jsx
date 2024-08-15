import {
  ButtonsDiv,
  FieldSearch,
  FilterButton,
  FilterForm,
  MedicineAddButton,
  MedicineContainer,
  MedicineDetailsButton,
  MedicineFirm,
  MedicineH2,
  MedicineImgDiv,
  MedicineInfDiv,
  MedicineLi,
  MedicineNameDiv,
  MedicineUl,
  SearchSvg,
} from './Medicine.styled';
import { Formik } from 'formik';
import Select from 'react-select';
import * as Yup from 'yup';
import sprite from '../../img/sprite.svg';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCategories,
  getProducts,
  safeToken,
  updateCart,
} from '../../redux/operation';
import Paginations from '../../components/Pagination/Pagination';
import { useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useMediaQuery } from 'react-responsive';
import ModalLog from '../../components/Modal/ModalLog';
import ModalReg from '../../components/Modal/ModalReg';
import { SpinnerCircularFixed } from 'spinners-react';
import { SpinerDiv } from '../MedicineStore/MedicineStore.styled';

const validationSchema = Yup.object({
  keyword: Yup.string(),
  category: Yup.string(),
});

const Medicine = () => {
  const isTablet = useMediaQuery({
    query: '(max-width: 1280px)',
  });
  const [options, setOptions] = useState([]);
  const [pruductArray, setProductArray] = useState([]);
  const [filter, setFilter] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isToken, setIsToken] = useState('');
  const [limit] = useState(isTablet ? 9 : 12);
  const [filterValues, setFilterValues] = useState({
    category: '',
    keyword: '',
  });
  const [isModalLogOpen, setIsModalLogOpen] = useState(false);
  const [isModalRegOpen, setIsModalRegOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const storeToken = useSelector((state) => state.user);
  const isLoading = useSelector((state) => state.isLoading);

  const savedSettings = location.state?.settings;

  useEffect(() => {
    const fetchProd = async (settings) => {
      const categ = await dispatch(getCategories());
      const prod = await dispatch(
        getProducts({
          page: settings.page,
          limit,
          category: settings.category,
          keyword: settings.keyword,
        })
      );
      if (prod.meta.requestStatus === 'fulfilled') {
        setProductArray(prod.payload.products);
        setTotalPages(prod.payload.totalPages);
        setOptions(categ.payload.map((cat) => ({ value: cat, label: cat })));
      }
    };

    if (savedSettings) {
      fetchProd(savedSettings);
      const { page, category, keyword } = savedSettings;
      setPage(page);
      setFilterValues({
        category: category ? category : '',
        keyword: keyword ? keyword : '',
      });
    }
    if (!savedSettings) {
      return;
    }
    navigate(location.pathname, { replace: true });
  }, [savedSettings, navigate, location.pathname]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (storeToken.length === 0) {
      setIsToken('');
    } else {
      setIsToken(storeToken.token);
    }
  }, [storeToken.length, storeToken.token]);

  useEffect(() => {
    if (savedSettings) {
      return;
    }

    const toGetCategories = async () => {
      const categ = await dispatch(getCategories());
      const prod = await dispatch(
        getProducts({ page, limit, ...filterValues })
      );
      if (prod.meta.requestStatus === 'fulfilled') {
        setProductArray(prod.payload.products);
        setTotalPages(prod.payload.totalPages);
      }
      setOptions(categ.payload.map((cat) => ({ value: cat, label: cat })));
    };

    if (filter) {
      return;
    }
    const storedUserData = localStorage.getItem('e-pharmacy');
    if (storedUserData && storedUserData !== '[]') {
      const isToken = JSON.parse(storedUserData);
      if (isToken.token) {
        safeToken(isToken.token);
        setIsToken(isToken.token);
      }
    }

    toGetCategories();
  }, [dispatch, filter, limit, page]);

  const fetchProducts = async (val) => {
    const { category, keyword } = val;
    setFilterValues(val);
    const res = await dispatch(
      getProducts({ page: 1, limit, category, keyword })
    );

    if (res.meta.requestStatus === 'fulfilled') {
      setProductArray(res.payload.products);
      setPage(1);
      setTotalPages(res.payload.totalPages);
    }
  };

  const toAddToCart = async (id) => {
    if (isToken) {
      await dispatch(updateCart({ quantity: 1, productId: id }));

      toast('The product has been added to the cart', {
        style: { background: '#59b17a', color: 'white', fontSize: '16px' },
      });
    } else {
      setIsModalLogOpen(true);
    }
  };

  const addPage = () => {
    setFilter(false);

    setPage((prev) => prev + 1);
  };
  const subtractPage = () => {
    setPage((prev) => prev - 1);
  };
  const firstPage = () => {
    setPage(1);
  };
  const lastPage = () => {
    setFilter(false);
    setPage(totalPages);
  };
  const toPage = (nowPage) => {
    console.log(nowPage);
    setFilter(false);
    setPage(nowPage);
  };

  const toProduct = (item) => {
    navigate('/product', {
      state: {
        item,
        from: location.pathname,
        settings: { page, ...filterValues },
      },
    });
  };

  const toOpenLogModal = () => {
    setIsModalLogOpen(true);
  };
  const toCloseLogModal = () => {
    setIsModalLogOpen(false);
  };
  const toOpenRegModal = () => {
    setIsModalRegOpen(true);
  };
  const toCloseRegModal = () => {
    setIsModalRegOpen(false);
  };

  const customStyles = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      border: state.isFocused
        ? '1px solid #59b17a'
        : '1px solid rgba(29, 30, 33, 0.1)',
      '&:hover': {
        border: '1px solid #59b17a',
      },
      boxShadow: state.isFocused ? null : baseStyles.boxShadow,
      outline: 'none',
      width: '214px',
      height: '44px',
      background: '#fff',
      borderRadius: '60px',
      fontSize: '12px',
      fontWeight: '400',
      cursor: 'pointer',
      fontFamily: 'Inter, sans-serif',
    }),
    placeholder: (baseStyles) => ({
      ...baseStyles,
      color: 'rgba(29, 30, 33, 0.4)',
      fontSize: '12px',
      fontWeight: '400',
    }),
    option: (baseStyles, state) => ({
      ...baseStyles,
      fontFamily: 'Inter, sans-serif',
      border: 'none',
      fontSize: '12px',
      fontWeight: '400',
      outline: 'none',
      background: state.isSelected
        ? 'transparent'
        : state.isFocused
          ? 'transparent'
          : 'transparent',
      color: state.isSelected
        ? '#59b17a'
        : state.isFocused
          ? '#59b17a'
          : '#1D1E21',
      marginBottom: '-10px',
    }),

    menu: (baseStyles) => ({
      ...baseStyles,
      borderRadius: '10px',
      boxShadow: '0 4px 36px 0 rgba(0, 0, 0, 0.02)',
      fontSize: '12px',
      fontWeight: '400',
      marginTop: '5px',
    }),
    menuList: (baseStyles) => ({
      ...baseStyles,
      padding: 0,
      overflow: 'hidden',
    }),
    valueContainer: (baseStyles) => ({
      ...baseStyles,
      borderRadius: '14px',
      paddingLeft: '18px',
      boxShadow: '0 4px 36px 0 rgba(0, 0, 0, 0.02)',
    }),
    clearIndicator: (baseStyles) => ({
      ...baseStyles,
      display: 'none',
    }),
    dropdownIndicator: (baseStyles) => ({
      ...baseStyles,
      color: '#121417',
      paddingRight: '18px',
      '&:hover': {
        color: '#121417',
      },
    }),
    indicatorSeparator: () => ({
      display: 'none',
    }),
  };

  return (
    <MedicineContainer>
      <ToastContainer />
      <MedicineH2>Medicine</MedicineH2>
      <Formik
        initialValues={{ keyword: '', category: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setFilter(true);
          fetchProducts(values).then(() => {
            setSubmitting(false);
          });
        }}
      >
        {({ isSubmitting, handleChange, values, setFieldValue }) => (
          <FilterForm>
            <div>
              <Select
                id="category"
                name="category"
                options={options}
                styles={customStyles}
                placeholder="Product category"
                onChange={(option) => {
                  setFieldValue('category', option.value);
                  setFilterValues((prev) => ({
                    ...prev,
                    category: option.value,
                  }));
                }}
                value={
                  options
                    ? options.find((option) => option.value === values.category)
                    : ''
                }
              />
            </div>
            <div style={{ position: 'relative' }}>
              <FieldSearch
                placeholder="Search medicine"
                type="text"
                name="keyword"
                onChange={(e) => {
                  handleChange(e);
                  setFilterValues((prev) => ({
                    ...prev,
                    keyword: e.target.value,
                  }));
                }}
                value={
                  filterValues.keyword ? filterValues.keyword : values.keyword
                }
              />
              <SearchSvg width="16" height="16">
                <use href={`${sprite}#search`}></use>
              </SearchSvg>
            </div>
            <div>
              <FilterButton type="submit" disabled={isSubmitting}>
                <svg width="14" height="14">
                  <use href={`${sprite}#filter`}></use>
                </svg>
                Filter
              </FilterButton>
            </div>
          </FilterForm>
        )}
      </Formik>
      <MedicineUl>
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
        ) : pruductArray.length === 0 ? (
          <div>Nothing was found for your request</div>
        ) : (
          pruductArray?.map((item) => (
            <MedicineLi key={item._id}>
              <MedicineImgDiv>
                <img src={item.photo} alt={item.name} width="100%"></img>
              </MedicineImgDiv>
              <MedicineInfDiv>
                <MedicineNameDiv>
                  <p>{item.name}</p>
                  <p>৳{item.price}</p>
                </MedicineNameDiv>
                <MedicineFirm>{item.suppliers}</MedicineFirm>
                <ButtonsDiv>
                  <MedicineAddButton onClick={() => toAddToCart(item._id)}>
                    Add to cart
                  </MedicineAddButton>
                  <MedicineDetailsButton onClick={() => toProduct(item)}>
                    Details
                  </MedicineDetailsButton>
                </ButtonsDiv>
              </MedicineInfDiv>
            </MedicineLi>
          ))
        )}
      </MedicineUl>
      {totalPages !== 0 && (
        <Paginations
          add={addPage}
          subtract={subtractPage}
          page={page}
          first={firstPage}
          last={lastPage}
          total={totalPages}
          to={toPage}
        />
      )}
      {isModalLogOpen && (
        <ModalLog close={toCloseLogModal} openReg={toOpenRegModal} />
      )}
      {isModalRegOpen && (
        <ModalReg close={toCloseRegModal} openLog={toOpenLogModal} />
      )}
    </MedicineContainer>
  );
};

export default Medicine;
