import React from "react"
//import any sub-components
import axios from 'axios'

export default class App extends React.Component {
	constructor(){
		super()
		this.state = {
			players: []
		}
	}
	async componentDidMount(){
		try{
			let players = await axios.get('/api/players')
			console.log(players)
			this.setState({players: players.data})
		} catch (err){
			console.log('oh nooooo')
		}
	}
	//any lifecycle methods
	//any custom methods
	render(){
		const players = this.state.players
		return (
			<div>
				<ul>
					{players.map( player => {
						return (
							<div>
								<li>
									{player.name}
								</li>
							</div>
						)
					})}
				</ul>
			</div>
		)
	}
}
