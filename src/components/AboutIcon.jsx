import { FaQuestion } from "react-icons/fa"
import { Link } from "react-router-dom"

function AboutIcon() {
    return (

        < div className="about">
            <Link to='/about' >
                <FaQuestion size={40}></FaQuestion>
            </Link >
        </div >

    )
}

export default AboutIcon
