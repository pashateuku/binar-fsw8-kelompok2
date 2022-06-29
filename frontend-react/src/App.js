import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form'
import FormEdit from './components/FormEdit'
import { BrowserRouter,Routes,Route  } from "react-router-dom";
import FormRead from './components/FormRead';


function App() {
  return (
    <div >
    <Navbar/>
     <Routes>
      <Route path="/form" element={<Form/>} />
      <Route path="/formedit" element={<FormEdit/>} />
      <Route path="/formread" element={<FormRead/>} />
     </Routes>
    </div>
  );
}

export default App;
