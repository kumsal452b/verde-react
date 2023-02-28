import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import axios from "axios";
import cartSlice, { cartAdd } from "./store/cart-slice";
import { useEffect } from "react";
function App() {
  const current_user = useSelector((store: any) => store.auth.current_user);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
      dispatch(cartAdd(res.data));
    })
    .catch((err) => {
      console.log(err);
    });
  }, [])
  
  return (
    <div className="App">{current_user ? <MainPage /> : <LoginPage />}</div>
  );
}

export default App;
