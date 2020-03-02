import React from 'react';

const galerie = props => {
    return (
        <div>
            <div className="discription-container" >
                <h1 className="h2-dicrpt">Improve the lives of millions. Change yours forever</h1>
                <p className="p-discrpt" >More than 1000 team mates share our same vision, goals and passion. With offices in Warsaw, Barcelona, Istanbul, Rome, Mexico City and Curitiba, our search for great talent never stops.</p>
            </div>
            <div className="galerie">
                {props.galerie.map(el =>
                    <div >
                        <img alt='pic' className="galerie-img" src={el.image} />
                        <div className="galerie-soustitre" >
                            <h4 className="galerie-h4" >{el.city}</h4>
                            <button>SEE OPENINGS</button>
                        </div>
                    </div>)}
            </div>
        </div>)
}

export default galerie;