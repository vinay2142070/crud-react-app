import FeedbackItem from "./components/FeedbackItem";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import Header from "./components/Header";
import FeedbackData from "./Data/FeedbackData";
import { useState } from "react";
import FeedbackForm from "./components/FeedbackForm";

import About from "./pages/About";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AboutIcon from "./components/AboutIcon";
import { FeedbackProvider } from "./components/context/FeedbackContext";

const App = () => {

    const [Feedback, setFeedbackData] = useState(FeedbackData)



    return (
        <FeedbackProvider>
            <Router>
                <div>
                    <Header />
                    <Routes>
                        <Route path="/" element={<><FeedbackForm />
                            <FeedbackStats />
                            <FeedbackList /></>}>

                        </Route>
                        <Route path="/about" element={<About />} />

                    </Routes>
                    <AboutIcon />
                </div>
            </Router>
        </FeedbackProvider>
    )
}

export default App;