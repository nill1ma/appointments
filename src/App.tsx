import "./App.css";
import Appointment from "./pages/Appointment";
import { Provider } from "react-redux";
import { store } from "./stores";
import { useState } from "react";
import Login from "./pages/Login";
import { Users } from "./models/users";

function App() {
	const [user, setUser] = useState<Users | null>(null);

	const actionGoogleSignIn = async (u: any) => {
		const currentUser: Users = {
			id: u.uid,
			name: u.displayName,
			avatar: u.photoURL,
		};
		setUser(currentUser);
	};

	if (user === null) {
		return <Login onReceiveGoogle={actionGoogleSignIn} />;
	}

	return (
		<div className="App">
			<Provider store={store}>
				<Appointment user={user} />
			</Provider>
		</div>
	);
}

export default App;
