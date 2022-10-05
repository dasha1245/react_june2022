import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom'

import {MainLayout} from "./layouts";
import {CarsPage, LoginPage, RegisterPage} from "./pages";


function App() {
  return (
    <Routes>
        <Route path={'/'} element={<MainLayout/>}>
            <Route index element={<Navigate to={'/login'}/>}/>
            <Route path={'/register'} element={<RegisterPage/>}/>
            <Route path={'/login'} element={<LoginPage/>}/>
            <Route path={'/cars'} element={<CarsPage/>}/>
        </Route>

    </Routes>
  );
}

export default App;
