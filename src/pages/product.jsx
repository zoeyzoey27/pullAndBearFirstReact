import "../style.css"
import Navbar from "../components/navbar"
import Announcement from "../components/announcement"
import Newsletter from "../components/newsletter"
import Footer from "../components/footer"
import singleProduct1 from "../images/singleProduct-1.jpg"
import singleProduct2 from "../images/singleProduct-2.jpg"
import singleProduct3 from "../images/singleProduct-3.jpg"
import singleProduct4 from "../images/singleProduct-4.jpg"

const Product = () => {
    return (
        <div>
            <Announcement/>
            <Navbar/>
            <div className="singleProduct-container">
                <div className="singleProduct-img">
                     <img src={singleProduct1} alt=""/>
                     <img src={singleProduct2} alt=""/>
                     <img src={singleProduct3} alt=""/>
                     <img src={singleProduct4} alt=""/>
                </div>
                <div className="singleProduct-info">
                    <span className="singleProduct-name">GATHERED HIGH NECK DRESS</span>
                    <p className="singleProduct-price">899000 VND</p>
                    <div>
                    <span className="label">Size: </span>    
                    <select className="singleProduct-size">
                        <option>XS</option>
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                    </select>
                    <span className="label">Số lượng: </span> 
                    <input type="number" min="1" max="10" placeholder="1"></input>
                    </div>
                    <button className="btn btn-add">Thêm vào giỏ hàng</button>
                    <hr/>
                    <p className="singleProduct-desc">Trang phục cổ cao với chi tiết đính kết ở thân trước và tay áo dài.</p>
                </div>
            </div>
            <Newsletter/>
            <Footer/>
        </div>
    )
}

export default Product
