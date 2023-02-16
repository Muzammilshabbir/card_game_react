import React from 'react';
import PlayerCard from './PlayerCard';

const Overview = ({ data, selectedCard, onCardClick }) => {
  return (
    <>
      <div className="font-bold text-xl text-gray-800 mb-2 mt-2">Overview</div>
      <div className="flex flex-wrap -mx-4">
        {data.map((card) => (
          <PlayerCard
            key={card.id}
            realName={card.real_name}
            playerName={card.player_name}
            asset={card.asset.length > 15 ? `${card.asset.substring(0, card.asset.length - 10)}...` : card.asset}
            isSelected={selectedCard && selectedCard.id === card.id}
            onClick={() => onCardClick(card)}
          />
        ))}
      </div>
    </>
  );
};

export default Overview;
