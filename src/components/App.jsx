import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { SpinnerCircularFixed } from 'spinners-react';
import SharedLayout from './SharedLayout/SharedLayout';

const Home = lazy(() => import('../pages/Home/Home'));
const Registration = lazy(() => import('../pages/Register/Register'));
const MedicineStore = lazy(
  () => import('../pages/MedicineStore/MedicineStore')
);
const Medicine = lazy(() => import('../pages/Medicine/Medicine'));
const Product = lazy(() => import('../pages/Drug/Drug'));
const Cart = lazy(() => import('./CartPage/CartPage'));

const App = () => {
  return (
    <>
      <Suspense
        fallback={
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '20%',
            }}
          >
            <SpinnerCircularFixed
              size={50}
              thickness={100}
              speed={100}
              color="rgba(57, 172, 115, 1)"
              secondaryColor="rgba(172, 212, 182, 0.6)"
            />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/register" element={<Registration />}></Route>
            <Route path="/login" element={<Registration />}></Route>
            <Route path="/medicine-store" element={<MedicineStore />}></Route>
            <Route path="/medicine" element={<Medicine />}></Route>
            <Route path="/product" element={<Product />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
export default App;
