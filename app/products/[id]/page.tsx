'use client';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import axios from 'axios';
import { Product } from '@/constant';

const ProductDetail: React.FC = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const { id } = params;
console.log(params)
  useEffect(() => {
    if (id) {
      axios.get(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/${id}`)
        .then(response => {
          setProduct(response.data);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching product:', error);
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="p-6 flex flex-col items-center">
      <div className="w-full max-w-3xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <img src={product.thumbnail} alt={product.title} className="w-full  object-cover rounded-lg mb-4" />
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
            <p className="text-blue-600 font-bold text-xl mb-2">${product.price}</p>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <p className="text-gray-700 mb-2"><strong>Brand:</strong> {product.brand}</p>
            <p className="text-gray-700 mb-2"><strong>Category:</strong> {product.category}</p>
            <p className="text-gray-700 mb-2"><strong>Rating:</strong> {product.rating}</p>
            <p className="text-gray-700 mb-2"><strong>Stock:</strong> {product.stock}</p>
            <p className="text-gray-700 mb-2"><strong>SKU:</strong> {product.sku}</p>
            <p className="text-gray-700 mb-2"><strong>Weight:</strong> {product.weight} kg</p>
            <p className="text-gray-700 mb-2"><strong>Dimensions:</strong> {product.dimensions.width} x {product.dimensions.height} x {product.dimensions.depth} cm</p>
            <p className="text-gray-700 mb-2"><strong>Warranty:</strong> {product.warrantyInformation}</p>
            <p className="text-gray-700 mb-2"><strong>Shipping:</strong> {product.shippingInformation}</p>
            <p className="text-gray-700 mb-2"><strong>Availability:</strong> {product.availabilityStatus}</p>
            <p className="text-gray-700 mb-2"><strong>Return Policy:</strong> {product.returnPolicy}</p>
            <p className="text-gray-700 mb-2"><strong>Minimum Order Quantity:</strong> {product.minimumOrderQuantity}</p>
            <div className="flex gap-2 my-2">
              {product.tags.map((tag, index) => (
                <span key={index} className="bg-gray-200 px-2 py-1 rounded">{tag}</span>
              ))}
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">Reviews</h3>
              {product.reviews.map((review, index) => (
                <div key={index} className="border-b py-2">
                  <p className="font-bold">{review.reviewerName}</p>
                  <p className="text-yellow-500">{`Rating: ${review.rating}`}</p>
                  <p>{review.comment}</p>
                  <p className="text-gray-500 text-sm">{new Date(review.date).toLocaleDateString()}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
