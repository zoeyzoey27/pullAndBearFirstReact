import "../style.css"
import woman from "../images/woman.jpg"
import man from "../images/man.jpg"

const Gender = () => {
    return (
        <div className="gender-container">
            <div className="genderItem">
                 <img src={woman} alt=""/>
                 <span className="gender-title">Woman</span>
            </div>
            <div className="genderItem">
                 <img src={man} alt=""/>
                 <span className="gender-title">Man</span>
            </div>
        </div>
    )
}

export default Gender
