import React, { useState } from 'react';
import './Buy.css'; // Ensure corresponding styles are updated

const Buy = () => {
  const [productName, setProductName] = useState('');
  const [vendorName, setVendorName] = useState('');
  const [vendorPhone, setVendorPhone] = useState('');
  const [cost, setCost] = useState('');

  const handlePurchase = () => {
    alert(`Thank you for purchasing ${productName} from ${vendorName} for ₹${cost}. We will contact the vendor at ${vendorPhone} to proceed with your order.`);
  };

  return (
    <div className="buy-page">
      <div className="buy-container">
        <h1>Buy Products</h1>
        <p>Support social causes by purchasing products from trusted vendors.</p>
        <form onSubmit={(e) => e.preventDefault()}>
          <label>
            Product Name:
            <input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              placeholder="Enter product name"
            />
          </label>
          <label>
            Vendor Name:
            <input
              type="text"
              value={vendorName}
              onChange={(e) => setVendorName(e.target.value)}
              placeholder="Enter vendor name"
            />
          </label>
          <label>
            Vendor Phone:
            <input
              type="tel"
              value={vendorPhone}
              onChange={(e) => setVendorPhone(e.target.value)}
              placeholder="Enter vendor phone number"
            />
          </label>
          <label>
            Cost (₹):
            <input
              type="number"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
              placeholder="Enter product cost"
            />
          </label>
          <button type="button" onClick={handlePurchase}>
            Purchase
          </button>
        </form>
      </div>
    </div>
  );
};

export default Buy;
