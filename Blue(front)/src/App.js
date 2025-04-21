import react from 'react';
import '../src/App.css';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import StudentList from './components/student-form-list-page';
import StudentAdd from './components/student-form-add-page';
import StudentEdit from './components/student-form-edit-page';

function App() {
  return (
    <>
      <Router>
          <nav className='navbar'>
                <Link className='nav-item' to={"/"}>HOME</Link>
                <Link className='nav-item' to={"/add"}>ADD DATA</Link>
          </nav>
        <Routes>
          <Route path="/" element={<StudentList/>}/>
          <Route path="/add" element={<StudentAdd/>}/>
          <Route path="/edit/:id" element={<StudentEdit/>}/>
        </Routes>


      </Router>
    </>
  );
}

export default App;
