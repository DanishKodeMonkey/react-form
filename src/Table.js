//Component to handle the table and data associated

import React, { Component } from "react"

//Simple component to handle the header of the table
const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
  )
}

//Simple ocmponent to handle the Body of the table, and its contents
const TableBody = (props) => {
  //Each row will hold a prop from CharacterData, and associated with an index
  const rows = props.characterData.map((row, index) => {
    return (
      //Give each row a index key, then place the name and job
      //And add a remove button that will remove a post
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td>
          <button onClick={() => props.removeCharacter(index)}>Delete</button>
        </td>
      </tr>
    )
  })
  //Return the result.
  return <tbody>{rows}</tbody>
}
//The table, handling the data.
const Table = (props) => {
  const { characterData, removeCharacter } = props

  return (
    <table>
      <TableHeader />
      <TableBody
        characterData={characterData}
        removeCharacter={removeCharacter}
      />
    </table>
  )
}

export default Table
