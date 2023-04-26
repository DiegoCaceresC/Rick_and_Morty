import { connect , useDispatch,useSelector } from "react-redux";
import "./Card.css";
import { Link } from "react-router-dom";
import { useState, useEffect} from "react";
import { add_fav, remove_fav } from "../redux/Actions/Actions";

export default function Card(
  props
) {
   const  {
      id,
      name,
      status,
      species,
      gender,
      origin,
      image,
      onClose,
    } = props;
  const dispatch = useDispatch();
  const [isFav, setIsFav] = useState(false);
  const {myFavorites} = useSelector((s)=>s)

  function handleFavorite() {
    if (isFav) {
      setIsFav(false);
      dispatch(remove_fav(id));
    } else {
      setIsFav(true);
      dispatch(add_fav(props));
    }
  }

  useEffect(() => {
   myFavorites.forEach((fav) => { 
      if (fav.id === props.id) {
         setIsFav(true);
      }
   });
}, [myFavorites]);

 function superClose() {
  onClose(id);
  dispatch(remove_fav(id));
 }
  return (
    <div className="card">
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
      <button onClick={superClose}>eliminar</button>
      <Link className="link" to={`/detail/${id}`}>
        <h2>{name}</h2>
        {/* <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2> */}
        <h2>{origin}</h2>
        <img src={image} alt={name} />
      </Link>
    </div>
  );
}
// function mapDispatchToProp(dispatch) {
//   return {
//     add_fav: (ch) => dispatch(add_fav(ch)),
//     remove_fav: (id) => dispatch(remove_fav(id)),
//   };
// }

// function mapStateToProp(state) {
//    return {
//       myFavorites:state.myFavorites
//    };
//  }
// export default connect(mapStateToProp, mapDispatchToProp)(Card);
