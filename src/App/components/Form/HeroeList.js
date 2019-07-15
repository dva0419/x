import React from 'react'; //imr, para autocompletar
import Heroe from './Heroe';

const HeroeList = ({ heroelist }) => (

    <div className="card mt2 py-5">
        <div className="card-body">
            <h2 className="card-tittle text-center mb-5">to administrer the heroes here</h2>

            <div className="list-heroes">
                {heroelist.map(heroe => (
                    //para llamar al comomnete
                    <Heroe
                        key={heroe.id}
                        heroe={heroe}
                    />
                ))}
            </div>
        </div>
    </div>

);

export default HeroeList;