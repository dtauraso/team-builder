import React from "react";

function Team(props) {

    return (
        <div>
            {props.teamMembers.map(teamMember => (

                <div key={teamMember.id}>
                    <h3>{teamMember.name}</h3>
                    <p>{teamMember.email}</p>
                    <p>{teamMember.role}</p>
                </div>
            ))

            }

        </div>
    );
}

export default Team;