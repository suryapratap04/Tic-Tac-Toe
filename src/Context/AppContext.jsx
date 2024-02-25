import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const AppContext = createContext();
export default function AppContextProvider({ children }) {
	let user1 = document.querySelector(".user1");
	let user2 = document.querySelector(".user2");
	let btns = document.querySelectorAll(".box");
	let [count, setCount] = useState(1);
	let [checkwin, setcheckWin] = useState(false);
	let [user1Count, setuser1Count] = useState(0);
	let [user2Count, setuser2Count] = useState(0);
	let [check, setCheck] = useState(true); // true  - X turn; false - O turn

	let [playerData, setData] = useState({
		player1: "",
		player2: "",
	});
	let dataSetter = (event) => {
		setData({ ...playerData, [event.target.name]: event.target.value });
	};
	let checkuser = () => {
		console.log("checking user");
		if (check) {
			console.log("checking user1");
			user1.classList.toggle(".userTurn");
		} else {
			console.log("checking user2");
			user2.classList.toggle("userTurn");
		}
	};
	useEffect(() => {
		checkuser;
	});
	let winPattern = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
	let checkWinner = (value) => {
		if (value == "X") {
			console.log(`Winner is Player  1 - ${playerData.player1}`);
			setuser1Count((count) => {
				return count + 1;
			});
			toast(`Winner is Player  1 - ${playerData.player1}`);
		} else {
			console.log(`Winner is Player  2 - ${playerData.player2}`);
			setuser2Count((count) => {
				return count + 1;
			});
			toast(`Winner is Player  2 - ${playerData.player2}`);
		}
	};
	let initialValue = () => {
		setcheckWin(false);
		setCheck(true);
		setCount(1);
		for (let btn of btns) {
			btn.innerText = "";
		}
	};
	let checkWin = () => {
		for (let pattern of winPattern) {
			// console.log(pattern[0], pattern[1], pattern[2]);
			// console.log(btns[pattern[0]].innerText, btns[pattern[1]].innerText, btns[pattern[2]].innerText);
			let btn1val = btns[pattern[0]].innerText;
			let btn2val = btns[pattern[1]].innerText;
			let btn3val = btns[pattern[2]].innerText;

			if (btn1val != "" && btn2val != "" && btn3val != "") {
				if (btn1val == btn2val && btn2val == btn3val) {
					checkWinner(btn1val);
					// initialValue();
					setcheckWin((win) => {
						return true;
					});
					for (let btn of btns) {
						btn.disabled = false;
						btn.innerText=""
					}
					setCount(1);
				}
			}
		}
	};
	let checkDraw = (count) => {
		if (count == 9) {
			console.log("Draw");
			toast("Its Draw");
			for (let btn of btns) {
				btn.disabled = false;
				btn.innerText=""
			}
			setCount(1);
		}
	};
	let newGameBtn = () => {
		initialValue();
		setuser1Count(0);
		setuser2Count(0);
		for (let btn of btns) {
			btn.disabled=false
			btn.innerText = "";
		}
	};
	let resetBtn = () => {
		for (let box of btns) {
			box.disabled = false;
			box.innerText = "";
		}
		initialValue();
	};
	let buttonClick = (event) => {
		// console.log("button Was Clicked");
		// console.log(event.target);
		setCount((count) => {
			return count + 1;
		});
		console.log(count);
		if (check) {
			event.target.innerText = "X";
			setCheck(false);
		} else {
			event.target.innerText = "O";
			setCheck(true);
		}
		// console.log(event.target.innerText);
		event.target.disabled = true;
		checkWin();
		checkwin ? checkDraw(count - 1) : checkDraw(count);
	};
	const value = {
		playerData,
		setData,
		dataSetter,
		winPattern,
		buttonClick,
		resetBtn,
		user1Count,
		user2Count,
		newGameBtn,
	};
	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
