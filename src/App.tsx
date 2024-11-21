import Header from './components/Header';
import Navbar from './components/Navbar';
import StarshipList from './features/starships/StarshipsList';


import './App.css'

function App() {

  return (
    <div className="App bg-gray-900 text-gray-200 min-h-screen">
      <Header />
      <Navbar />
      <main className="p-4">
        <StarshipList />
      </main>
    </div>
  );
}

export default App
