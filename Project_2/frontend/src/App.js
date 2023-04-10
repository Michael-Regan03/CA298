import logo from './logo.svg';
import './App.css';
import ShowAllDegrees from './components/showalldegrees';
import ShowIndividualDegree from './components/showindividualdegree';
import DegreeForm from './components/degreeform';



import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NestedComponent from './components/nestComponent';
function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShowAllDegrees />}/>
        <Route path="/showindividualdegree" element={<ShowIndividualDegree />} /> 
        <Route path="/degreeform" element={<DegreeForm />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;

