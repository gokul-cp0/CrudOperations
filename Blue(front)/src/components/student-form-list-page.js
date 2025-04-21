import React, { useEffect, useState } from "react";
import './components_CSS/list_page.css'
import StudentService from "../service/dataFetcher";
import {useNavigate} from 'react-router-dom';



const StudentList=()=>{

  const [studentData,setStudentData]=useState([]);
  const [search,setSearch]=useState("");
  const navigate=useNavigate()

const retrieveData=async() => {
      await StudentService.getAll()
      .then((res)=>{
        setStudentData(res.data)
        // console.log(res.data);
      })
      .catch((error)=>{
        console.error("Error :",error);
      })
}
useEffect(()=>{
  retrieveData();
},[]);

const searchHandle=(e)=>{
    setSearch(e.target.value);
}

   const filterSearch=studentData.filter((data)=>{
    const searchValue=search.trim().toLowerCase();
    return(
    data.name.toLowerCase().includes(searchValue)||
    data.course.toLowerCase().includes(searchValue)
    )
   });

   const DeleteHandle=async(id=null)=>{
    if(id){
        await StudentService.delete(id);
    }
    else{
        await StudentService.deleteAll();
    }
       
    retrieveData();
   }

    return(
        <>
        <div className="containerList">
            <div className="control-div">
                <div className="top-bar">
                <input className="search-input" type="text" placeholder="Search..." value={search} onChange={searchHandle}/>
                <button className="add-data" onClick={()=>navigate('/add')}>Add data</button>
                <button className="remove-all" onClick={()=>DeleteHandle()}>Remove all</button>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Course</th>
                            <th>Mark</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filterSearch.map((data,index)=>(
                            <tr key={index}>
                                <td>{data.name}</td>
                                <td>{data.age}</td>
                                <td>{data.course}</td>
                                <td>{data.mark}</td>
                                <td>
                                    <button className="edit-button" onClick={()=>navigate(`/edit/${data._id}`)}>Edit</button>
                                    <button className="delete-button" onClick={()=>DeleteHandle(data._id)}>delete</button>
                                </td>
                            </tr>
                            
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        </>
    )
}

export default StudentList;