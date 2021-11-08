import './CartScreen.css'
//components
import CartItem from "../../cartItem/CartItem"
const CartScreen = () => {
    return (
        <div className="cartscreen">
            <div className="cartsreen__left">

                <CartItem />
            </div>
            <div className="cartsreen__right">
                <div className="cartsreen__info">
                    <p>Subtotal (0) items</p>
                    <p>$499.99</p>
                </div>
                <div>
                    <button>Proceed to checkout</button>
                </div>
            </div>
        </div>
    )
}

export default CartScreen
// CartItem