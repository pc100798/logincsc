import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Register from './components/Register';
import Chat from './components/chat';
import {Routes,Route} from "react-router-dom"

function App() {
  return (
  <>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/chat' element={<Chat />} />
    </Routes>
  </>
  );
}

export default App;
