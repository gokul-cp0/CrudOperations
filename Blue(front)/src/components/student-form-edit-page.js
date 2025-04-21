    import React, { useEffect, useState } from "react";
    import './components_CSS/add_page.css';
    import StudentService from '../service/dataFetcher';
    import {useNavigate, useParams} from 'react-router-dom';

    function StudentEdit(){
        const {id}=useParams();
        const navigate=useNavigate();
        const initialState={
            _id:null,
            name:"",
            age:"",
            course:"",
            mark:""
        }
        const [studentData,setStudentData]=useState(initialState);
        const [updated,setUpdated]=useState(false);

        const gettingData=async (id) => {
            try {
                const Student=await StudentService.get(id);
                setStudentData(Student.data);
        
            } catch (error) {
                console.error(error);
            }
        }
        useEffect(()=>{if(id) gettingData(id)},[id]);

        const handleChangeData=(e)=>{
            const {name,value}=e.target;
            setStudentData({...studentData,[name]:value});
        }

        const DataUpdateHandle=async(e)=>{
            try {
                
                const Student=await StudentService.update(studentData._id,studentData);
                setStudentData(Student.data);
                e.preventDefault();
                setUpdated(true);
            } catch (error) {
                console.error(error);
            }
        }

        return(
            <>
                <div>
                    {updated?(
                        <div className="success">
                            <div className="popup">
                                <h1>Data updated Successfully !</h1>
                                <button onClick={()=>navigate('/')}>Go Home</button>

                            </div>
                        </div>
                    ):(
                        <div className="container">
                            
                            <form onSubmit={DataUpdateHandle}>
                            <h1>Edit Data</h1>
                                <div className="input-div">
                                    <input type="text" name="name" placeholder="Student Name"   value={studentData.name} onChange={handleChangeData} required/><br />
                                    <input type="number" name="age" placeholder="Student Age"   value={studentData.age} onChange={handleChangeData} required/><br />
                                    <input type="text" name="course" placeholder="Enter Course" value={studentData.course} onChange={handleChangeData} required/><br />
                                    <input type="number" name="mark" placeholder="Student Mark" value={studentData.mark} onChange={handleChangeData} required/><br />
                                </div>
                                <div className="button-div">
                                    <button type="submit">Update</button>
                                </div>
                            </form>
                        </div>
                    )}
                </div>
            </>
        )
    }
    export default StudentEdit;