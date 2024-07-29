import React, { useEffect, useState } from 'react';

function MyPage() {
 const [name, setName] = useState("");
 const [address, setAddress] = useState("");
  const [message, setMessage] = useState('');
  const [students, setStudents] = useState([]);

  const handleSubmit = () => {
   const student = { name, address };
   console.log(student);
    fetch("http://localhost:8080/student/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(student),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
        setMessage(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    fetch("http://localhost:8080/student/all")
      .then((res) => res.json())
      .then((result) => {
        setStudents(result);
      });
  }, []);

  return (
    <div>
      <input 
        type="text" 
        placeholder="Input 1" 
        value={name} 
        onChange={e => setName(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Input 2" 
        value={address} 
        onChange={e => setAddress(e.target.value)} 
      />
      <button onClick={handleSubmit}>Send</button>
      <p>{message}</p>


       {students.map(student=>(
        <div key={student.id}>
         Id:{student.id}<br/>
         Name:{student.name}<br/>
         Address:{student.address}
         </div>
      )) }
    </div>
  );
}

export default MyPage;