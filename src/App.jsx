import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'
import data from './data.js'

function App() {
    const resource = data.map(
        (item) => {
            return <Card
                key={item.id}
                {...item}
            />
        }
    )

    return (
        <div className="app">
            <div className="app--container">
                <Navbar/>
                <div className="card">
                    {resource}
                </div>
            </div>
        </div>
    )
}

export default App
