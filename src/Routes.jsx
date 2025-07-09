// src/routes.jsx
import {
  createRoutesFromElements,
  Route,
  createBrowserRouter,
} from 'react-router';
import Root from './Layout/Root';
import Home from './Pages/Home/Home';


const lawyers = async () => {
  const res = await fetch('/top_lawyers.json');
  const data = await res.json();
  console.log(data);
  return data;}

const Routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root/>} >
     <Route index element={<Home />} loader={lawyers} />
  
   
    </Route>
  )
);

export default Routes;
