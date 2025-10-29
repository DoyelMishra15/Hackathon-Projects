import React, { useState } from 'react'

export default function OrderForm({ setOrderData }) {
  const [form, setForm] = useState({ name: '', item: 'Burger', quantity: 1 })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch('https://campuscanteen-backend.onrender.com/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })

      const data = await res.json()
      setOrderData(data)
    } catch (err) {
      alert('Error placing order! Please check your backend.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="order-card">
      <h2>Place Your Order</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" required value={form.name} onChange={handleChange} />
        </label>

        <label>
          Item:
          <select name="item" value={form.item} onChange={handleChange}>
            <option>Burger</option>
            <option>Pizza</option>
            <option>Samosa</option>
            <option>Chowmein</option>
          </select>
        </label>

        <label>
          Quantity:
          <input type="number" name="quantity" min="1" required value={form.quantity} onChange={handleChange} />
        </label>

        <button type="submit" disabled={loading}>
          {loading ? 'Placing Order...' : 'Place Order'}
        </button>
      </form>
    </div>
  )
}
