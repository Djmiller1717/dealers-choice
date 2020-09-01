import React from "react"
import axios from 'axios'

export default class App extends React.Component {
	constructor(){
		super()
		this.state = {
			players: [],
			selectedPlayer : {}
		}
	this.singlePlayer = this.singlePlayer.bind(this)
	}
	async componentDidMount(){
		const hashLoad = async() => {
			const id = window.location.hash.slice(1)
			if (id){
				let {data} = await axios.get(`/api/players/${id}`)
				this.setState({
					selectedPlayer: data
				})
			} else {
				this.setState({
					selectedPlayer: {}
				})
			}
		}
		window.addEventListener('hashchange', hashLoad)
		hashLoad()

		let players = await axios.get('/api/players')
		this.setState({players: players.data})
	}
	allPlayers({players, select}){
		return(
		<ul>
			{players.map( player => {
				return (
				<div>
					<a href= {`#${player.id}`}>
					<li>{player.name}</li>
					</a>
				</div>
				)
			}
			)}
		</ul>
		)
	}
	singlePlayer(){
		const player = this.state.selectedPlayer
		return(
			<div>
				<h2>{player.name}</h2>
				<h3>{`#${player.number}`}</h3>
				<h3>{player.position}</h3>
				<a href = '#'>
				<button>See All Players</button>
				</a>
			</div>
		)
	}
	render(){
		let players = this.state.players
		return (
			<div>	
				{this.state.selectedPlayer.id ?  <this.singlePlayer /> : <this.allPlayers players = {players} select = {this.select}/>}
			</div>
		)
	}
}