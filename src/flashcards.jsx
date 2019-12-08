import React from 'react'

export default props => {
    return(
            <div class="flip-card">
                <div class="flip-card-inner">
                <div class="flip-card-front">
                    <img
                    id="animal-image"
                    src={props.image}
                    />
                </div>

                <div class="flip-card-back">
                    <h3>{props.name}</h3>
                    <h4>Where Do they Live</h4>
                    <p>{props.habitat}</p>
                    <h4>What do they eat</h4>
                    <p>{props.food}</p>
                    <h4>Endangered?</h4>
                    <p>{props.status}</p>
                </div>
                </div>
            </div>
    )
}

