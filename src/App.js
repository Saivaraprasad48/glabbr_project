import './App.css';
import Home from "./components/Home/index"
import { useSelector } from 'react-redux';

const App = () => {
  const state = useSelector((state) => state)
  return (
    <div className="App">
      <Home data={state} />
  
    </div>
  );
}




export default  App;