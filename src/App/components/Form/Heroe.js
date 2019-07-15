import React from 'react';

//componente de informacion

const Heroe = ({ heroe }) => (
    <div classname="media mt-3">
        <div className="media-body">
            <h3 classname="mt-0">{heroe.name}</h3>
            <p classname="card-text"><span>Description: </span>
                {heroe.description}</p>
            <p className="card-text"><span>date of birth: </span>
                {heroe.birthDate}</p>
        </div>
    </div>
);

export default Heroe;