import logo from './logo.svg';
import './App.css';
import {Users} from "./components/Users/Users";
import './components/User/User.css'
import {UserForms} from "./components/UserForm/UserForm";

function App() {
  return (
    <div>
        <UserForms/>
        <hr/>
      <Users/>
    </div>
  );
}

export default App;
