
import { useState } from 'react'
import Header from "./Components/Header"
import FeedbackData from './data/feedbackData'
import FeedbackList from './Components/FeedbackList'

function App(){
  const [feedback, setFeedback] = useState(FeedbackData)


    return (
      <>
        <Header /> 
        <div className="container">
            <FeedbackList feedback={feedback}/>
        </div>
      </>
    )
}

export default App
