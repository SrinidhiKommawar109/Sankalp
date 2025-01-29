import React, { useState } from 'react';
import './Get.css'; // Make sure the corresponding styles are updated

const Get = () => {
  const [serviceRequest, setServiceRequest] = useState('');
  const [contactDetails, setContactDetails] = useState('');

  const handleRequestService = () => {
    alert(`Thank you! Your request for ${serviceRequest} has been submitted.`);
  };

  const products = [
    {
      productName: 'Eco-Friendly Bags',
      ngoName: 'Green Earth NGO',
      image: 'https://th.bing.com/th/id/R.f9d9a10d2e515b2e3a630a6878548a23?rik=kp%2blKykzxUBQlg&riu=http%3a%2f%2f4.bp.blogspot.com%2f-JihDAfgHLVg%2fTvJGqvnnKtI%2fAAAAAAAAJyM%2fKDoHcekgt0w%2fs1600%2fBagForLife.jpg&ehk=i77iyiXoPk7m30hMVz5PiW92cuJyIBTSJLF84Qupof0%3d&risl=&pid=ImgRaw&r=0', // Example image URL
      location: 'Hyderabad',
      availableCount: 50,
    },
    {
      productName: 'Water Purifiers',
      ngoName: 'Clean Water Initiative',
      image: 'https://m.media-amazon.com/images/I/71iMtv7yQ6L.jpg', // Example image URL
      location: 'Bangalore',
      availableCount: 30,
    },
  ];

  return (
    <div className="get-page">
      <div className="get-container">
        <h1>Get Services</h1>
        <p>Explore community-driven products and services available from NGOs.</p>
        
        <form onSubmit={(e) => e.preventDefault()}>
          <label>
            Service Needed:
            <input
              type="text"
              value={serviceRequest}
              onChange={(e) => setServiceRequest(e.target.value)}
              placeholder="Describe the service you need"
            />
          </label>
          <label>
            Your Contact Details:
            <input
              type="text"
              value={contactDetails}
              onChange={(e) => setContactDetails(e.target.value)}
              placeholder="Enter your email or phone number"
            />
          </label>
          <button type="button" onClick={handleRequestService}>
            Request Service
          </button>
        </form>

        <h2>Available Products</h2>
        <div className="product-list">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <img src={product.image} alt={product.productName} />
              <h3>{product.productName}</h3>
              <p><strong>NGO:</strong> {product.ngoName}</p>
              <p><strong>Location:</strong> {product.location}</p>
              <p><strong>Available Count:</strong> {product.availableCount}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Get;
