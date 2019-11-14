import React, { Component } from 'react'

export default class Dice extends Component {

    constructor(props){
        super(props);
        this.state = {
            diceNum: '../../img/dice' + Math.floor(Math.random() * 6 + 1) +'.png'
        }
    }
    //'img/dice'+Math.floor(Math.random() * 6 + 1)

    style = {
        cursor: 'pointer',
        width: '250px',
        height: '300px',
    }

    rollDice = () => {
        this.setState({
            diceNum: '../../img/dice-empty.png',
        }, () => {
            setTimeout(() => {
                this.setState({
                    diceNum: '../../img/dice' + Math.floor(Math.random() * 6 + 1) +'.png',
                })
            }, 1000)
        })
    }

    render() {
        return (
            <span>
                <img src={this.state.diceNum} onClick={this.rollDice} style={this.style} />
            </span>
        )
    }
}
