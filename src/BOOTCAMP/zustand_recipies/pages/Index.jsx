import { useState } from "react";
import { useNavigate } from "react-router-dom";

import MealItem from "../components/MealItems";
import useResultsStore from "../state/stores/results"; 
import userInfo from "../state/stores/user-info";

const Index = () => {

  const isLoading = useResultsStore((state) => state.isLoading);
  const error = useResultsStore((state) => state.error);
  const searchResults = useResultsStore((state) => state.searchResults);
  const onSearchResults = useResultsStore((state) => state.onSearchResults);

  const updateDeliveryInstructions = userInfo((state) => state.updateDeliveryInstructions);
  const userInfo2 = userInfo((state) => state);
  console.log(userInfo2)

  const [searchText, setSearchText] = useState("");

  const navigate = useNavigate();

  const handleSearchClick = async () => {
    onSearchResults(searchText);

    updateDeliveryInstructions("test");
  };

  const handleMealClick = (id) => {
    navigate(`/meal/${id}`);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div>
        <h2 className="text-4xl font-bold my-4 font-lato font-bold">Buscador de recetas</h2>
        <div className="h-10">
          <input 
            type="text"
            placeholder="Buscar por nombre"
            className="text-lg p-1 border-2 rounded-sm border-slate-500 w-96 h-full font-lato mt-2"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="bg-blue-600 text-white text-lg h-full ml-2 w-28 rounded hover:bg-blue-600 font-lato font-bold"
            onClick={handleSearchClick}>
              Buscar
          </button>
        </div>
        {isLoading && <h6 className="mt-8">Cargando...</h6>}
        {error && <h6 className="text-red">Ha ocurrido un error</h6>}
        <div className="flex flex-row flex-wrap my-8 justify-center">
          {!isLoading && searchResults?.map((meal, index) => <MealItem key={index} {...meal} onClick={handleMealClick} />)}
        </div>
      </div>
    </div>
  );
};

export default Index;
