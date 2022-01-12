import "../style.css"

const Newsletter = () => {
    return (
        <div className="newsletter-container">
            <h1 className="title">Nhận bản tin PULL&BEAR</h1>
            <div className="input-container">
                <input type="email" placeholder="Nhập email của bạn"></input>
                <button className="btn btn-input"><i class="far fa-paper-plane"></i></button>
            </div>
        </div>
    )
}

export default Newsletter
