import { useSelector, useDispatch } from "react-redux";
import { addCar, changeCost, changeName } from '../store';

function CarForm() {
    const { name, cost } = useSelector((state) => {
        return {
            name: state.form.name,
            cost: state.form.cost
        }
    })
    const dispatch = useDispatch();

    function handleNameChange(event) {
        dispatch(changeName(event.target.value))
    }

    function handleCostChange(event) {
        const carCost = parseInt(event.target.value) || 0
        dispatch(changeCost(carCost))
    }

    function handleSubmit(event) {
        event.preventDefault();
        dispatch(addCar({
            name, cost
        }))
    }

    return (
        <div className="car-form panel">
            <h4 className="subtitle is-3">Add Card</h4>
            <form onSubmit={handleSubmit}>
                <div className="field-group">
                    <div className="field">
                        <label className="label">Name</label>
                        <input
                            className="input is-expanded"
                            value={name}
                            onChange={handleNameChange}
                        />
                    </div>

                    <div className="field">
                        <label className="label">Cost</label>
                        <input
                            type="number"
                            className="input is-expanded"
                            value={cost || ''}
                            onChange={handleCostChange}
                        />
                    </div>
                </div>
                <div className="fied">
                    <button className="button is-link">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default CarForm;