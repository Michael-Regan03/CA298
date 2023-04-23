import { Link } from "react-router-dom"

function Index() {


  return(<div>
    <Link to={`/showalldegrees`} ><p>View all Degrees</p></Link>
    <Link to={`/degreeform`} ><p>Create a Degree</p></Link>
    <Link to={`/showallcohorts`} ><p>View all Cohorts</p></Link>
    <Link to={`/cohortform`} ><p>Create a cohort</p></Link>
    <Link to={`/showallmodules`} ><p>View all modules</p></Link>
    <Link to={`/moduleform`} ><p>Create a new module</p></Link>
    <Link to={`/studentform`} ><p>Create new student</p></Link>
   
  </div>);
}

export default Index;