import React from 'react'
import { useState } from 'react'
import Header from "./Components/Header"
import FeedbackData from './data/feedbackData'
import FeedbackList from './Components/FeedbackList'
import FeedbackStats from './Components/FeedbackStats'
import FeedbackForm from './Components/FeedbackForm'

function App(){
  const [feedback, setFeedback] = useState(FeedbackData)

  const deleteFeedback = (id)=> {
    if (window.confirm('Are you sure you want to delete this')){
      setFeedback(feedback.filter((item)=> item.id !== id ))
    }
  }


    return (
      <>
        <Header /> 
        <div className="container">
            <FeedbackForm />
            <FeedbackStats feedback={feedback} />
            <FeedbackList feedback={feedback} 
            handleDelete={deleteFeedback}/>
        </div>
      </>
    )
}

export default App
