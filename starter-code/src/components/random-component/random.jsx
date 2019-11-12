import React from 'react';
import './random.css'

class Random extends React.Component {

    randomValue = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    render (){
        return (
            <div className="borderDiv">
                <h1>Random value between {this.props.min} and {this.props.max} => {this.randomValue(this.props.min, this.props.max)}</h1>
            </div>
        )
    }
}

export default Random;