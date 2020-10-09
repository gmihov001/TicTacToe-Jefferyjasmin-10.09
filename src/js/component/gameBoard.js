import React, { Component } from "react";
import PropTypes from "prop-types";

export class GameBoard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			boxValues: ["", "", "", "", "", "", "", "", ""]
		};
	}

	checkWinningCombo = (winningPattern, currentPattern) => {
		var successfullMatches = 0;
		for (var i = 0; i < winningPattern.length; i++) {
			if (winningPattern[i] == 1) {
				if (currentPattern[i] == this.props.player) {
					successfullMatches++;
					console.log(successfullMatches);
					if (successfullMatches > 2) return this.props.player;
				}
			}
		}
	};

	pickWinner = currentPattern => {
		const winningPatterns = [
			[1, 1, 1, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 1, 1, 1, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 1, 1, 1],
			[1, 0, 0, 1, 0, 0, 1, 0, 0],
			[0, 1, 0, 0, 1, 0, 0, 1, 0],
			[0, 0, 1, 0, 0, 1, 0, 0, 1],
			[1, 0, 0, 0, 1, 0, 0, 0, 1],
			[0, 0, 1, 0, 1, 0, 1, 0, 0]
		];

		winningPatterns.forEach(winningPattern => {
			var winner = null;
			winner = this.checkWinningCombo(winningPattern, currentPattern);
			console.log(winner);
			console.log(this.props.player);

			if (winner != null) {
				this.props.onWinner(this.props.player);
				this.setState({
					boxValues: ["", "", "", "", "", "", "", "", ""]
				});
			}
		});

		return null;
	};

	upDateMove = index => {
		var newBoxValue = this.state.boxValues.map((item, i) => {
			if (i == index) {
				return this.props.player;
			}
			return item;
		});
		this.setState({ boxValues: newBoxValue });
		console.log(this.state.boxValues);
		this.props.switchPlayer();
		this.pickWinner(newBoxValue);
	};

	render() {
		return (
			<div className="board">
				<div className="row">
					{" "}
					<div
						className="box 1 col-4"
						onClick={() => {
							this.upDateMove(0);
						}}>
						{this.state.boxValues[0]}
					</div>
					<div
						className="box 2 col-4"
						onClick={() => {
							this.upDateMove(1);
						}}>
						{this.state.boxValues[1]}
					</div>
					<div
						className="box 3 col-4 "
						onClick={() => {
							this.upDateMove(2);
						}}>
						{this.state.boxValues[2]}
					</div>
				</div>
				<div className="row">
					<div
						className="box 4 col-4"
						onClick={() => {
							this.upDateMove(3);
						}}>
						{this.state.boxValues[3]}
					</div>
					<div
						className="box 5 col-4"
						onClick={() => {
							this.upDateMove(4);
						}}>
						{this.state.boxValues[4]}
					</div>
					<div
						className="box 6 col-4"
						onClick={() => {
							this.upDateMove(5);
						}}>
						{this.state.boxValues[5]}
					</div>
				</div>
				<div className="row">
					<div
						className="box 7 col-4"
						onClick={() => {
							this.upDateMove(6);
						}}>
						{this.state.boxValues[6]}
					</div>
					<div
						className="box 8 col-4"
						onClick={() => {
							this.upDateMove(7);
						}}>
						{this.state.boxValues[7]}
					</div>
					<div
						className="box 9 col-4"
						onClick={() => {
							this.upDateMove(8);
						}}>
						{this.state.boxValues[8]}
					</div>
				</div>
			</div>
		);
	}
}

GameBoard.propTypes = {
	switchPlayer: PropTypes.func,
	player: PropTypes.string,
	onWinner: PropTypes.func
};

// winner = [
// 	[0, 1, 2],
// 	[3, 4, 5],
// 	[6, 7, 8],

// 	[0, 3, 6],
// 	[1, 4, 7],
// 	[2, 5, 8],

// 	[0, 4, 8],
// 	[2, 4, 6]
// ];
