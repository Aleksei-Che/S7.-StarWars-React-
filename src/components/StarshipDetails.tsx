import { useParams } from "react-router-dom";
import { useAppSelector } from "../hooks/hooks";

interface Starship {
  name: string;
  starship_class: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
}

const StarshipDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const starships = useAppSelector((state) => state.starships.starships);
  const ship: Starship | undefined = starships[parseInt(id!)];

  if (!ship) {
    return <p className="text-center text-red-500">Starship not found.</p>;
  }

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold text-center text-gray-200 mb-6">
        {ship.name}
      </h2>
      <div className="flex flex-col items-center">
        <img
          src={`https://starwars-visualguide.com/assets/img/starships/${parseInt(id!) + 1}.jpg`}
          alt={ship.name}
          className="w-96 rounded-lg shadow-lg mb-6"
        />
        <div className="bg-gray-800 p-4 rounded-lg shadow-md w-96">
          <p className="text-gray-400">
            <strong>Starship Class:</strong> {ship.starship_class}
          </p>
          <p className="text-gray-400">
            <strong>Model:</strong> {ship.model}
          </p>
          <p className="text-gray-400">
            <strong>Manufacturer:</strong> {ship.manufacturer}
          </p>
          <p className="text-gray-400">
            <strong>Cost in Credits:</strong> {ship.cost_in_credits}
          </p>
          <p className="text-gray-400">
            <strong>Length:</strong> {ship.length}
          </p>
          <p className="text-gray-400">
            <strong>Max Speed:</strong> {ship.max_atmosphering_speed}
          </p>
          <p className="text-gray-400">
            <strong>Crew:</strong> {ship.crew}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StarshipDetails;
