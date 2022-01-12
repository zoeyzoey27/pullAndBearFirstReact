import "../style.css"
import {Link} from 'react-router-dom';

const CategoryItem = ({item}) => {
    return (
        <div className="categoryItem-container">
            <img src={item.img} alt=""/>
            <div className="categoryItem-info">
                <span className="categoryItem-title">{item.title}</span>
                <Link className="link" to="/productlist"><button className="btn btn-shop">Xem ngay</button></Link>
            </div>
        </div>
    )
}

export default CategoryItem
