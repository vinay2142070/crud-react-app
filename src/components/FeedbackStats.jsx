import FeedBackContext from "./context/FeedbackContext";
import { useContext } from "react";


function FeedbackStats() {

    const { items } = useContext(FeedBackContext);

    let avg = items.reduce((acc, cur) => {

        return acc + cur.rating

    }, 0) / items.length;
    avg = avg.toFixed(1);
    return (
        <div className="feedback-stats">
            <h4>Total Reviews : {items.length}</h4>
            <h4>Average Rating : {isNaN(avg) ? 0 : avg}</h4>
        </div>
    )
}

export default FeedbackStats
