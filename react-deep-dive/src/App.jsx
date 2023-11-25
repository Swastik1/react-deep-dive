import './App.css'

export default function Toolbar() {
  return (
    <div className='Toolbar' onClick={() => alert("You clicked a toolbar")}>
      <button onClick={() => alert("You are Playing a movie")}>
        Play Movie
      </button>
      <button onClick={() => alert("You are uploading")}>
        Upload
      </button>

    </div>
  )
}

