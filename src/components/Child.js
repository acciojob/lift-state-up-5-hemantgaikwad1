
import React from "react";
import{ useState } from "react";
export default function Child({solve}){
    const [formData, setFormData] = useState({
    username: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
    const handleSubmit=(e)=>{
        e.preventDefault();
        solve();
    }
return(
    <>
    <form onSubmit={handleSubmit}>
<div>
        <label htmlFor="username">Name: </label>
        <input
          id="username"
          type="text"
          name="username"
         value={formData.username}
          onChange={handleChange}
   
          required
        />
      </div>
      <br/>

      <div style={{ marginTop: '10px' }}>
        <label htmlFor="email">Email: </label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          
      
          required
        />
      </div>
      <button type="submit" style={{ marginTop: '15px' }}>
        Submit
      </button>
    </form>
    </>
)
} 