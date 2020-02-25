import React, {Component} from 'react';
import fetchChamps from '../fetchChamps';
import './start-view.scss'

export default class StartView extends Component{
  
  constructor(props){
    super(props)
    this.state = {
      playerName: 'AgentSexy69',
      server: 'oce',
      loading: false
    }
    this.goClicked.bind(this)
  }

  goClicked(){
    const {playerName, server} = this.state
    if(playerName == null || server == null){
      return
    }
    this.setState({loading: true})
    fetchChamps(server, playerName)
    .then(enemyChampsWithFlash => {
      console.log(enemyChampsWithFlash);
      this.setState({loading: false})
      this.props.onReceivedData(enemyChampsWithFlash)
    })
  }
  render(){
    return (
      <div>
        <div>
          Player Name: 
          <input 
            value={this.state.playerName}
            onChange={
              event => this.setState({playerName: event.target.value})
            }>
          </input>
        </div>
        <div>
          Server: 
          <select
            value={this.state.server}
            onChange={
              event => this.setState({server: event.target.value})
            }
          >
            <option>Select Option</option>
            <option value="oce">Oceania</option>
            <option value="euw">West Europe</option>
          </select>
        </div>
        <p>When the game has loaded, click the button to get enemy champs with flash</p>
        <button onClick={() => this.goClicked()}>Go</button>
        
        {
          this.state.loading == true &&
          <div className='overlay'>
            <img src='images/loading-icon.jpg'/>
          </div>
        }
      </div>
    )
  }
}