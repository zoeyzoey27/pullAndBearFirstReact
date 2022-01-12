import "../style.css"
import appstore from "../images/appstore.jpg"
import googleplay from "../images/googleplay.jpg"

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="left-container">
                 <span className="list-title">Dịch vụ khách hàng</span>
                 <ul className="list">
                     <li className="listItem">Chat</li>
                     <li className="listItem">Liên hệ</li>
                 </ul>
            </div>
            <div className="center-container">
                 <span className="list-title">Về chúng tôi</span>
                 <ul className="list">
                     <li className="listItem">Giới thiệu</li>
                     <li className="listItem">Hệ thống cửa hàng</li>
                     <li className="listItem">Nhượng quyền thương mại</li>
                     <li className="listItem">Làm việc với chúng tôi</li>
                 </ul>
            </div>
            <div className="right-container">
                <span className="list-title">Tải ứng dụng PULL&BEAR</span>
                <div className="download">
                    <img src={appstore} alt=""/>
                    <img src={googleplay} alt=""/>
                </div>
                <span className="list-title">Theo dõi chúng tôi</span>
                <ul className="list social-list">
                    <a href="https://www.facebook.com/pullandbear"><li className="listItem social-item"><i class="fab fa-facebook-f"></i></li></a>
                    <a href="https://www.instagram.com/pullandbear/"><li className="listItem social-item"><i class="fab fa-instagram"></i></li></a>
                    <a href="https://twitter.com/pullandbear"><li className="listItem social-item"><i class="fab fa-twitter"></i></li></a>
                    <a href="https://www.youtube.com/pullandbear"><li className="listItem social-item"><i class="fab fa-youtube"></i></li></a>
                    <a href="https://www.pinterest.com/pullbear/_created/"><li className="listItem social-item"><i class="fab fa-pinterest-p"></i></li></a>
                    <a href="https://www.tiktok.com/@pullandbear"><li className="listItem social-item"><i class="fab fa-tiktok"></i></li></a>
                </ul>
            </div>
        </div>
    )
}

export default Footer
