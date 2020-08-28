import React from 'react';
import CabeceraMenu from './Header/CabeceraMenu';


const  divStyledisplay  = {
  display:'inherit',
};

const  divStylewidth  = {
  width:'100%',
};

const  divStylewidth2 = {
  width:'30px',
};


class Header extends React.Component<{}, {}>{
    public render(){
        return (<header id="Cabz">

        <div id="cabecera">

          <div className="contactoTelf ampliar">
            <a href="tel:+34954089932"><img src="./Hermanos Cofrades Sevilla - Ropa y complementos para el cofrade_files/contactoTelf.svg" alt="Telófono"></img></a>
          </div>

          <div className="contactoWhat ampliar">
            <a href="https://web.whatsapp.com/send?phone=34647858133" target="_blank"><img src="./Hermanos Cofrades Sevilla - Ropa y complementos para el cofrade_files/contactoWhat.svg" alt="WhatsApp"></img></a>
          </div>

          <div className="contactoMail ampliar">
            <a href="mailto:info@hermanoscofrades.com"><img src="./Hermanos Cofrades Sevilla - Ropa y complementos para el cofrade_files/contactoMail.svg" alt="Email"></img></a>
          </div>

          <div className="logo amplia2">
            <a href="http://www.hermanoscofrades.com/" style={divStyledisplay}><img src="./Hermanos Cofrades Sevilla - Ropa y complementos para el cofrade_files/logoHnosCofrades.svg" alt="Hermanos Cofrades"></img></a>
          </div>

          <div className="usuarios ampliar">
            <a href="http://www.hermanoscofrades.com/register/login"><img src="./Hermanos Cofrades Sevilla - Ropa y complementos para el cofrade_files/usuarios.svg" alt="Usuarios"></img></a>
          </div>

          <div id="carro">
            <div id="carro-icono" className="ampliar"><img src="./Hermanos Cofrades Sevilla - Ropa y complementos para el cofrade_files/carrito.svg" alt="carrito"></img></div>
            <div className="carro-flotante">
              <div className="Cart" id="Cart">
                <div id="carro-vacio">Su Carrito está vacío</div>
              </div>
            </div>
          </div>

          <div id="buscar">
            
            <form id="busca" name="buscar" method="get" action="http://www.hermanoscofrades.com/index.php">
              <input type="hidden" value="hermanoscofrades" name="p"></input>
              <input type="hidden" value="1" name="proceed_search"></input>
              <input type="hidden" value="products" name="mod"></input>
              <table style={divStylewidth}>
                <tbody>
                  <tr>
                    <td><input placeholder="Buscar" name="search_by" className="buscar efectos"></input></td>
                    <td className="separador"> </td>
                    <td style={divStylewidth2}>
                      <div id="headerclear" ></div>
                    </td>
                  </tr>
               </tbody>
              </table>
            </form>  
            
          </div>

          <CabeceraMenu/>

        </div>

    </header>);
    }
}

export default Header;