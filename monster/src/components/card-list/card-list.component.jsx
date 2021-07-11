import React from 'react';

import { Card } from '../card/card.component';

import './card-list.styles.css';

export const CardList = props => (                 
 <div className='card-list'>
     {props.monster.map(monster => (                     //Itrating monster
         <Card key={monster.id} monster={monster} />     //passing id and monster props to cardlist
       ))}
 </div>
);