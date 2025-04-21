import React, { useState } from "react";
import './components_CSS/add_page.css';
import StudentService from "../service/dataFetcher";
import { useNavigate } from "react-router-dom";

function StudentAdd(){
    const initialData={
        name:"",
        age:"",
        course:"",
        mark:"",
    }
    const navigate=useNavigate();

    const [studentData,setStudentData]=useState(initialData);
    const [submitted,setSubmitted]=useState(false);

    const handleChangeData=(e)=>{
        const {name,value}=e.target;
        setStudentData({...studentData,[name]:value});
    }

    const saveData=(e)=>{
        const outData={
            name:studentData.name.trim(),
            age:studentData.age,
            course:studentData.course.trim(),
            mark:studentData.mark,
        }
            StudentService.create(outData)
            .then((res)=>{
                console.log("Data added :",res.data);
            })
            .catch((err)=>{
                console.error("Adding Error :",err);
            })
        setSubmitted(true);
        setStudentData(initialData);
        e.preventDefault();
    }

    return(
        <>
            <div>
                {submitted?(
                    <div className="success">
                        <div className="popup">
                            <h1>Data added Successfully !</h1>
                            <button onClick={()=>setSubmitted(false)}>Add again</button>
                            <button onClick={()=>navigate('/')}>Go Home</button>
                        </div>
                    </div>
                ):(
                    <div className="container">
                        <form onSubmit={saveData}>
                        <h1>Add Data</h1>
                            <div className="input-div">
                                <input type="text" name="name" placeholder="Student Name"   value={studentData.name} onChange={handleChangeData} required/><br />
                                <input type="number" name="age" placeholder="Student Age"   value={studentData.age} onChange={handleChangeData} required/><br />
                                <input type="text" name="course" placeholder="Enter Course" value={studentData.course} onChange={handleChangeData} required/><br />
                                <input type="number" name="mark" placeholder="Student Mark" value={studentData.mark} onChange={handleChangeData} required/><br />
                            </div>
                            <div className="button-div">
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                )}
            </div>
        </>
    )
}
export default StudentAdd;