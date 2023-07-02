import "../App.css";
import React, { useState } from "react";
import axios from "axios";
const StudentForm = () => {
    const [name, setName] = useState("");
    const [regNo, setRegNo] = useState("");
    const [age, setAge] = useState("");
    const [course, setCourse] = useState("");
    const [submitted, setSubmitted] = useState(false);
  
    const clearForm = () => {
      setName("");
      setRegNo("");
      setAge("");      
      setCourse("");
    };
  
    const submitControll = async (e) => {
      e.preventDefault();
      const studentData = { Name: name, RegNo: regNo, Age: age, Course: course };
      const nameRegex = /^[A-Za-z]+$/;
      const regNoRegex = /^RA\d{13}$/;
      const ageRegex = /^\d+$/;
      const courseRegex = /^[A-Za-z\s]+$/;
  
      if (!nameRegex.test(name)) {
        alert("Name should only contain alphabets");
        return;
      }
  
      if (!regNoRegex.test(regNo)) {
        alert('Reg Number should be of the form "RAXXXXXXXXXXXXX"');
        return;
      }
  
      if (!ageRegex.test(age) || age >= 100) {
        alert("Age should be a number below 100");
        return;
      }
  
      if (!courseRegex.test(course)) {
        alert("Course should only contain letters");
        return;
      }
      try {
        const response = await axios.post(
          "http://localhost:5000/students",
          studentData
        );
        setSubmitted(true);
        clearForm();
        console.log(response.data);
        console.log(response.data.Name);
        console.log(response.data.RegNo);
        console.log(response.data.Age);
        console.log(response.data.Course);
      } catch (error) {
        console.log(error);
      }
    };
    return (
      <div className="App">
        <h2 className="title">Student Details</h2>
        {submitted && (
          <div className="submission-message">Submitted Successfully</div>
        )}
        <div className="container">
          <table>
            <tbody>
              <tr className="input-group">
                <td>
                  <h2>Name</h2>
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </td>
              </tr>
              <tr className="input-group">
                <td>
                  <h2>Reg Number</h2>
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="Enter Reg Number"
                    value={regNo}
                    onChange={(e) => setRegNo(e.target.value)}
                  />
                </td>
              </tr>
              <tr className="input-group">
                <td>
                  <h2>Age</h2>
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="Enter Age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                </td>
              </tr>
              <tr className="input-group">
                <td>
                  <h2>Course</h2>
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="Enter Course"
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td className="submit-button">
                  <button className="button-style" onClick={clearForm}>
                    <h2>Clear</h2>
                  </button>
                </td>
                <td className="submit-button">
                  <button className="button-style" onClick={submitControll}>
                    <h2>Submit</h2>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  export default StudentForm;