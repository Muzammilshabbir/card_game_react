import React from 'react';

const Details = ({ selectedCard }) => {
  if (!selectedCard) {
    return null;
  }

  return (
    <>
      <div className="font-bold text-xl text-gray-800 mb-2">Details</div>
      <div className="bg-white bg-gray-300 mt-2 rounded-lg shadow-lg p-6 bg-gray-200">
        <div className="flex mb-2">
          <div className="w-1/6 font-medium text-gray-800">Real Name:</div>
          <div className="w-1/6 text-gray-800">{selectedCard.real_name}</div>
        </div>
        <div className="flex mb-2">
          <div className="w-1/6 font-medium text-gray-800">Player Name:</div>
          <div className="w-2/3 text-gray-800">{selectedCard.player_name}</div>
        </div>
        <div className="flex mb-2">
          <div className="w-1/6 font-medium text-gray-800">Asset:</div>
          <div className="w-2/3 text-gray-800">{selectedCard.asset}</div>
        </div>
      </div>
    </>
  );
};

export default Details;
