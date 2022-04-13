import "./App.css";
import Appointment from "./pages/Appointment";
import { Provider } from "react-redux";
import { store } from "./stores";

function App() {
	return (
		<div className="App">
			<Provider store={store}>
				<Appointment />
			</Provider>
		</div>
	);
}

export default App;
