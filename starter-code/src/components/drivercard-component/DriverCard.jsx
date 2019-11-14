import React, { Component } from 'react'
import Rating from '../rating-component/Rating'

export default class DriverCard extends Component {
    render() {
        return (
            <div className="columns driver-card">
                <div className="column is-4"></div>
                <div className="column is-4 the-card">
                    <span className="image is-128x128">
                            <img className="is-rounded" src={this.props.img} />
                    </span>
                    <span>
                        <h2>{this.props.name}</h2>
                        <Rating>{this.props.rating}</Rating>
                        <h3>{this.props.car.model} - {this.props.car.licensePlate}</h3>
                    </span>
                </div>
                <div className="column is-4"></div>
            </div>
        )
    }
}
