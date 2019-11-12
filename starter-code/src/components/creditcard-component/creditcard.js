import React from 'react';
import './creditcard.css'



class CreditCard extends React.Component {

    companyPic = () => {
        if (this.props.type === 'Visa'){
            return 'https://www.stickpng.com/assets/images/58482363cef1014c0b5e49c1.png'
        } else {
            return 'https://brand.mastercard.com/content/dam/mccom/brandcenter/thumbnails/mastercard_vrt_pos_92px_2x.png'
        }
    }

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
                        <div className="column is-1 card-number"></div><div className="column is-10 card-number">**** **** **** 1234</div><div className="column is-1 card-number"></div>
                    </div>
                    <div className="columns">
                        <div className="column is-1 expires"></div><div className="expires column is-4">Expires 03/21</div><div className="column is-1 expires"></div><div className="column is-1 expires">BMP</div>
                    </div>
                    <div className="columns">
                        <div className="column is-1 expires"></div><div className="expires column is-5">Ignacio Bellomo</div>
                    </div>

                    <div></div>
                </div>
            </div>

        )
    }
}

export default CreditCard;