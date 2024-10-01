import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import AddProducts from './components/AddProducts';
import ProductList from './components/ProductList';
import ProductDetailInput from './components/ProductDetailInput';
import ProductAddedMessage from './components/ProductAddedMessage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/productlist" element={<ProductList />} />
          <Route path="/add-product" element={<AddProducts />} />
          <Route path="/product-details" element={<ProductDetailInput/>} />
          <Route path="/product-added-message" element={<ProductAddedMessage/>} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
