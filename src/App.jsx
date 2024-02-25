import GamePage from "./Components/GamePage";
import HomePage from "./Components/HomePage";
import ScoreCard from "./Components/ScoreCard";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<div>
			<Routes>
				<Route path="/Tic-Tac-Toe" element={<HomePage />} />
				<Route path="/Tic-Tac-Toe/Game-Play" element={<GamePage />} />
				<Route path="/Game-Play/Score-Card" element={<ScoreCard />} />
			</Routes>
		</div>
	);
}

export default App;
