import React, { useEffect, useState } from "react";

function MyPage() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [students, setStudents] = useState([]);

  const handleSubmit = () => {
    const student = { name, address };
    const url = `http://localhost:8080/student/add`;
    const method = "POST";

    fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(student),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
        setMessage(data);
        setName("");
        setAddress("");
        fetchStudents(); 
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:8080/student/delete/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
        setMessage(data);
        fetchStudents(); 
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const fetchStudents = () => {
    fetch("http://localhost:8080/student/all")
      .then((res) => res.json())
      .then((result) => {
        setStudents(result);
      });
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="container">
      <h1>Student Management</h1>
      <p className="p">Spring Boot, React, SQL</p>
      <div className="form">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <button onClick={handleSubmit}>Add Student</button>
      </div>
      <p className="message">{message}</p>
      <div className="student-list">
        {students.map((student) => (
          <div key={student.id} className="student-item">
            <p>
              <strong>ID:</strong> {student.id}
            </p>
            <p>
              <strong>Name:</strong> {student.name}
            </p>
            <p>
              <strong>Address:</strong> {student.address}
            </p>
            <button onClick={() => handleDelete(student.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyPage;
