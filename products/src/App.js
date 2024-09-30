import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import AddProducts from './components/AddProducts';
import ProductList from './components/ProductList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/productlist" element={<ProductList />} />
          <Route path="/add-product" element={<AddProducts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
