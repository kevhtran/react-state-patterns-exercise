import React from "react"
import { Link } from "react-router-dom";
// returns a list of all dogs
const DogList = ({ dogs }) => {



    return (
        <div>
            {dogs.map(d =>
                <div>
                    <h2>
                        name: <Link to={`/dogs/${d.name.toLowerCase()}`}>{d.name}</Link>
                    </h2>
                    <h3>age: {d.age}</h3>
                    <img src={d.src} alt={`image of ${d.name}`} />
                </div>
            )}

        </div>
    )

}

export default DogList