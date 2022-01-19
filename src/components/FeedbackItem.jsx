import { useState } from "react";
import Card from "./shared/Card";
import { FaTimes, FaEdit } from 'react-icons/fa'
import FeedBackContext from "./context/FeedbackContext";
import { useContext } from "react";

function FeedbackItem({ item }) {
    const { onDelete, edit } = useContext(FeedBackContext)
    const onDeleteHandler = () => { onDelete(item.id); }


    return (
        <Card>
            <div className="num-display">{item.rating}</div>
            <div className="text-display">
                {item.text}
            </div>
            <button className="close" onClick={onDeleteHandler}>
                <FaTimes color="purple" />
            </button>

            <button className="edit" onClick={() => { edit(item) }}>
                <FaEdit color="purple" />
            </button>

        </Card>
    )
}

export default FeedbackItem
