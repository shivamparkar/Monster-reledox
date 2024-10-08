import React from "react";

import { Card } from "../card/card.component";

import "./card-list.styles.css";

export const CardList = (props) => (
  //  <div className='card-list'>
  //      {props.monster.map(monster => (
  //          <Card key={monster.id} monster={monster} />
  //        ))}
  //  </div>

  <div className="card-list">
    {props.monster.map((monster) => {
      console.log("Monster ID",monster.id);
      console.log("Monster", monster); 
      return <Card key={monster.id} monster={monster} />;
    })}
  </div>
);
