import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import NoPage from './components/NoPage';
import Layout from './components/Layout';
import About from './components/About';
import Services from './components/Services';
import Team from './components/Team';
import Gallery from './components/Gallery';
import Products from './components/Products';
import Users from './components/Users';
import UserDetails from './components/UserDetails';
import ProductDetails from './components/ProductDetails';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>

  <BrowserRouter>
  <Routes>
    {/* Register all routes */}
    {/* General layout file : Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="team" element={<Team />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="products" element={<Products />} />
          <Route path="users" element={<Users />} />
          <Route path="usersdetails/:id" element={<UserDetails />} />
          
          <Route path="product_details" element={<ProductDetails />} />



          <Route path="*" element={<NoPage />} />
        </Route>
  </Routes>
</BrowserRouter>,

document.getElementById("root")

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
