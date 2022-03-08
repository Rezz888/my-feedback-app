import PropTypes from 'prop-types'
import Card from './Shared/Card'

function FeedbackItem({ item }) {
    
 

  return (
    <Card>
        <div className="num-display">{item.rating}</div>
        <div className="text-display">{item.text}</div>
    </Card>
  )
}

FeedbackItem.PropTypes = {
  item: PropTypes.object.isRequired,
}

export default FeedbackItem