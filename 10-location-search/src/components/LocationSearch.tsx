import { Fragment, useState } from "react"
import type { Place } from "../api/Place"
import { search } from "../api/search";

interface LocationSearchSearchProps {
    onPlaceClick: (place: Place) => void;
}

export default function LocationSearch({ onPlaceClick }: LocationSearchSearchProps) {
    const [places, setPlaces] = useState<Place[]>([]);
    const [term, setTerm] = useState('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const results = await search(term);
        setPlaces(results);
    }

    return <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="term" className="font-bold">
                Search
            </label>
            <input
                type="text"
                className="border border-gray-300 rounded-md shadown-sm focus:border-indigo-500 px-4 py-2 w-full"
                value={term}
                onChange={e => setTerm(e.target.value)}
            />
        </form>

        <h1 className="font-bold mt-6">Found Locations</h1>
        <div className="grid grid-cols-[1fr_40px] gap-2 mt-2 items-center">
            {
                places.map(place => {
                    return <Fragment key={place.id}>
                        <p className="text-sm">{place.name}</p>
                        <button
                            className="bg-blue-500 text-xs text-white font-bold py-1 px-1 rounded"
                            onClick={() => onPlaceClick(place)}
                        >
                            Go
                        </button>
                    </Fragment>
                })
            }
        </div>
    </div>
}