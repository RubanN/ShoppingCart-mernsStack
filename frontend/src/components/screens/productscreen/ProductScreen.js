import './ProductScreen.css'

const ProductScreen = () => {
    return (
        <div className="productScreen">
            <div className="productscreen__left">
                <div className="left__image">
                    <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" alt="product name" />
                </div>
                <div className="left__info">
                    <p className="left__name">Product 1</p>
                    <p >Price: $499.99</p>
                    <p>Description:   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    </p>
                </div>
            </div>
            <div className="productScreen__right">
                <div className="right__info">
                    <p>
                        Price:<span>$499.99</span>
                    </p>
                    <p>Status:<span>In Stock</span></p>
                    <p>
                        Qty
                        <select>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </p>
                    <p>
                        <button type="button">Add To Cart</button>
                    </p>
                </div>
            </div>

        </div>
    )
}

export default ProductScreen
