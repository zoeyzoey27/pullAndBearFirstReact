import "../style.css"
import { newProducts } from "../data"
import Product from "./product"

const Products = () => {
    return (
        <div className="products-container">
            <h1 className="title">Sản phẩm mới</h1>
            <div className="products-wrapper">
            {
                newProducts.map((item)=> (
                    <Product item = {item} key = {item.id} />
                ))
            }
            </div>
            
        </div>
    )
}

export default Products
