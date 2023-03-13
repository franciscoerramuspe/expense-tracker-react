import { useState, useEffect } from "react";

const Filters = ({ filter, setFilter }) => {
    return (
        <div className='filtros sombra contenedor'>
            <form>
                <div className="campo">
                    <label>Filter Expenses</label>
                    <select 
                        value={filter}
                        onChange={ e => setFilter(e.target.value) }
                    >
                            <option value="">-- Every expense --</option>
                            <option value="Savings">Savings</option>
                            <option value="Food">Food</option>
                            <option value="Housing">Housing</option>
                            <option value="Leisure">Leisure</option>
                            <option value="Health">Health</option>
                            <option value="Suscriptions">Suscriptions</option>
                            <option value="Others">Others</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default Filters