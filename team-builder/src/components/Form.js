import React, { useState } from "react"

function Form(props) {

    const [teamCard, setTeamCard] = useState({
        name: "",
        email: "",
        role: "",

    })

    const handleChanges = e => {

        // copy existing keys and values then overriting them with keys
        // captured using []
        setTeamCard({...teamCard, [e.target.name]: e.target.value})
        console.log(e.target.name);

    }
    const submitForm = e => {
        e.preventDefault()
        // teamCard should be set from handleChanges
        props.addNewTeamMember(teamCard)
    }
    return (

        <form onSubmit={submitForm}>
            <label htmlFor="name">Name</label>
            <input
                id="name"
                type="text"
                name="name"
                onChange = {handleChanges}
                value={teamCard.name}
            />
            <label htmlFor="email">Email</label>
            <input
                id="email"
                type="text"
                name="email"
                onChange={handleChanges}
                value={teamCard.email}
            />
             <label htmlFor="role">Role</label>
            <input
                id="role"
                type="text"
                name="role"
                onChange={handleChanges}
                value={teamCard.role}
            />
            <button type="submit">Add Teammate</button>
        </form>



    );
}

export default Form;