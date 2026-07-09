import { useState, useEffect } from "react";
import { getBuildings } from "../services/buildingService";

function RoomForm({ onAdd, selectedRoom }) {

    const [building, setBuilding] = useState("");
    const [roomNumber, setRoomNumber] = useState("");
    const [capacity, setCapacity] = useState("");

    const [buildings, setBuildings] = useState([]);

    useEffect(() => {

        loadBuildings();

    }, []);

    useEffect(() => {

        if (selectedRoom) {

            setBuilding(selectedRoom.building);
            setRoomNumber(selectedRoom.room_number);
            setCapacity(selectedRoom.capacity);

        }

    }, [selectedRoom]);

    const loadBuildings = async () => {

        try {

            const response = await getBuildings();

            setBuildings(response.data);

        } catch (error) {

            console.log(error);

        }

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        onAdd({

            id: selectedRoom ? selectedRoom.id : null,

            building,

            room_number: roomNumber,

            capacity,

        });

        setBuilding("");
        setRoomNumber("");
        setCapacity("");

    };

    return (

        <div className="card p-4 mb-4">

            <h3 className="mb-4">

                {selectedRoom ? "Edit Room" : "Add Room"}

            </h3>

            <form onSubmit={handleSubmit}>

                <div className="mb-3">

                    <label className="form-label">

                        Select Building

                    </label>

                    <select
                        className="form-select"
                        value={building}
                        onChange={(e) => setBuilding(e.target.value)}
                        required
                    >

                        <option value="">
                            Select Building
                        </option>

                        {buildings.map((item) => (

                            <option
                                key={item.id}
                                value={item.id}
                            >

                                {item.building_name}

                            </option>

                        ))}

                    </select>

                </div>

                <div className="mb-3">

                    <label className="form-label">

                        Room Number

                    </label>

                    <input
                        type="text"
                        className="form-control"
                        value={roomNumber}
                        onChange={(e) => setRoomNumber(e.target.value)}
                        required
                    />

                </div>

                <div className="mb-3">

                    <label className="form-label">

                        Capacity

                    </label>

                    <input
                        type="number"
                        className="form-control"
                        value={capacity}
                        onChange={(e) => setCapacity(e.target.value)}
                        required
                    />

                </div>

                <button
                    className="btn btn-success"
                    type="submit"
                >

                    {selectedRoom ? "Update Room" : "Add Room"}

                </button>

            </form>

        </div>

    );

}

export default RoomForm;