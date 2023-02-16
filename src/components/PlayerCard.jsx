import React from 'react';

const Card = ({ realName, playerName, asset, isSelected, onClick }) => {
  return (
    <div
      className={`flex-shrink-0 w-full md:w-1/3 lg:w-1/3 p-4 ${isSelected ? 'border-2 border-blue-500' : ''
        } cursor-pointer`}
      onClick={onClick}
    >
      <div className="bg-white bg-gray-300 rounded-lg shadow-lg p-6 bg-gray-200">
        <div className="flex mb-2">
          <div className="w-1/3 font-medium text-gray-800">Real Name:</div>
          <div className="w-2/3 text-gray-800">{realName}</div>
        </div>
        <div className="flex mb-2">
          <div className="w-1/3 font-medium text-gray-800">Player Name:</div>
          <div className="w-2/3 text-gray-800">{playerName}</div>
        </div>
        <div className="flex mb-2">
          <div className="w-1/3 font-medium text-gray-800">Asset:</div>
          <div className="w-2/3 text-gray-800">{asset}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;

