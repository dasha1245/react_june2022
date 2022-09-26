import './App.css';
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";

import {Todos, HomePage, Albums, Comments, Posts} from "./components";
import css from './style/NavigateBar.module.css'

function App() {
  return (
    <div>
        <ul>
            <li className={css.NavigateBar}><Link to={'/'}>Home</Link></li>
            <li className={css.NavigateBar}><Link to={'/todos'}>To Do list</Link></li>
            <li className={css.NavigateBar}><Link to={'/albums'}>Albums</Link></li>
            <li className={css.NavigateBar}><Link to={'/comments'}>Comments</Link></li>
        </ul>
        <hr/>
        <Routes>
            <Route path={'/'} element={<HomePage/>}/>
            <Route path={'/todos'} element={<Todos/>}/>
            <Route path={'/albums'} element={<Albums/>}/>
            <Route path={'/comments'} element={<Comments/>}/>
            <Route path={'/posts/:id'} element={<Posts/>}/>
        </Routes>
        <hr/>
    </div>
  );
}

export default App;
