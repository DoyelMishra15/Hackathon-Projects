from flask import Flask, request, jsonify
from flask_cors import CORS
import random

app = Flask(__name__)
CORS(app)  # Allow frontend (React) to connect with backend

@app.route('/order', methods=['POST'])
def order():
    data = request.get_json()
    name = data.get('name')
    item = data.get('item')
    quantity = data.get('quantity')

    order_id = f"CC{random.randint(1000, 9999)}"

    return jsonify({
        "message": f"Thank you, {name}. Your order has been placed!",
        "item": item,
        "quantity": quantity,
        "order_id": order_id
    })

if __name__ == '__main__':
    app.run(debug=True)
