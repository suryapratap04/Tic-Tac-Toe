import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "../index.css";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { NavLink } from "react-router-dom";
export default function HomePage() {
	const { playerData, dataSetter } = useContext(AppContext);
	let submitHandler = () => {
		console.log(playerData);
	};

	return (
		<div className="HomePageHeroSection flex">
			<header>
				<h1>Tic Tac Toe Game!</h1>
			</header>
			<main className="HomePagemainSection flex">
				<div className="HomePagemainSection_player flex ">
					
					<TextField
						className="PlayerInput"
						id="outlined-basic"
						label="Player 1"
						variant="outlined"
						name="player1"
						value={playerData.player1}
						onChange={dataSetter}
					/>
					<TextField
						className="PlayerInput"
						id="outlined-basic"
						label="Player 2"
						variant="outlined"
						name="player2"
						value={playerData.player2}
						onChange={dataSetter}
					/>
					<NavLink to="/Tic-Tac-Toe/Game-Play">
						<Button variant="contained" className="btn" onClick={submitHandler}>
							Play
						</Button>
					</NavLink>
				</div>
				{/* <span>Or </span>
				<div>
					<Button
						variant="contained"
						onClick={() => {
							console.log("Play as Guest");
						}}>
						Play As Guest
					</Button>
				</div> */}
			</main>
		</div>
	);
}
