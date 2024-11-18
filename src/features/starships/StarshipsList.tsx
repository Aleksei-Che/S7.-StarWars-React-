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
          <ul>
            {starships.map((ship) => (
              <li key={ship.name}>
                <strong>{ship.name}</strong> - {ship.model}
              </li>
            ))}
          </ul>
        );
      }
    
      return null; // Если вдруг статус не определён
    };
    
    export default StarshipList;


