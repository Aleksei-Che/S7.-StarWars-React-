import {useEffect} from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { fetchStarships } from "../starshipsSlice";

const StarshipList = () => {
    const dispatch = useAppDispatch();
    const starships = useAppSelector((state)=> state.starships.starships);
    const status = useAppSelector((state)=> state.starships.status);
    const error = useAppSelector ((state)=> state.starships.error);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchStarships());
        }
    }, [status, dispatch]);

    if (status === 'loading') {
        return <p>Loading...</p>;
      }
    
      if (status === 'failed') {
        return <p>Error: {error}</p>;
      }
    
      if (status === 'succeeded') {
        return (
          <div className="p-4">
            <h2 className="text-3xl font-bold text-center text-gray-200 mb-6">
              Star Wars Starships
            </h2>
            <ul className="grid grid-cols-1 gap-6">
              {starships.map((ship) => (
                <li
                  key={ship.name}
                  className="bg-gray-800 p-4 rounded-lg shadow-md hover:bg-gray-700 transition"
                >
                  <h3 className="text-xl font-bold text-white">{ship.name}</h3>
                  <p className="text-sm text-gray-400">{ship.model}</p>
                </li>
              ))}
            </ul>
          </div>
        );
      }
    
      return null;
    };
    
    export default StarshipList;


