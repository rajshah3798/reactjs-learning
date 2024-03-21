import { GoBell, GoClock, GoContainer, GoCopilot, GoDatabase } from 'react-icons/go'
import Button from '../components/Button';

function ButtonPage() {
    return <div>
        <div>
            <Button className="mb-2" secondary><GoBell />Click here!</Button>
        </div>
        <div>
            <Button className="mb-2" warning><GoContainer />Buy Now!</Button>
        </div>
        <div>
            <Button className="mb-2" secondary outline><GoClock />See Deal!</Button>
        </div>
        <div>
            <Button className="mb-2" danger outline><GoDatabase />Hide Ads!</Button>
        </div>
        <div>
            <Button className="mb-2" primary rounded><GoCopilot />Something!</Button>
        </div>
    </div>
}

export default ButtonPage;