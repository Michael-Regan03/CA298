import logo from './logo.svg';
import './App.css';
import ShowAllDegrees from './components/showalldegrees';
import ShowIndividualDegree from './components/showindividualdegree';
import DegreeForm from './components/DegreeForm';
import Index from'./components/index';
import ShowAllCohorts from './components/showallcohorts';
import ShowIndividualCohort from './components/showindividualcohort';
import CohortForm from './components/CohortForm';
import ShowAllModules from './components/showallmodules';
import ShowIndividualModule from './components/showindividualmodule';
import ShowModulesDeliveredToACohort from './components/showmodulesdeliveredtoacohort';
import ShowIndividualStudent from './components/showindividualstudent';
import GradeForm from './components/GradeFrom';
import ModuleForm from './components/ModuleForm';

import StudentForm from './components/StudentForm' ;

import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="/showalldegrees" element={<ShowAllDegrees />} /> 
        <Route path="/showindividualdegree" element={<ShowIndividualDegree />} /> 
        <Route path="/DegreeForm" element={<DegreeForm />} /> 
        <Route path="/showallcohorts" element={<ShowAllCohorts />} /> 
        <Route path="/showindividualcohort" element={<ShowIndividualCohort />} /> 
        <Route path="/cohortform" element={<CohortForm />} /> 
        <Route path="/showallmodules" element={<ShowAllModules />} />
        <Route path="/showindividualmodule" element={<ShowIndividualModule />} /> 
        <Route path="/showmodulesdeliveredtoacohort" element={<ShowModulesDeliveredToACohort />} /> 
        <Route path="/showindividualstudent" element={<ShowIndividualStudent />} />
        <Route path="/studentform" element={<StudentForm />} />
        <Route path="/gradeform" element={<GradeForm />} />
        <Route path="/moduleform" element={<ModuleForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

