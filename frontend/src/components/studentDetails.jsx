import "../App.css";
import React , {useState , useEffect} from 'react';
import axios from 'axios';
const StudentDetails = () => {
    const [students, setStudents] = useState([]);

    useEffect(()=>{
        fetchData();
    },[])


    const fetchData = async()=>{
        try{
            const response = await axios.get('http://localhost:5000/students');
            setStudents(response.data);

        }
        catch(error){
            console.log(error);
        }
    }
    return(
        <>
        
        <div>
        <h2 className="title">Student Details</h2>
        <div className="container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Reg Number</th>
              <th>Age</th>
              <th>Course</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student._id}>
                <td>{student.Name}</td>
                <td>{student.RegNo}</td>
                <td>{student.Age}</td>
                <td>{student.Course}</td>
              </tr>
            ))}
          </tbody>
        </table>

        </div>
      </div>
        </>

    );
}

export default StudentDetails