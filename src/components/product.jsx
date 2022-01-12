import "../style.css"

const Product = ({item}) => {
    return (
        <div className="product-container">
            <img className="product-img" src={item.img} alt=""/>
            <div className="product-info">
                <span className="product-name">{item.name}</span>
                <p className="product-price">{item.price} VND</p>
            </div>
        </div>
    )
}

export default Product
