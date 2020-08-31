import React from "react"
import axios from 'axios'

export default class App extends React.Component {
	constructor(){
		super()
		this.state = {
			players: [],
			selectedPlayer : {}
		}
	this.select = this.select.bind(this)
	this.singlePlayer = this.singlePlayer.bind(this)
	this.resetSelect = this.resetSelect.bind(this)
	}
	async componentDidMount(){
		try{
			let players = await axios.get('/api/players')
			this.setState({players: players.data})
		} catch (err){
			console.log('Problem with Mounting!')
		}
	}
	async select(player){
		try{
			let response = await axios.get(`/api/players/${player.id}`)
			this.setState({
				selectedPlayer: response.data
			})
		} catch (err) {
			console.log('Problem with Select!')
		}	
	}
	async resetSelect(){
		this.setState({selectedPlayer: {}})
	}
	allPlayers({players, select}){
		return(
		<ul>
			{players.map( player => {
				return (
				<div>
					<li onClick={() => select(player)} key = {player.id}>{player.name}</li>
					{/* <li>{player.name}</li> */}
				</div>
				)
			}
			)}
		</ul>
		)
	}
	singlePlayer(){
		return(
			<div>
				<h1>{this.state.selectedPlayer.name}</h1>
				<button onClick = {this.resetSelect}>See All Players</button>
			</div>
		)
	}
	render(){
		let players = this.state.players
		// let selectedPlayer = this.state.selectedPlayer
		return (
			<div>	
				{this.state.selectedPlayer.id ?  <this.singlePlayer /> : <this.allPlayers players = {players} select = {this.select}/>}
				{/* <this.allPlayers players = {players}/> */}
				{/* <this.singlePlayer /> */}
			</div>
		)
	}
}