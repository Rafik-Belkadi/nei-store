import React from 'react'
import { FaArrowLeft } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { IoIosAdd } from 'react-icons/io';

export default function Nav() {

    return (
        <div className="nav">
            <ul className="left">
                <li id="goBack" className="nav-item"><FaArrowLeft style={{ verticalAlign: "middle" }} /> Retour</li>
            </ul>

            <div className="right">
                <li className="nav-item">Vos Photos</li>
                <li className="nav-item selected">Vos Commandes</li>
                <button className="btn green upload"><IoIosAdd style={{ color: "#ffffff", fontSize: 20, padding: 0, margin: 0 }} /> Upload</button>
                <button className="btn accent cart"><AiOutlineShoppingCart style={{ color: "#ffffff", fontSize: 20, padding: 0, margin: "0 5 0 0" }} />Panier</button>
                <div className="profile">R</div>
            </div>


            <style jsx>{`
            .nav {
                width: 100vw;
                height: 10vh;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0 10px;
                border-bottom: 1px solid var(--accent);
                background-color: #FFFFFF;
            }
            .left {
                padding: 0;
                margin: 0;
                display: flex;
                justify-content: space-between;
                align-items: center;
                
            }
            .nav-item {
                text-decoration: none;
                list-style: none;
                padding: 10px;
                margin: 0 20px;
                font-size: 23px;
                vertical-align: middle;
                cursor : pointer;
            }
            .right > .nav-item:hover {
                border-bottom: 2px solid var(--secondary-hover);
            }

            .nav-item#goBack{
                color: var(--accent);
                
            }
            .selected {
                border-bottom: 2px solid var(--accent);
            }
            .selected:hover {
                border-bottom: 2px solid var(--accent);
            }
            .logo {
                font-family: 'Segoe Script';
                font-size: 30px;
                text-decoration: none;
                list-style: none;
                margin-right: 40px;
                display: flex;
                align-items: center;
            }
            .right {
                display: flex;
                align-items: center;
                text-align: end;
                margin-right: 20px;
            }
            .right * {
                margin-left: 20px;
            }

            .profile {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background: var(--accent);
                display: grid;
                place-items: center;
                color: white;
            }
            .btn {
               width: 8vw;
               padding: 5px 10px;
               border-radius: 20px;
               border: none;
               display: flex;
               align-items: center;
               justify-content: center;
               color: white;
            }
            
                
            `}</style>
        </div>
    )
}



