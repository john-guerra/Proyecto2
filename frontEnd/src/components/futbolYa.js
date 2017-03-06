'use strict';
import React, { Component } from 'react';

export default class FutbolYa extends Component {

  render() {
    return (
      <div className="container">
      <h1 className="tit">Fútbol Ya!</h1>
      <h3 className="subTit">
        Fútbol Ya es una página que te permite encontrarte con todos los espacios que quieras para jugar fútbol, puedes encontrar equipos que estén buscando gente, o puedes crear tu propia sesión reservando una cancha e invitando a los demás a que se animen a jugar contigo. ¡Inténtalo!
      </h3>
      <p className="derecha">
        ¿Ya tienes equipo? Ve a tu reserva <i className="fa fa-hand-o-right"></i>
      </p>
      <p className="baja">Para buscar un equipo baja:
        <br></br>
         <i className="fa fa-sort-down"></i></p>
      </div>
    );
  }
}
