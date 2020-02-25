import React, {Component} from 'react';
import './champion-card.scss'

export default class ChampionCard extends Component{
  
  constructor(props){
    super(props)
    this.state = {
      cooldownInterval: null,
      flashCooldownVal: 300,
      flashCountdown: null
    }
  }
  toggleCountdown(){
    console.log('ding');
    const {flashCountdown} = this.state
    if(flashCountdown == null){
      this.startCountdown()
    }
    else {
      this.stopCountdown()
    }
  }
  stopCountdown(){
    const {cooldownInterval} = this.state
    clearInterval(cooldownInterval)
    this.setState({flashCountdown: null, cooldownInterval: null})
  }
  
  startCountdown(){
    const {flashCooldownVal} = this.state
    this.setState({flashCountdown: flashCooldownVal})
    const interval = setInterval(() => {
      const {flashCountdown} = this.state
      if(flashCountdown <= 0){
        this.stopCountdown()
      } else {
        this.setState((state) => ({flashCountdown: --state.flashCountdown}))

      }
    }, 1000)      
    this.setState({cooldownInterval: interval})
  }

  adjustCooldown(val){
    
    if(flashCountdown <= 0){
      this.stopCountdown()
    } else {
      this.setState((state) => ({flashCountdown: state.flashCountdown + val}))
    }
  }


  render(){
    const {champName, imgUrl} = this.props
    const {flashCountdown} = this.state
    const imageStyle = {
      backgroundImage: `url(${imgUrl})`
    }
    return (
      <div className='champion-card'>
        <div 
          className='champ-image' 
          style={imageStyle}
          onClick={() => this.toggleCountdown()}
        >
        </div>
        <div className='flash-wrapper' onClick={() => this.toggleCountdown()}>
          {flashCountdown !== null &&
            <div className="count-down-overlay">
              <div className="countdown-val">{flashCountdown}</div>
            </div>
          }
        </div>
        <div className='adjust-timer-wrapper'>
          <button onClick={() => this.adjustCooldown(10)}>+ 10 secs</button>
          <button onClick={() => this.adjustCooldown(-10)}>- 10 secs</button>
        </div>
        <div className='variables-wrapper'>
          <div className='boots-of-lucidity'></div>
          <div className='cosmic-insight'></div>
        </div>

      </div>
    )
  }
}