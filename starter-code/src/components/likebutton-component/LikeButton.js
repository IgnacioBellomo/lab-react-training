import React, { Component } from 'react'

export default class LikeButton extends Component {
    constructor(props){
        super(props);
        this.state = {
            likes: 0,
            color: {
                backgroundColor: 'purple',
                color: 'white'
            },
        }
    }

    like = () => {
        let colorArray = ['purple','blue','green','yellow','orange','red'];
        let newColor = {...this.state.color};
        newColor.backgroundColor = colorArray[Math.floor(Math.random() * colorArray.length)];
        this.setState({
            likes: this.state.likes+1,
            color: newColor
        })
    }
    render() {
        return (
            <span>
                <button className="button" style={this.state.color} onClick={this.like}>{this.state.likes} likes</button>
            </span>
        )
    }
}
