import React from "react";
import { GameBoard } from "./gameBoard";
//create your first component

export class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			player: "X",
			winner: null
		};
	}
	onWinner = winner => {
		this.setState({ winner: winner });
	};
	switchPlayer = () => {
		this.setState({ player: this.state.player == "X" ? "O" : "X" });
	};
	render() {
		return (
			<div className="text-center mt-5">
				<h1>
					<strong>
						Sams maybe Cool <br />
						but probably wont work <br />
						Tic Tac Toe board in React.js
					</strong>
				</h1>
				<div>The Winner is {this.state.winner}</div>
				<GameBoard
					switchPlayer={this.switchPlayer}
					player={this.state.player}
					onWinner={this.onWinner}
				/>
			</div>
		);
	}
}
