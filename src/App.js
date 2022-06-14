import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from "./Components/Header"
import FeedbackList from './Components/FeedbackList'
import FeedbackStats from './Components/FeedbackStats'
import FeedbackForm from './Components/FeedbackForm'
import AboutPage from './pages/AboutPage'
import AboutIcoinLink from './Components/AboutIcoinLink'
import {FeedbackProvider} from './context/FeedbackContext'

function App(){

    return (
      <FeedbackProvider>
      <Router>
        <Header /> 
        <div className="container">
          <Routes>
            <Route exact path='/' element={
              <>
              <FeedbackForm />
              <FeedbackStats />
              <FeedbackList />
              <AboutIcoinLink />
              </>
            }>
              
            </Route>

            <Route path='/about' element={<AboutPage />}/>
            
          </Routes>
        </div>
      </Router>
      </FeedbackProvider>
    )
}

export default App
