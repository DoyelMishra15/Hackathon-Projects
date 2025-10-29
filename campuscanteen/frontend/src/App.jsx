import React, { useState } from 'react'
import OrderForm from './components/OrderForm'
import Confirmation from './components/Confirmation'

export default function App() {
  const [orderData, setOrderData] = useState(null)

  return (
    <div className="app-container">
      <header>
        <h1>CampusCanteen</h1>
        <p>Order your favorite snacks quickly and easily 🍔</p>
      </header>

      {!orderData ? (
        <OrderForm setOrderData={setOrderData} />
      ) : (
        <Confirmation orderData={orderData} setOrderData={setOrderData} />
      )}

      <footer>
        <p>© 2025 CampusCanteen. All rights reserved.</p>
      </footer>
    </div>
  )
}
