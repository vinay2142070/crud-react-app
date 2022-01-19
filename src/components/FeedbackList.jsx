import FeedbackItem from "./FeedbackItem"
import { motion, AnimatePresence } from 'framer-motion'
import FeedBackContext from "./context/FeedbackContext";
import { useContext } from "react";
import Spinner from "./shared/Spinner";

function FeedbackList() {

    const { items, loading } = useContext(FeedBackContext);

    if (!loading && items.length === 0) return <p>no feedbacks yet</p>;


    return loading ? (<Spinner />) : (<div className="feedback-list">
        <AnimatePresence>
            {
                items.map((item) => {
                    return (<motion.div
                        key={item.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <FeedbackItem key={item.id} item={item} />
                    </motion.div>
                    )
                })
            }
        </AnimatePresence>
    </div>)

}

export default FeedbackList
