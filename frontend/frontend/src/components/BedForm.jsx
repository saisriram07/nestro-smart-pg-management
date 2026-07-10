import { useState, useEffect } from "react";

import { getRooms } from "../services/roomService";

function BedForm({ onAdd }) {

    const [room, setRoom] = useState("");
    const [bedNumber, setBedNumber] = useState("");
    const [isOccupied, setIsOccupied] = useState(false);

    const [rooms, setRooms] = useState([]);

    useEffect(() => {

        loadRooms();

    }, []);

    const loadRooms = async () => {

        try {

            const response = await getRooms();

            setRooms(response.data);

        } catch (error) {

            console.error(error);

        }

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        if (!onAdd) return;

        onAdd({

            room,

            bed_number: bedNumber,

            is_occupied: isOccupied,

        });

        setRoom("");
        setBedNumber("");
        setIsOccupied(false);

    };

    return (

        <div className="card p-4 mb-4">

            <h3 className="mb-4">

                Add Bed

            </h3>

            <form onSubmit={handleSubmit}>

                <div className="mb-3">

                    <label className="form-label">

                        Select Room

                    </label>

                    <select
                        className="form-select"
                        value={room}
                        onChange={(e) => setRoom(e.target.value)}
                        required
                    >

                        <option value="">
                            Select Room
                        </option>

                        {rooms.map((item) => (

                            <option
                                key={item.id}
                                value={item.id}
                            >
                                {item.room_number} ({item.building_name})
                            </option>

                        ))}

                    </select>

                </div>

                <div className="mb-3">

                    <label className="form-label">

                        Bed Number

                    </label>

                    <input
                        type="text"
                        className="form-control"
                        value={bedNumber}
                        onChange={(e) => setBedNumber(e.target.value)}
                        required
                    />

                </div>

                <div className="form-check mb-3">

                    <input
                        className="form-check-input"
                        type="checkbox"
                        checked={isOccupied}
                        onChange={(e) => setIsOccupied(e.target.checked)}
                        id="occupiedCheck"
                    />

                    <label
                        className="form-check-label"
                        htmlFor="occupiedCheck"
                    >

                        Occupied

                    </label>

                </div>

                <button
                    className="btn btn-success"
                    type="submit"
                >

                    Add Bed

                </button>

            </form>

        </div>

    );

}

export default BedForm;