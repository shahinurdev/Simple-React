
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus} from '@fortawesome/free-solid-svg-icons'
import './PlayerShow.css';
const PlayerShow = (props) => {
    const {img,name,salary} = props.player;
    return (
        <div className="row players-info">
            <div className="col-4 p-6">
               {img} 
            </div>
            <div className="col-8">
                <p>Name: {name}</p>
                <p>Salary: {salary}</p>
                <button className="btn btn-info"
                   onClick={ ()=> props.handelAddPlayer(props.player) }
                >
                    <FontAwesomeIcon icon={faPlus} />Add Player</button>
                
            </div>
            
        </div>
    );
};

export default PlayerShow;