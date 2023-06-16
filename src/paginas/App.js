import '../App.css';
import Family from '../componentes/Family';
import { familyTree } from '../data/dataArbol.js'

function App() {
  return (
    <>
      <div id='div-sobreescritura' className='main-div'>
        <div className='card'>
          <div className='card-header'>
            <span className='card-header-title'>FORMULARIO</span>
          </div>
          <div className='card-body'>
            <button type="button" class="btn btn-primary">Primary</button>
          </div>
        </div>
        <div className='card'>
          <div className='card-header'>
            <span className='card-header-title'>TABLA</span>
          </div>
          <div className='card-body'>
            <table>
              <tr>
                <th colSpan="2" className='th-custom text-val-column'>Fecha</th>
                <th className='th-custom text-val-column'>MN&nbsp;</th>
                <th className='th-custom text-val-column'>USD&nbsp;</th>
                <th className='th-custom text-val-column'>UDIS</th>
              </tr>
              <tr>
                <td className='td-custom text-val-column'>Enero</td>
                <td className='td-custom texto-derecha text-val-column'>2018</td>
                <td className='td-custom texto-derecha text-val-column'>0.00023%</td>
                <td className='td-custom texto-derecha text-val-column'>0.002323%</td>
                <td className='td-custom texto-derecha text-val-column'>0.07823%</td>
              </tr>
              <tr>
                <td className='td-custom text-val-column'>Febrero</td>
                <td className='td-custom texto-derecha text-val-column'>2018</td>
                <td className='td-custom texto-derecha text-val-column'>0.0123%</td>
                <td className='td-custom texto-derecha text-val-column'>0.0923%</td>
                <td className='td-custom texto-derecha text-val-column'>0.63%</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
