import EditUser from "./components/EditUser";
import Form from "./pages/Form";
import axios from "axios";
import Home from "./pages/Home";

import {
  BrowserRouter as Router,
  Route, Routes
} from 'react-router-dom';

axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.withCredentials = true

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/add" element={<Form/>} />
        <Route path='/edit/:id' element={<EditUser/>} />
      </Routes>
    </Router>
  );
};

export default App;
