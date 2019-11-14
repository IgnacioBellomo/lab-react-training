import React from 'react';
import './creditcard.css'



class CreditCard extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            bgColor: {
                backgroundColor: ""
            },
            textColor: {
                color: ""
            },
        }
    }
    
    companyPic = () => {
        if (this.props.type === 'Visa'){
            return 'https://www.stickpng.com/assets/images/58482363cef1014c0b5e49c1.png'
        } else {
            return 'https://brand.mastercard.com/content/dam/mccom/brandcenter/thumbnails/mastercard_vrt_pos_92px_2x.png'
        }
    }

    bgColor = {
        backgroundColor: this.props.bgColor
    }
    color = {
        color: this.props.color
    }
    lastFour = this.props.number[this.props.number.length-4] + this.props.number[this.props.number.length-3] + this.props.number[this.props.number.length-2] + this.props.number[this.props.number.length-1]

    render (){
        return (
            <div className="credit-card-holder">
                <div className="credit-card" style={{backgroundColor: this.props.bgColor}}>
                    <div className="columns">
                        <div className="column is-10 company"></div>
                        <div className="column is-2 company">
                            <img src={this.companyPic()}/>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column is-1 card-number"></div><div className="column is-10 card-number" style={this.color}>**** **** **** {this.lastFour}</div><div className="column is-1 card-number"></div>
                    </div>
                    <div className="columns">
                        <div className="column is-1 expires"></div><div className="expires column is-4" style={this.color}>Expires {this.props.expirationMonth}/{this.props.expirationYear-2000}</div><div className="column is-1 expires"></div><div className="column is-1 expires" style={this.color}>{this.props.bank}</div>
                    </div>
                    <div className="columns">
                        <div className="column is-1 expires"></div><div className="expires column is-5" style={this.color}>{this.props.owner}</div>
                    </div>

                    <div></div>
                </div>
            </div>

        )
    }
}

export default CreditCard;