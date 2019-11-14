import React, { Component } from 'react'

export default class Rating extends Component {
    printRating = () => {
        let returnString = "";
        for (let i = 0; i < Math.round(this.props.children); i++){
            returnString += "★"
        }
        for (let i = Math.round(this.props.children); i < 5; i++){
            returnString += "☆"
        }
        return returnString
    }
    render() {
        return (
            <div>
                <h1>{this.printRating()}</h1>
            </div>
        )
    }
}
