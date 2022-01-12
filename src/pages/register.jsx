import Announcement from "../components/announcement"
import Footer from "../components/footer"
import Navbar from "../components/navbar"
import "../style.css"

const Register = () => {
    return (
        <div>
            <Announcement/>
            <Navbar/>
            <div className="container">
                <h1 className="title">Đăng ký</h1>
                <form>
                  <input type="email" placeholder="Nhập địa chỉ Email"/>
                  <input type="text" placeholder="Họ và tên"/>
                  <input type="text" placeholder="Số điện thoại"/>
                  <input type="password" placeholder="Nhập mật khẩu"/>
                  <input type="password" placeholder="Nhập lại mật khẩu"/>
                  <button className="btn btn-login">Đăng ký</button>
                </form>
                <button className="btn btn-login">Đăng nhập</button>
            </div>
            <Footer/> 
        </div>
    )
}

export default Register
