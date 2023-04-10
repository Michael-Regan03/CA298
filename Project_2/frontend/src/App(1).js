import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/firstcomponent';
import FetchComponent from './components/fetchcomp';


import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NestedComponent from './components/nestComponent';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstComponent counter="5"/>}/>
        <Route path="secondpage" element={<NestedComponent/>} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
