import './App.css'

export default function Signup() {
  return (
    <form onSubmit={() => {
      e.preventDefault();
      alert('Submiting');
    }}>
      <input />
      <button>Send</button>
    </form>
  )
}
