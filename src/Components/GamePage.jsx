import Button from "@mui/material/Button";
import "../index.css";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
export default function GamePage() {
	// let btns = document.querySelectorAll(".box");
	// console.log(btns);
	const {
		buttonClick,
		playerData,
		resetBtn,
		user1Count,
		user2Count,
		newGameBtn,
	} = useContext(AppContext);
	return (
		<div className="GamePageHeroSection flex">
			<header className="flex">
				<div className="GamePageHeroSection_title">
					<h1>Tic Tac Toe !</h1>
				</div>
				<div className="flex user_profile">
					<div className="user user1 flex">
						<div className="user_img flex">
							<i className="fa-solid fa-user"></i>
						</div>
						<div className="user_info flex">
							<span>{user1Count}</span>
							<p>
								{playerData.player1 == "" ? `Player 1` : playerData.player1}
							</p>
						</div>
					</div>
					<div className="user user2 flex">
						<div className="user_img flex">
							<i className="fa-solid fa-user"></i>
						</div>
						<div className="user_info flex">
							<span>{user2Count}</span>
							<p>
								{playerData.player2 == "" ? `Player 2` : playerData.player2}
							</p>
						</div>
					</div>
				</div>
			</header>
			<main>
				<div className="gamePlay flex">
					<button className="box" onClick={buttonClick}></button>
					<button className="box" onClick={buttonClick}></button>
					<button className="box" onClick={buttonClick}></button>
					<button className="box" onClick={buttonClick}></button>
					<button className="box" onClick={buttonClick}></button>
					<button className="box" onClick={buttonClick}></button>
					<button className="box" onClick={buttonClick}></button>
					<button className="box" onClick={buttonClick}></button>
					<button className="box" onClick={buttonClick}></button>
				</div>
			</main>
			<footer className="footer flex">
				<Button variant="contained" onClick={resetBtn}>
					Reset
				</Button>
				<Button variant="contained" onClick={newGameBtn}>
					New Game
				</Button>
			</footer>
		</div>
	);
}
