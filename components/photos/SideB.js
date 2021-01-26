import { FaRegSave } from 'react-icons/fa'

export default function SideB() {
    return (
        <div className="sideBar">
            <div className="headers">
                <div className="profile">R</div>
                <h1 className="mainHeader">Hello!<br /><span className="username">Rafik Belkadi</span></h1>

                <h5 className="email">rafikbelkadi.dz@gmail.com</h5>
            </div>
            <div className="infos">
                <h2>Informations personnels</h2>
            </div>

            <hr style={{ border: "1px solid black", width: "150px", marginBottom: "30px" }}></hr>

            <form className="infos-forms">
                <div>
                    <label className="infos-labels"> Adress</label>
                    <br />
                    <input type="text" className="infos-inputs" placeholder="Votre adresse" />
                </div>
                <div>
                    <label className="infos-labels">Code Postale</label>
                    <br />
                    <input type="text" className="infos-inputs" placeholder="Votre code postal" />
                </div>
                <div>
                    <label className="infos-labels">Ville</label>
                    <br />
                    <input type="text" className="infos-inputs" placeholder="Votre wilaya" />
                </div>
                <div>
                    <label className="infos-labels">Commune</label>
                    <br />
                    <input type="text" className="infos-inputs" placeholder="Votre commune" />
                </div>
                <div>
                    <label className="infos-labels">Téléphone</label>
                    <br />
                    <input type="text" className="infos-inputs" placeholder="+213" />
                </div>
                <button type="submit" className="btn green">
                    <FaRegSave /> <span>Enregistrer les informations</span>
                </button>
            </form>

            <style jsx>{`
            .sideBar {
                width:  20%;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                align-items: center;
                padding: 10px 15px 30px 15px;
                background-color: #FFFFFF;
                text-align: center;
                float: right;
            }
            .mainHeader {
                font-size: 33px;
                font-weight: lighter;
                color: #FFA69E;

            }
            .email, h2 {
                font-weight: 500;
            }

            .infos-labels {
                font-weight: bold;
            }
            .infos-inputs {
                padding: 10px 10px;
                border-radius: 10px;
                width: 90%;
                border: 1px solid var(--accent);                
                margin-bottom: 10px;
                margin-top: 10px
            }

            .profile {
                width: 70px;
                height: 70px;
                font-size: 30px;
                margin: auto;
                border-radius: 50%;
                background: var(--accent);
                display: grid;
                place-items: center;
                color: white;
            }
            .btn {
                width: 100%;
                padding: 10px;
                height: 5vh;
                border-radius: 20px;
                border: none;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-size: 1.2vw;
                margin-top: 15px;
             }
            
        `}</style>
        </div >)
};
