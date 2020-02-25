import React from 'react';
import ChampionCard from '../components/champion-card';
import './champions-view.scss';
const ChampionsView = ({enemyChampsWithFlash}) => 
  <div className="champs-container">
    {enemyChampsWithFlash.map(enemy =>
      <ChampionCard
        key={enemy.champName}
        champName={enemy.champName}
        imgUrl={enemy.imgUrl}
      />
    )}
  </div>
export default ChampionsView