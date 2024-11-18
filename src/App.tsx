import StarshipList from './features/starships/StarshipsList';

import './App.css'

function App() {

  return (
    <div className='App bg-gray-900 text-gray-200 min-h-screen p-4'>
      <h1 className="text-red-500">Star Wars Starships</h1>
      <StarshipList />
    </div>
  )
}

export default App
