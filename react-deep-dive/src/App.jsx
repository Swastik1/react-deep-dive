
import './App.css'

//Conditionally assigning JSX to a variable ----
function Item({ name, isPacked }) {
  let itemContent = name;
  if (isPacked) {
    itemContent = (
      <del>{name + " ✔" }</del>
    )
  }
  return (
    <li className='item'>{itemContent}</li>
  );
}

function App() {

  return (
    <section>
      <h1>Swastik's Itinerary</h1>
      <ul>
        <Item
          isPacked={true}
          name="Space Suit"
        />

        <Item
          isPacked={true}
          name="Helmet with a golden leaf"
        />     

        <Item
          isPacked={false}
          name="Photo of Tam"
        />  
        
      </ul>
    </section>

  )
}

export default App
