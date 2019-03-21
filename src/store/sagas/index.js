import WeatherSagas from "./Weather";
import ApiErrors from "./ApiErrors";
import DronePositionSagas from './DroneTracker';
export default [...ApiErrors, ...WeatherSagas,...DronePositionSagas];
