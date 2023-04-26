import React from "react";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { remove_fav , orderCards,filterCards, reset } from "../redux/Actions/Actions";

export default function Favorites({ onClose }) {

  const { myFavorites } = useSelector((state) => state);
  const dispatch = useDispatch();

  function closeFavorite(id) {
    onClose(id);
    dispatch(remove_fav(id));
  }
  function handleOrder(e) {
    e.preventDefault();
    const { name, value } = e.target;
    dispatch(orderCards(value));
  }
  function handleFilter(e) {
    e.preventDefault();
    const { name, value } = e.target;
    dispatch(filterCards(value));
  }

  function resetButton() {
    dispatch(reset())
    
  }
  return (
    <div>
      <select name="order" onChange={handleOrder} defaultValue={"DEFAULT"}>
        <option value="DEFAULT" disabled>
          Select Order
        </option>
        <option value="Ascendente">Ascendente</option>
        <option value="Descendente">Descendente</option>
      </select>
      <select name="filter" onChange={handleFilter} defaultValue={"DEFAULT"}>
        <option value="DEFAULT" disabled>
          Select Filter
        </option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="Unknown">Unknown</option>
      </select>
      <button onClick={resetButton}>Reset</button>
      {myFavorites &&
        myFavorites.map((element, index) => {
          return (
            <Card
              key={index}
              id={element.id}
              name={element.name}
              status={element.status}
              species={element.species}
              gender={element.gender}
              origin={element.origin.name}
              image={element.image}
              onClose={() => closeFavorite(element.id)}
            ></Card>
          );
        })}
    </div>
  );
}

// function mapState(st) {
//   return {
//     myFavorites: st.myFavorites,
//   };
// }
// function mapDispatch(d) {
//   return {
//     remove_fav: (id) => d(remove_fav(id)),
//   };
// }
// export default connect(mapState, mapDispatch)(Favorites);
