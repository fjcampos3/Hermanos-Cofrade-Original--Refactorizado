import React from 'react';


class CabeceraMenu extends React.Component<{}, {}>{
    public render(){
        return (<div id="cabeceraMenu">
            
            <ul id="menu">            
              <li><a href="http://www.hermanoscofrades.com/es/173259-inicio">Inicio</a></li>             
              <li><a href="http://www.hermanoscofrades.com/es/173260-quienes-somos">Quienes Somos</a></li>            
              <li><a href="http://www.hermanoscofrades.com/es/173261-ayuda">Ayuda</a></li>            
              <li><a href="http://www.hermanoscofrades.com/es/173262-contacto">Contacto</a></li>            
              <li><a href="http://www.hermanoscofrades.com/es/173253-ofertas">Ofertas</a></li>            
              <li><a href="http://www.hermanoscofrades.com/es/173254-novedades">Novedades</a></li>            
            </ul>
            
        </div>)
  }
}

export default CabeceraMenu;