import Button from "./Button"

function App() {
    return <div>
        <div>
            <Button success rounded outline>Click here!</Button>
        </div>
        <div>
            <Button warning>Click here!</Button>
        </div>
        <div>
            <Button secondary outline>Click here!</Button>
        </div>
        <div>
            <Button danger outline>Click here!</Button>
        </div>
        <div>
            <Button secondary rounded>Click here!</Button>
        </div>
    </div>
}

export default App