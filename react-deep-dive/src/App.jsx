import { people } from './data';
import { getImageUrl } from './utils';
import './App.css'


function ListSection({ title, people }) {
  return (
    <>
      <h4>{title}</h4>
      <ul>
        {people.map(person => 
           <li key={person.id}>
            <img
              src={getImageUrl(person)}
              alt={person.name}
            />
            <p>
              <b>{person.name}:</b>
              {' ' + person.profession + ' '}
              known for {person.accomplishment}
            </p>
          </li>
        )}</ul>
    </>
  ) 
}

function App() {
  const chemists = people.filter(person => person.profession === 'chemist');
  const everyoneElse = people.filter(person => person.profession !== 'chemist')
  return (
    <article>
      <h1>Scientists</h1>
      <ListSection 
        title="Chemists"
        people={chemists}
      />
      <ListSection 
        title="Everyone Else"
        people={everyoneElse}
      />
    </article>
  )
}

export default App;
