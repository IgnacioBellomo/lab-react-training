import React, { Component } from 'react'

export default class ClickablePicture extends Component {

    constructor(props){
        super(props);
        this.state = {
            clicked: false,
        }
    }

    switchPic = () => {
        this.setState({
            clicked: !this.state.clicked,
        })
    }

    chooseImg = () => {
        if (this.state.clicked){
            return this.props.imgClicked
        } else {
            return this.props.img
        }
    }

    style = {
        cursor: 'pointer',
        width: '250px',
        height: '300px',
    }

    
    render() {
        return (
            <span>
                <img src={this.chooseImg()} style={this.style} onClick = {this.switchPic}/>
            </span>
        )
    }
}
