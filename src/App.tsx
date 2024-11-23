import { Routes, Route } from "react-router-dom";
import StarshipList from "./features/starships/StarshipsList";
import StarshipDetails from "./components/StarshipDetails";
import "./App.css";

function App() {
  return (
    <div className="App bg-gray-900 text-gray-200 min-h-screen">
      <main className="p-4">
      <Routes>
         <Route path="/" element={<StarshipList />} />
         <Route path="/starships" element={<StarshipList />} /> {/* Новый маршрут */}
         <Route path="/starship/:id" element={<StarshipDetails />} />
      </Routes>

      </main>
    </div>
  );
}

export default App;
