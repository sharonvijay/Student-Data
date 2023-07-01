import "./App.css";

const App = () => {
  return (
    <div className="App">
      <h2 className="title">Student Details</h2>

      <div className="container">
        <div className="input-group">
          <h2>Name</h2>
          <input type="text" placeholder="Enter Name" />
        </div>
        <div className="input-group">
          <h2>Reg Number</h2>
          <input type="text" placeholder="Enter Reg Number" />
        </div>
        <div className="input-group">
          <h2>Age</h2>
          <input type="text" placeholder="Enter Age" />
        </div>
        <div className="input-group">
          <h2>Course</h2>
          <input type="text" placeholder="Enter Course" />
        </div>
      </div>
      <div className="submit-button">
        <button className="center-button">
          <h2>Submit</h2>
        </button>
      </div>
    </div>
  );
};

export default App;
