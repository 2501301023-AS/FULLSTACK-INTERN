import React, { useState } from 'react'

const Persondata = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [age, setAge] = useState('');
  const [mobile, setMobile] = useState('');
  const [gender, setGender] = useState('');
  const [course, setCourse] = useState('Select Course');
  const [skills, setSkills] = useState([]);
  const [address, setAddress] = useState('');
  const [terms, setTerms] = useState(false);

  
  const handleSkillChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSkills([...skills, value]);
    } else {
      setSkills(skills.filter(skill => skill !== value));
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (firstName === "") {
      alert("Name required")
      return;
    }
    if (lastName === "") {
      alert("LastName required")
      return;
    }
    if (email === "") {
      alert("Email required")
      return;
    }
    if (password === "") {
      alert("Password required")
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match")
      return;
    }
    if (age === "") {
      alert("Age required")
      return;
    }
    if (mobile === "") {
      alert("Mobile required")
      return;
    }

    if (gender === "") {
      alert("Gender required")
      return;
    }
    if (course === "" || course === "Select Course") {
      alert("Course required")
      return;
    }
   
    if (skills.length < 2) {
      alert("Min 2 skills required");
      return;
    }
    if (skills.length > 4) {
      alert("Maximum 4 skills allowed");
      return;
    }
    if (address === "") {
      alert("Address required")
      return;
    }
    if (!terms) {
      alert("Terms required")
      return;
    }

    alert("Form submitted successfully!");
  }

  return (
    
    <div
      style={{ fontSize: "20px", display: "grid", border: "5px solid red", borderRadius: "20px" }}
    >
      <h1>Person Detail Form</h1>
      <form style={{ marginLeft: "20px" }}>
        <input type='text' placeholder='Enter your FirstName' value={firstName}
          onChange={(e) => setFirstName(e.target.value)} /><br />
        <input type='text' placeholder='Enter your LastName' value={lastName}
          onChange={(e) => setLastName(e.target.value)} /><br />
        <input type='text' placeholder='Enter your email' value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br />
        <input type='text' placeholder='Enter your password' value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br />
        <input type='text' placeholder='Confirm password' value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        /><br />
        <input type='text' placeholder='Enter your Age' value={age}
          onChange={(e) => setAge(e.target.value)} /><br />
        <input type='text' placeholder='Enter your Mobile' value={mobile}
          onChange={(e) => setMobile(e.target.value)} /><br />
        
        <input type='radio' name='gender' value="Male" required checked={gender === 'Male'} onChange={e => setGender(e.target.value)} /> Male
        <input type='radio' name='gender' value="Female" required checked={gender === 'Female'} onChange={e => setGender(e.target.value)} /> Female<br />

        <select value={course} onChange={(e) => setCourse(e.target.value)}>
          <option value="Select Course">Select Course</option>
          {["React", "Node", "MERN", "Java"].map(c => <option key={c} value={c}> {c}</option>)}
        </select>

        <h3>Select Skills (Min 2, Max 4):</h3>

        <div>
          <input type="checkbox" id="skill-HTML" name="skills" value="HTML" checked={skills.includes("HTML")} onChange={handleSkillChange} />
          <label htmlFor="skill-HTML">HTML</label>
        </div>

        <div>
          <input type="checkbox" id="skill-CSS" name="skills" value="CSS" checked={skills.includes("CSS")} onChange={handleSkillChange} />
          <label htmlFor="skill-CSS">CSS</label>
        </div>

        <div>
          <input type="checkbox" id="skill-JavaScript" name="skills" value="JavaScript" checked={skills.includes("JavaScript")} onChange={handleSkillChange} />
          <label htmlFor="skill-JavaScript">JavaScript</label>
        </div>

        <div>
          <input type="checkbox" id="skill-React" name="skills" value="React" checked={skills.includes("React")} onChange={handleSkillChange} />
          <label htmlFor="skill-React">React</label>
        </div>
        
        <textarea value={address} onChange={e => setAddress(e.target.value)} placeholder="Address"></textarea><div>{address}</div>

        <label><input type="checkbox" checked={terms} onChange={e => setTerms(e.target.checked)} /> Terms & Conditions</label><div>{terms ? "true" : "false"}</div>

        <button  onClick={handleSubmit} style={{backgroundColor:"green",color:"whitesmoke",fontSize:"20px",border:"2px solid green",borderRadius:"10px"}}>Submit</button>

      </form>
    </div>
  )
}

export default Persondata