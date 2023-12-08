import './App.css';
import Form from './Form';

let statuses = [
    'empty',
    'typing',
    'submitting',
    'success',
    'error',
]
const App = () => {
    return (
        <>
            {statuses.map((status) => {
                return (
                    <section key={status}>
                    <h4>Form ({status}):</h4>
                    <Form status={status}/>
                    </section>
                )
            })}
        </>
    )
}

export default App;