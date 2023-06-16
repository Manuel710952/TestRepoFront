import '../Proyecciones.css'

const Proyecciones = () => {
    return (
        <>
            <div id='main-container-proyecciones'>
                <div id='sections-container-proyecciones' className='row'>
                    <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6 pt-3 pl-2 pr-2'>
                        <div className='card-section'>
                            <div className='card-section-header'>
                                <span className='card-header-title'>Formulario</span>
                            </div>
                            <div className='card-section-body'>
                                <div class="form-group">
                                    <label for="exampleFormControlInput1">Email address</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                                </div>
                                <div class="form-group mt-2 text-center">
                                    <button type="button" class="btn btn-primary">Calcular</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6 pt-3 pl-2 pr-2'>
                        <div className='card-section'>
                            <div className='card-section-header'>
                                <span className='card-header-title'>Tasas</span>
                            </div>
                            <div className='card-section-body'>
                                <table className='table-proyecciones'>
                                    <tr>
                                        <th colSpan="2" className='th-custom-table-proyecciones text-val-column-table-proyecciones'>Fecha</th>
                                        <th className='th-custom-table-proyecciones text-val-column-table-proyecciones'>MNN&nbsp;</th>
                                        <th className='th-custom-table-proyecciones text-val-column-table-proyecciones'>USSD&nbsp;</th>
                                        <th className='th-custom-table-proyecciones text-val-column-table-proyecciones'>UDIS</th>
                                    </tr>
                                    <tr>
                                        <td className='td-custom-table-proyecciones text-val-column-table-proyecciones'>Enero</td>
                                        <td className='td-custom-table-proyecciones texto-derecha text-val-column-table-proyecciones text-right-val-column'>2018</td>
                                        <td className='td-custom-table-proyecciones texto-derecha text-val-column-table-proyecciones text-right-val-column'>0.00023%</td>
                                        <td className='td-custom-table-proyecciones texto-derecha text-val-column-table-proyecciones text-right-val-column'>0.002323%</td>
                                        <td className='td-custom-table-proyecciones texto-derecha text-val-column-table-proyecciones text-right-val-column'>0.07823%</td>
                                    </tr>
                                    <tr>
                                        <td className='td-custom-table-proyecciones text-val-column-table-proyecciones'>Febrero</td>
                                        <td className='td-custom-table-proyecciones texto-derecha text-val-column-table-proyecciones text-right-val-column'>2018</td>
                                        <td className='td-custom-table-proyecciones texto-derecha text-val-column-table-proyecciones text-right-val-column'>0.0123%</td>
                                        <td className='td-custom-table-proyecciones texto-derecha text-val-column-table-proyecciones text-right-val-column'>0.0923%</td>
                                        <td className='td-custom-table-proyecciones texto-derecha text-val-column-table-proyecciones text-right-val-column'>0.63%</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 pt-4 pl-2 pr-2'>
                        <div className='card-section'>
                            <div className='card-section-header'>
                                <span className='card-header-title'>Tabla de proyecciones</span>
                            </div>
                            <div className='card-section-body'>
                                <table className='table-proyecciones'>
                                    <tr>
                                        <th className='cell-boder-black th-custom-table-proyecciones text-val-column-table-proyecciones'>Año aportacion</th>
                                        <th className='cell-boder-black th-custom-table-proyecciones text-val-column-table-proyecciones'>Tasa interes&nbsp;</th>
                                        <th className='cell-boder-black th-custom-table-proyecciones text-val-column-table-proyecciones'>Valor UDI&nbsp;</th>
                                        <th className='cell-boder-black th-custom-table-proyecciones text-val-column-table-proyecciones'>Aportacion en UDI</th>
                                        <th className='cell-boder-black th-custom-table-proyecciones text-val-column-table-proyecciones'>Aportacion en USSI</th>
                                        <th className='cell-boder-black th-custom-table-proyecciones text-val-column-table-proyecciones'>Aportacion en Pesos</th>
                                    </tr>
                                    <tr>
                                        <td className='cell-boder-black td-custom-table-proyecciones text-val-column-table-proyecciones text-right-val-column'>12</td>
                                        <td className='cell-boder-black td-custom-table-proyecciones texto-derecha text-val-column-table-proyecciones text-right-val-column'>14</td>
                                        <td className='cell-boder-black td-custom-table-proyecciones texto-derecha text-val-column-table-proyecciones text-right-val-column'>15</td>
                                        <td className='cell-boder-black td-custom-table-proyecciones texto-derecha text-val-column-table-proyecciones text-right-val-column'>45</td>
                                        <td className='cell-boder-black td-custom-table-proyecciones texto-derecha text-val-column-table-proyecciones text-right-val-column'>45</td>
                                        <td className='cell-boder-black td-custom-table-proyecciones texto-derecha text-val-column-table-proyecciones text-right-val-column'>89</td>
                                    </tr>
                                    <tr>
                                    <td className='cell-boder-black td-custom-table-proyecciones text-val-column-table-proyecciones text-right-val-column'>12</td>
                                        <td className='cell-boder-black td-custom-table-proyecciones texto-derecha text-val-column-table-proyecciones text-right-val-column'>14</td>
                                        <td className='cell-boder-black td-custom-table-proyecciones texto-derecha text-val-column-table-proyecciones text-right-val-column'>15</td>
                                        <td className='cell-boder-black td-custom-table-proyecciones texto-derecha text-val-column-table-proyecciones text-right-val-column'>45</td>
                                        <td className='cell-boder-black td-custom-table-proyecciones texto-derecha text-val-column-table-proyecciones text-right-val-column'>45</td>
                                        <td className='cell-boder-black td-custom-table-proyecciones texto-derecha text-val-column-table-proyecciones text-right-val-column'>89</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Proyecciones;