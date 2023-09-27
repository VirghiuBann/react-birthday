import { useState } from 'react'
import data from './data.js'

import ListPerson from './components/ListPerson'

const App = () => {
  const [persons, setPersons] = useState(data)

  const clearAll = () => {
    setPersons([])
  }

  return (
    <main>
      <section className='container'>
        <h3>{persons.length} Birthday Today</h3>
        {persons && <ListPerson persons={persons} />}
        <button className='btn btn-block' onClick={() => clearAll()}>
          Clear All
        </button>
      </section>
    </main>
  )
}
export default App
