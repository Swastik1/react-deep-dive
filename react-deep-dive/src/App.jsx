import './App.css'

function Button({ onClick, children }) {
  return (
    <button onClick={onClick}>{children}</button>
  )
}

function Toolbar({ onPlayMovie, onUploadImage, movieName }) {
  return (
    <div>
    <Button onClick={onPlayMovie}>
      Play {movieName}
      </Button>
      
      <Button onClick={onUploadImage}>
        Upload
    </Button>
    </div>
  )
}


export default function App() {
  return (
    <div>
      <Toolbar
        onPlayMovie={() => alert('You are playing a movie')}
        onUploadImage={() => alert('You are uploading a video!')}
        movieName='The Boys'
      />
    </div>
  )
}

