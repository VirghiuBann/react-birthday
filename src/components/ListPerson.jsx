import Person from './Person'

const ListPerson = ({ persons }) => {
  return (
    <ul>
      {persons.map((person) => {
        return <Person {...person} key={person.id} />
      })}
    </ul>
  )
}

export default ListPerson
