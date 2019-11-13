import React, { Component } from 'react';
import IdCard from './components/id-card-component/id-card';
import Greetings from './components/greetings-component/greetings';
import Random from './components/random-component/random'
import BoxColor from './components/boxcolor-component/boxcolor'
import CreditCard from './components/creditcard-component/creditcard'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IdCard</h1>
        <IdCard 
          lastName='Doe'
          firstName='John'
          gender='male'
          height={178}
          birth={new Date("1992-07-14")}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
        <IdCard 
          lastName='Delores '
          firstName='Obrien'
          gender='female'
          height={172}
          birth={new Date("1988-05-11")}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
        <hr/>
        <h1>Greetings</h1>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
        <Greetings lang="es">Asere</Greetings>
        <hr/>
        <h1>Random</h1>
        <Random min={1} max={6}/>
        <Random min={1} max={100}/>
        <hr/>
        <h1>BoxColor</h1>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
        <hr/>
        <h1>Credit cards</h1>
        <CreditCard 
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white" />
      </div>
    );
  }
}

export default App;
