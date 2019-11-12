import React from 'react';
import './greetings.css'

class Greetings extends React.Component {

    lang = {
        de: 'Hallo',
        en: 'Hello',
        es: 'Que bola',
        fr: 'Bonjour'
    }

    render (){
        return (
            <div className="borderDiv">
                <h1>{this.lang[this.props.lang]} {this.props.children}</h1>
            </div>
        )
    }
}

export default Greetings;