import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Layout/Header';
import ProductState from './contexts/products/ProductState';
import Profile from './components/Profile/Profile';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import UserState from './contexts/users/UserState';
import Crud from './components/CRUD/Crud';
import Footer from './components/Layout/Footer';
import ProductsList from './components/ProductsList/ProductsList';
import ProductDetail from './components/ProductsList/ProductDetail';
import CartState from './contexts/cart/CartState';
import Cart from './components/Cart/Cart';
import Nosotros from './components/Home/Nosotros';
import Contacto from './components/Home/Contacto';
import Success from './components/Success/Success';

function App() {
  return (
    <UserState>
      <ProductState>
        <CartState>
          <Router>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
              }}
            >
              <Header />
              <main style={{ flexGrow: 1, alignSelf: 'center' }}>
                <Routes>
                  {/* {RUTAS PRIVADAS} */}
                  <Route path="/perfil" element={<Profile />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/crud" element={<Crud />} />
                  <Route path='/pago-exitoso' element={<Success />} />
                  {/* {RUTAS DE AUTENTICACIÓN} */}
                  <Route path="/registro" element={<Register />} />
                  <Route path="/iniciar-sesion" element={<Login />} />
                  {/* {RUTAS PÚBLICAS} */}
                  <Route path="/obtener-productos" element={<ProductsList />} />
                  <Route
                    path="/obtener-producto/:id"
                    element={<ProductDetail />}
                  />
                  <Route path="/" element={<Home />} />
                  <Route path="/nosotros" element={<Nosotros />} />
                  <Route path="/contacto" element={<Contacto />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </Router>
        </CartState>
      </ProductState>
    </UserState>
  );
}

export default App;
