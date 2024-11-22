import "/src/styles/App.css";
import { deviceData } from "../data";
import { getDevicesAmmount } from "../utils/helpers";
import { useState } from "react";
import DeviceCard from "./DeviceCard";
import WeatherCard from "./WeatherCard";


function App() {

    const [devices, setDevices] = useState<DeviceData[]>(deviceData);

    return (
        <div className="container">
            <WeatherCard/>
            {devices.map(item => (
                <DeviceCard value={item.value} title={item.title} key={item.id} />
            ))}
            <div className="card show-all">
                <p className="card-title">{getDevicesAmmount(devices)}</p>
                <p className="card-text" style={{color: "#F96241"}}>All devices</p>
            </div>
        </div>
    );
}

export default App;