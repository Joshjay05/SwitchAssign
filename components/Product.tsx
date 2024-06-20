'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { Product, CartProduct, addToCart } from '@/cartSlice';

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('');
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_ENDPOINT}`);
        setProducts(response.data.products);
        setFilteredProducts(response.data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    let filtered = products.filter(product =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );

    if (sort === 'price-asc') {
      filtered = filtered.sort((a, b) => a.price - b.price);
    } else if (sort === 'price-desc') {
      filtered = filtered.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(filtered);
  }, [search, sort, products]);

  const handleAddToCart = (product: Product) => {
    const cartProduct: CartProduct = { ...product, quantity: 1 };
    dispatch(addToCart(cartProduct));
  };

  const handleProductClick = (id: number) => {
    router.push(`products/${id}`);
  };

  return (
    <div className="p-6 flex flex-col items-center">
      <div className="w-full max-w-3xl flex flex-col md:flex-row justify-between mb-6">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="border p-2 mb-4 md:mb-0 md:mr-4 w-full md:w-auto"
        />
        <select
          value={sort}
          onChange={e => setSort(e.target.value)}
          className="border p-2 w-full md:w-auto"
        >
          <option value="">Sort by</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {filteredProducts.map(product => (
          <div 
            key={product.id} 
            className="border rounded-lg overflow-hidden cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg py-[20px]"
            onClick={() => handleProductClick(product.id)}
          >
            <img src={product.thumbnail} alt={product.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
              <p className="text-blue-600 font-bold mb-2">${product.price}</p>
              {/* <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleAddToCart(product);
                }}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Add to Cart
              </button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
