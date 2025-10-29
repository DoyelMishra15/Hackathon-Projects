import React from 'react'

export default function Confirmation({ orderData, setOrderData }) {
  return (
    <div className="confirmation-card">
      <h2>✅ Order Confirmed!</h2>
      <p>{orderData.message}</p>
      <p><strong>Item:</strong> {orderData.quantity} x {orderData.item}</p>
      <p><strong>Order ID:</strong> {orderData.order_id}</p>

      <button onClick={() => setOrderData(null)}>Place Another Order</button>
    </div>
  )
}
