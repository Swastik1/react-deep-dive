import './App.css'

function Button({ onClick, children }) {
  return (
    <button onClick={onClick}>{children}</button>
  )
}

function Playbutton({ movieName }){
  function handleClick() {
    alert('You are playing a movie!')
  }

  return (
    <Button onClick={handleClick}>
      Play {movieName}
    </Button>
  )
}

function Uploadbutton() {
  return (
    <Button onClick={() => alert('You are uploading a video!')}>
      Upload
    </Button>
  )
}

export default function App() {
  return (
    <div>
      <Playbutton movieName="The Last KingDom!" />
      <Uploadbutton />
    </div>
  )
}

