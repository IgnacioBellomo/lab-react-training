import React from 'react';
import './id-card.css'

class IdCard extends React.Component {


    render(){
        console.log(this.props.birth)
            return (
                <div className="columns id-card ">
                    <div className = "column is-1"><img src={this.props.picture}/></div>
                    <div className = "contact-info column is-2">
                        <div><b>First name: </b>{this.props.firstName}</div>
                        <div><b>Last name: </b>{this.props.lastName}</div>
                        <div><b>Gender: </b>{this.props.gender}</div>
                        <div><b>Height: </b> {this.props.height/100}m</div>
                        <div><b>Birth: </b>{this.props.birth.toDateString()}</div>
                     </div>
                </div>
            )
    }


}

export default IdCard;