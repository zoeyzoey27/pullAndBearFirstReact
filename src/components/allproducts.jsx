import "../style.css"
import { newProducts } from "../data"
import Product from "./product"

const Allproducts = () => {
    return (
        <div className="products-container">
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

export default Allproducts
