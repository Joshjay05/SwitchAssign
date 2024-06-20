'use client';
import React from 'react';
import ProductList from '@/components/Product';
// import { Provider } from 'react-redux';
// import store from '@/store';
const HomePage: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-6">Product List</h1>
      <ProductList />
      </div>
  
  );
};

export default HomePage;