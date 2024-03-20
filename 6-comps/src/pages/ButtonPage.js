import { GoBell, GoClock, GoContainer, GoCopilot, GoDatabase } from 'react-icons/go'
import Button from '../components/Button';

function ButtonPage() {
    return <div>
        <div>
            <Button secondary><GoBell />Click here!</Button>
        </div>
        <div>
            <Button warning><GoContainer />Click here!</Button>
        </div>
        <div>
            <Button secondary outline><GoClock />Click here!</Button>
        </div>
        <div>
            <Button danger outline><GoDatabase />Click here!</Button>
        </div>
        <div>
            <Button primary rounded><GoCopilot />Click here!</Button>
        </div>
    </div>
}

export default ButtonPage;