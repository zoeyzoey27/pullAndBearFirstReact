import '../style.css'
import Announcement from '../components/announcement'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import Newsletter from '../components/newsletter'
import cart1 from '../images/cart-1.jpg'
import cart2 from '../images/cart-2.jpg'

const Cart = () => {
    return (
        <div>
            <Announcement/>
            <Navbar/>
            <div className="cart-container">
                <h1 className="title">Giỏ hàng của bạn</h1>
                <div className="cart-top">
                   <div className="button">
                       <button className="btn">Tiếp tục mua sắm</button>
                   </div>
                   <span className="cart-text">Giỏ hàng của bạn <p>(2)</p></span>
                   <div className="button">
                       <button className="btn">Thanh toán giỏ hàng</button>
                   </div>
                </div>
                <div className="cart-bottom">
                      <div className="product">
                      <div className="cart-product">
                      <div className="product-detail">
                          <img src={cart1} alt=""/>
                          <div className="cart-info">
                                  <div className="cart-product-name"><b>Sản phẩm: </b><p>Rubberised flat ankle boots</p></div>
                                  <p className="cart-product-size"><b>Size: </b> S</p>
                          </div>
                      </div>
                      <div className="price-detail">
                          <div className="product-amount-container">
                              <div className="add">+</div>
                              <div className="product-amount">1</div>
                              <div className="remove">-</div>
                          </div>
                          <div className="product-price">1299000</div>
                      </div>
                      </div>
                      <hr/>
                      <div className="cart-product">
                      <div className="product-detail">
                          <img src={cart2} alt=""/>
                          <div className="cart-info">
                                  <div className="cart-product-name"><b>Sản phẩm: </b><p>Quilted mini tote bag</p></div>
                                  <p className="cart-product-size"><b>Size: </b> S</p>
                          </div>
                      </div>
                      <div className="price-detail">
                          <div className="product-amount-container">
                              <div className="add">+</div>
                              <div className="product-amount">1</div>
                              <div className="remove">-</div>
                          </div>
                          <div className="product-price">699000</div>
                      </div>
                      </div>
                      </div>
                      <div className="summary">
                          <div className="summary-title">Thanh toán</div>
                          <div className="summary-item">
                              <span className="summary-item-text">Tổng tiền hàng</span>
                              <p className="summary-item-price">1299000</p>
                          </div>
                          <div className="summary-item">
                              <span className="summary-item-text">Phí ship</span>
                              <p className="summary-item-price">30000</p>
                          </div>
                          <div className="summary-item">
                              <span className="summary-item-text">Mã giảm giá</span>
                              <p className="summary-item-price">-30000</p>
                          </div>
                          <div className="summary-item">
                              <span className="summary-item-text" type="total">Tổng thanh toán</span>
                              <p className="summary-item-price">1299000</p>
                          </div>
                          <button className="btn">Thanh toán</button>
                      </div>
                </div>
            </div>
            <Newsletter/>
            <Footer/>
        </div>
    )
}

export default Cart
