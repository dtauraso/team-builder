import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form'
import Team from './components/Team'
function App() {

  const [teamMembers, setTeamMembers] = useState([

    {
      name: "name 1",
      email: "name 1@provider_1.com",
      role: "dummy data creater",
      id: Date.now()
    },
    {
      name: "name 2",
      email: "IamA goofy email@hotmail.org",
      role: "goofy email guy",
      id: Date.now()

    }

  ])

  const addNewTeamMember = teamMember => {

      const newTeamMember = {
        name: teamMember.name,
        email: teamMember.email,
        role: teamMember.role,
        id: Date.now()
      };
      // make a new copy and add the new item in there so there is no mutation

      setTeamMembers([...teamMembers, newTeamMember]);
  }
  return (
    <div className="App">
      <h1>Unique Data Team</h1>
      <Form addNewTeamMember={addNewTeamMember}/>
      <Team teamMembers={teamMembers}/>
    </div>
  );
}

export default App;
