import Announcement from "../components/announcement"
import Footer from "../components/footer"
import Navbar from "../components/navbar"
import "../style.css"

const Login = () => {
    return (
        <div>
            <Announcement/>
            <Navbar/>
            <div className="container">
                <h1 className="title">Đăng nhập</h1>
                <form>
                  <input type="email" placeholder="Nhập địa chỉ Email"/>
                  <input type="password" placeholder="Nhập mật khẩu"/>
                  <button className="btn btn-login">Đăng nhập</button>
                </form>
                <button className="btn btn-login">Đăng ký</button>
            </div>
            <Footer/>
        </div>
    )
}

export default Login
