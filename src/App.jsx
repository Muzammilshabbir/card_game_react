import React, { useEffect, useState } from 'react';
import Overview from './components/Overview';
import Details from './components/Details';
import Controls from './components/Controls';

const App = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("card_data.json" ,{
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      })
      const data = await res.json()
      setData(data)
    }
    loadData()
  }, [])

  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };
  return (
    <div className="container mx-auto my-4">
      <Controls setData={setData} cards={data} selectedPlayer={selectedCard}/>
      <Details selectedCard={selectedCard} />
      <Overview data={data} selectedCard={selectedCard} onCardClick={handleCardClick} />
    </div>
  );
};

export default App;
