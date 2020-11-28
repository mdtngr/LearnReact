import React from 'react'

function NameList() {
    const names = ['Bruce', 'Clark', 'Diana']
    const persons = [
        {
            id: 1,
            age: 30,
            skill: "React"

        },
        {
            id: 2,
            age: 28,
            skill: "Vue"

        },
        {

            id: 3,
            age: 41,
            skill: "JS"

        }
    ]

const nameList= names.map(name => <h2 key={name}>{name}</h2>)
const personList = persons.map(person => <h2 key={person.id}> | {person.id} | {person.age} | {person.skill}</h2>)
 
    return (
        <div>
            {nameList}
            <br />
            {personList}
        </div>
    )
}

export default NameList