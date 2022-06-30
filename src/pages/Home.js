import { Routes, Route, Outlet, Link } from "react-router-dom";
import GraphApi from '../components/GraphApi';
const Home = () => {
  return (
    <div>
      <GraphApi />
    </div>
  )
}

export default Home