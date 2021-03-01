import React, { useState } from 'react';
import fakeData from '../../fakeData/fakeData';
import Cart from '../Cart/Cart';
import PlayerShow from '../PlayerShow/PlayerShow';
import './Players.css'
const Players = () => {
    const [players, setPlayers] = useState(fakeData);
    const [cart,setCart]=useState([]);
    const handelAddPlayer = (player)=>{
        const newCart = [...cart,player];
        setCart(newCart);
    }
  
    return (
        <div className="container">
            <div className="row">
                <div className="col-8 players-area">
                    <h4>players:{players.length}</h4>
                    <ul>
                        {players.map(player => <PlayerShow player={player} handelAddPlayer ={
                            handelAddPlayer 
                        }>

                        </PlayerShow>)}
                    </ul>
                </div>
                <div className="col-4 cart-area">
                    <Cart cart={cart}></Cart>
            </div>
            </div>
        </div>
    );
};

export default Players;