import React from 'react';
import image from '../../assets/img/logo3.png'

class Hw2 extends React.Component {

    render() {
        return (
            <div>
                <h3>You can see below some math image:</h3>
                <img src={image} alt="math image" />
            </div>
        )
    }
}

export default Hw2;