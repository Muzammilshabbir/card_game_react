import React from 'react'
import AsyncButton from './AsyncButton'

const Controls = ({ setData, cards, selectedPlayer }) => {
  const [sortOrder, setSortOrder] = React.useState('asc')
  const [loading, setLoading] = React.useState(false)

  const sortByPlayerName = (reverse) => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    const sortedPlayers = [...cards].sort((a, b) => {
      if (a.real_name < b.real_name) {
        return reverse ? 1 : -1;
      }
      if (a.real_name > b.real_name) {
        return reverse ? -1 : 1;
      }
      return 0;
    });
    setData(sortedPlayers);
  };

  async function submitPlayer() {
    try {
      setLoading(true);
      const res = await fetch('/api/submitPlayer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(selectedPlayer)
      })
      if(res.ok) {
        const data = await res.json()
        console.log('Player submitted successfully', data);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error('Error submitting player', error)
    }
  }

  return (
    <div className="flex flex-row justify-end">
      <button
        onClick={() => sortByPlayerName(sortOrder === 'asc' ? true : false)}
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2.5 px-5 rounded-lg mr-1"
      >
        {sortOrder === 'asc' ? 'Sort Descending' : 'Sort Ascending'}
      </button>
      <AsyncButton onClick={submitPlayer} disabled={selectedPlayer===null} loading={loading}>Submit</AsyncButton>
    </div>
  )
}

export default Controls