import React from 'react'
import { v4 as uuidv4} from 'uuid'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { useState } from 'react'
import Header from "./Components/Header"
import FeedbackData from './data/feedbackData'
import FeedbackList from './Components/FeedbackList'
import FeedbackStats from './Components/FeedbackStats'
import FeedbackForm from './Components/FeedbackForm'
import AboutPage from './pages/AboutPage'
import AboutIcoinLink from './Components/AboutIcoinLink'

function App(){
  const [feedback, setFeedback] = useState(FeedbackData)

  const addFeedback = (newFeedback)=> {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  const deleteFeedback = (id)=> {
    if (window.confirm('Are you sure you want to delete this')){
      setFeedback(feedback.filter((item)=> item.id !== id ))
    }
  }


    return (
      <Router>
        <Header /> 
        <div className="container">
          <Routes>
            <Route exact path='/' element={
              <>
              <FeedbackForm handleAdd={addFeedback}/>
              <FeedbackStats feedback={feedback} />
              <FeedbackList feedback={feedback} 
              handleDelete={deleteFeedback}/>
              <AboutIcoinLink />
              </>
            }>
              
            </Route>

            <Route path='/about' element={<AboutPage />}/>
            
          </Routes>
        </div>
      </Router>
    )
}

export default App
