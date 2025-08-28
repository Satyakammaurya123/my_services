import "./Cart.css";

export default function Cart() {
  return (
    <div className="cart-container">
      {/* Left Side - Suggested Items */}
      <div className="cart-suggestions">
        <h2>Similar Items from Your Search</h2>
        <div className="suggestion-box">
          <p>(Suggested items will be displayed here)</p>
        </div>
      </div>

      {/* Right Side - Your Orders */}
      <div className="cart-orders">
        <h2>Your Orders</h2>
        <div className="orders-box">
          <p>(Your order details will appear here)</p>
        </div>
        <button className="proceed-btn">Click to Proceed</button>
      </div>
    </div>
  );
}
