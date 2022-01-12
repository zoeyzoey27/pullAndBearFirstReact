import "../style.css"
import Announcement from "../components/announcement"
import Navbar from "../components/navbar"
import Newsletter from "../components/newsletter"
import Footer from "../components/footer"
import Allproducts from "../components/allproducts"

const ProductList = () => {
    return (
        <div>
            <Announcement/>
            <Navbar/>
            <h1 className="title">Quần áo</h1>
            <div className="filter-container">
                <div className="filter">
                    <span className="filter-title">Loại sản phẩm: </span>
                    <select>
                        <option>Nam</option>   
                        <option>Nữ</option>                
                    </select>
                    <select>
                        <option>Áo khoác</option>   
                        <option>Áo phông</option>   
                        <option>Áo sơ mi</option>    
                        <option>Áo gile</option>
                        <option>Áo khoác nỉ & hoodie</option>
                        <option>Quần</option>
                        <option>Váy</option>       
                        <option>Len</option>
                        <option>Blazers</option>                
                    </select>
                </div>
                <div className="filter">
                    <span className="filter-title">Sắp xếp sản phẩm: </span>
                    <select>
                        <option>Sản phẩm mới nhất</option>
                        <option>Giá từ thấp đến cao</option>
                        <option>Giá từ cao đến thấp</option>
                    </select>
                </div>
            </div>
            <Allproducts/>
            <Newsletter/>
            <Footer/>
        </div>
    )
}

export default ProductList
