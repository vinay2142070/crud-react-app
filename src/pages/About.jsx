import { Link } from "react-router-dom"
import Card from "../components/shared/Card"

function About() {
    return (
        <Card>
            <div className="about">
                <h3>Learn more about us</h3>
                <p>App for taking feedbacks from clients</p>
                <p><h5>Version:1.0.0</h5></p>
                <Link to="/">Back to home</Link>

            </div>
        </Card>
    )
}

export default About
