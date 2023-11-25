import './App.css'

function Button({ onClick, children }) {
  return (
    <button onClick={e => {
      e.stopPropagation();
      onClick();
    }}>{children}</button>
  )
}

export default function Toolbar() {
  return (
    <div className='Toolbar' onClick={() => alert("You clicked a toolbar")}>
      <Button onClick={() => alert("You are Playing a movie")}>
        Play Movie
      </Button>
      <Button onClick={() => alert("You are uploading")}>
        Upload
      </Button>

    </div>
  )
}

