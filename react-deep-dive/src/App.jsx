import './App.css'

function AlertButton({ text, children }) {
  return (
    <button onClick={() => alert(text)}>{children}</button>
  )
}

export default function App() {
  return (
    <div>
      <AlertButton text="You clicked Play button">
        Play movie
      </AlertButton>
      <AlertButton text="You clicked Upload button">
        Upload a movie
      </AlertButton>
    </div>
  )
}

