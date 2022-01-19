import Card from "./shared/Card"
import { useState } from "react";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import FeedBackContext from "./context/FeedbackContext";
import { useContext, useEffect } from "react";

function FeedbackForm() {


    const [text, settext] = useState()
    const [btnDisabled, setbtnDisabled] = useState(true)
    const [message, setmessage] = useState('')
    const [rating, setrating] = useState(0)
    const { send, feedbackEdit, update } = useContext(FeedBackContext)

    useEffect(() => {
        if (feedbackEdit.edit === true) {
            setbtnDisabled(false);
            settext(feedbackEdit.item.text);
            setrating(feedbackEdit.item.rating);
        }

    }, [feedbackEdit])

    const submitHandler = (e) => {
        e.preventDefault();

        if (feedbackEdit.edit === true) {

            update(
                feedbackEdit.item.id, { text, rating }
            );
        }
        else {
            send({
                text, rating
            });
        }

        settext('')
    }


    const textHandler = (e) => {

        settext(e.target.value);

        if (e.target.value.length === 0) {
            setmessage(null);
        }

        else if (e.target.value.length > 10) {
            setbtnDisabled(false);
            setmessage(null);
        }
        else {

            setbtnDisabled(true);
            setmessage('please enter the message more than 10 characters');
        }


    }
    return (
        <Card>
            <form onSubmit={submitHandler}>

                <h2>How would you rate your service with us?</h2>
                <RatingSelect select={(rating) => {
                    setrating(rating)
                }} />
                <div className="input-group">
                    <input type='text' onChange={textHandler} placeholder="write a review" value={text}></input>
                    <Button type='submit' version='secondary' isDisabled={btnDisabled}>Rate us</Button>
                </div>
                <div className="message">{message}</div>
            </form>
        </Card>
    )
}

export default FeedbackForm
