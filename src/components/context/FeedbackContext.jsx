import FeedbackData from "../../Data/FeedbackData";
import { createContext, useState, useEffect } from "react";
import { v4 as uuid4 } from 'uuid';

const FeedBackContext = createContext();


export const FeedbackProvider = ({ children }) => {

    const [items, setitems] = useState([]);
    const [loading, setloading] = useState(true);
    const [feedbackEdit, setfeedbackEdit] = useState({ item: {}, edit: false });

    useEffect(() => {

        getFeedBackList();
    }, [])

    const onDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete???")) {
            await fetch(`http://localhost:5000/feedback/${id}`, { method: 'DELETE' });

            setitems(items.filter((item) => { return item.id !== id }));
        }
    }

    const send = async (newFeedBack) => {
        const response = await fetch('http://localhost:5000/feedback',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',

                },
                body: JSON.stringify(newFeedBack)
            });

        const data = await response.json();
        //newFeedBack.id = uuid4();
        setitems([data, ...items])
    }

    const edit = (item) => {

        setfeedbackEdit({ item, edit: true })
    }

    const update = async (id, updateditem) => {

        const response = await fetch(`http://localhost:5000/feedback/${id}`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',

                },
                body: JSON.stringify(updateditem)
            });

        const data = await response.json();


        setitems(items.map((item) => {
            return item.id === id ? { ...item, ...data } : { ...item }
        }))
    }


    const getFeedBackList = async () => {

        const response = await fetch('http://localhost:5000/feedback');
        const data = await response.json();
        setitems(data);
        setloading(false);

    }

    return (
        <FeedBackContext.Provider value={{ items, onDelete, send, edit, feedbackEdit, update, loading }}>
            {children}
        </FeedBackContext.Provider>
    )
}

export default FeedBackContext;
