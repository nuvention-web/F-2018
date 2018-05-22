import React from 'react'
import ReactDOM from 'react-dom'
import './steps.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { Button } from 'react-bootstrap';
// import 'react-vertical-timeline-component/style.min.css';
import './dashboard.css'
import {CircleLoader} from 'react-spinners';
import {Link} from 'react-router-dom'





var text = {
    fontSize: "20px",
    marginTop: "20px",
    textAlign: "center",
    padding: "15px"
}

class Spinner extends React.Component {
  render() {
    return (
        <div className='sweet-loading'>
            <CircleLoader
            className="spinner"
            color={'#3CB54A'}
            loading={true}
            size={250}/>
            <div className="dash-title"> Matchmaking in Progress. </div>
            <hr/>
            <div style={text}> Our team of energetic butteflies are working hard to find a perfect match. Check your email soon. </div>
            <div className="profileview">
                <Link to="/profile">
                    <Button bsSize="large" className="submit-signup" onClick={this.submitUser}>View Your Profile</Button>
                </Link>
            </div>
            <div className="quotes">
                "Just when the caterpillar thought the world was over, it became a butterfly."
            </div>
        </div>

    )
  }

}

export default Spinner;