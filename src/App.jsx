import { useState } from 'react'
import data from './data.js'

const Person = ({ name, image, age }) => {
  return (
    <li className='person'>
      <img src={image} alt={name} />
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </li>
  )
}

const List = ({ persons }) => {
  return (
    <ul>
      {persons.map((person) => {
        return <Person {...person} key={person.id} />
      })}
    </ul>
  )
}

const App = () => {
  const [persons, setPersons] = useState(data)

  const clearAll = () => {
    setPersons([])
  }

  return (
    <main>
      <div className='container'>
        <h3>{persons.length} Birthday Today</h3>
        {persons && <List persons={persons} />}
        <button className='btn btn-block' onClick={() => clearAll()}>
          Clear All
        </button>
      </div>
    </main>
  )
}
export default App
