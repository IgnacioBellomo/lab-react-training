import React from 'react';
import './boxcolor.css'

class BoxColor extends React.Component {

    makeRGB = () => {
        return `rgb(${this.props.r}, ${this.props.g}, ${this.props.b})`
    }

    rgbToHex =  (rgb) => { 
        let hex = Number(rgb).toString(16);
        if (hex.length < 2) {
             hex = "0" + hex;
        }
        return hex;
    }

    fullColorHex = () => {   
        let red = this.rgbToHex(this.props.r);
        let green = this.rgbToHex(this.props.g);
        let blue = this.rgbToHex(this.props.b);
        return red+green+blue;
      };


    render (){
        return (
            <div className="big-box">
                <div className="inner-box" style={{backgroundColor: this.makeRGB()}}>
                    <h1>{this.makeRGB()}</h1>
                    <h1>#{this.fullColorHex()}</h1>
                </div>
            </div>
        )
    }
}

export default BoxColor;