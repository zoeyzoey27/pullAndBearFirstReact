import "../style.css"
import { categories } from "../data"
import CategoryItem from "./categoryItem"

const Categories = () => {
    return (
        <div className="categories-container">
            <h1 className="title">Danh mục sản phẩm</h1>
           <div className="categories-wrapper">
            {
                categories.map((item)=>(
                    <CategoryItem item = {item} key = {item.id} />
                ))
            }
           </div>
        </div>
    )
}

export default Categories
