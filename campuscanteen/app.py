from flask import Flask, render_template, request
import random

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/order', methods=['POST'])
def order():
    name = request.form['name']
    item = request.form['item']
    quantity = request.form['quantity']
    order_id = f"CC{random.randint(1000, 9999)}"
    return render_template('confirmation.html', name=name, item=item, quantity=quantity, order_id=order_id)

if __name__ == '__main__':
    app.run(debug=True)