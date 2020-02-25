import React, {Component} from 'react';
import StartView from './views/start-view';
import ChampionsView from './views/champions-view';
import './app.scss'

const mockEnemyChampsWithFlash = [
  {
    champName: "Caitlyn",
    imgUrl: "https://vignette.wikia.nocookie.net/leagueoflegends/images/e/ef/Caitlyn_OriginalCentered.jpg/revision/latest/scale-to-width-down/1215?cb=20180414201954"
    },
  {
    champName: "Karma",
    imgUrl: "https://vignette.wikia.nocookie.net/leagueoflegends/images/9/9b/Karma_OriginalCentered.jpg/revision/latest/scale-to-width-down/1215?cb=20180414203250"
  },
  {
    champName: "Heimerdinger",
    imgUrl: "https://vignette.wikia.nocookie.net/leagueoflegends/images/4/4a/Heimerdinger_OriginalCentered.jpg/revision/latest/scale-to-width-down/1215?cb=20180414202115"
  },
  {
    champName: "Ashe",
    imgUrl: "https://vignette.wikia.nocookie.net/leagueoflegends/images/b/b8/Ashe_OriginalCentered.jpg/revision/latest/scale-to-width-down/1215?cb=20180414201913"
  },
  {
    champName: "Aatrox",
    imgUrl: "https://vignette.wikia.nocookie.net/leagueoflegends/images/6/67/Aatrox_OriginalCentered.jpg/revision/latest/scale-to-width-down/1215?cb=20180626200206"
  }
]
class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      enemyChampsWithFlash: mockEnemyChampsWithFlash
    }
  }
  receivedData(enemyChampsWithFlash){
    if(enemyChampsWithFlash.length == 0){
      alert('get enemy champs with flash failed')
      return
    }
    this.setState({enemyChampsWithFlash})
  }
  backSelected(){
    this.setState({enemyChampsWithFlash: null})
  }
  render(){
    const {enemyChampsWithFlash} = this.state
    return enemyChampsWithFlash == null ? 
      <StartView 
        onReceivedData={this.receivedData.bind(this)}
      /> : 
      <ChampionsView 
        enemyChampsWithFlash={enemyChampsWithFlash}
        onBackSelected={this.backSelected.bind(this)}
      />
  }
}
export default App