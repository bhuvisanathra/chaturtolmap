import React from 'react';
import './App.css';
import Card from './components/Card';

const App = () => {
  const data = [
    { id: 1, heading: 'Potato', imageUrl: '/images/potato.jpg', price: 'Rs.10.99' },
    { id: 2, heading: 'Orange', imageUrl: '/images/orange.jpg', price: 'Rs.10.99' },
  ];

  const Cweight = 10;

  return (
    <div className="app">
      <h1 className="app-heading">Welcome to ચતુર તોલ માપ</h1>
      <div className='container'>
        {data.map((item) => (
          <Card
            key={item.id}
            heading={item.heading}
            imageUrl={item.imageUrl}
            buttonText="Calculate"
            onButtonClick={() => console.log('Button clicked for', item.heading)}
            price={item.price}
            weight={Cweight}
          />
        ))}
      </div>
    </div>
  );
};

export default App;