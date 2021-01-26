import { MdAddShoppingCart } from 'react-icons/md';
import { useContext } from 'react'
import { imageContext } from "../contexts/contexts";

export default function SideBar() {
    const { setCaption, setFont, setTaille } = useContext(imageContext)
    const fonts = [
        "Segoe Script",
        "Arial",
        "Helvetica",
        "Gill Sans",
        "Lucida",
        "Helvetica Narrow",
        "sans-serif",
        "Times",
        "Times New Roman",
        "Palatino",
        "Bookman",
        "New Century Schoolbook",
        "serif",
        "Andale Mono",
        "Courier New",
        "Courier",
        "Lucidatypewriter",
        "Fixed",
        "monospace",
        "Comic Sans",
        "Zapf Chancery",
        "Coronetscript",
        "Florence",
        "Parkavenue",
        "cursive",
        "Impact",
        "Arnoldboecklin",
        "Oldtown",
        "Blippo",
        "Brushstroke",
        "fantasy"
    ]
    return (
        <div className="sideBar">
            <div className="info">
                <div className="input-container">
                    <div className="input-label">
                        Nom de la photo
                    </div>
                    <input maxLength={30} onChange={(e) => setCaption(e.target.value)} className="input-text" type="text" name="name" placeholder="Donnez un petit nom.." />
                </div>

                <div className="input-container">
                    <div className="input-label">
                        Police d'écriture
                    </div>
                    <select onChange={(e) => setFont(e.target.value)} className="dimension" name="dimension" >
                        {fonts.map(el =>
                            <option value={el} >{el}</option>
                        )}
                    </select>
                </div>

                <div className="input-container radio">
                    <div className="input-label">
                        Taille de la photo
                    </div>
                    <select onChange={(e) => setTaille(e.target.value)} className="dimension" name="dimension" >
                        <option value="petite">Petite</option>
                        <option value="grande">Grande</option>
                    </select>
                </div>
            </div>

            <div className="metadata">
                <div className="input-label">Metadata</div>
                <div className="meta-item">
                    <div className="meta-name">Type</div>
                    <div className="meta-value">JPEG</div>
                </div>
                <div className="meta-item">
                    <div className="meta-name">Resolution</div>
                    <div className="meta-value">1920 x 540</div>
                </div>
                <div className="meta-item">
                    <div className="meta-name">Taille</div>
                    <div className="meta-value">2.56 MB</div>
                </div>
                <div className="meta-item">
                    <div className="meta-name">Encodage</div>
                    <div className="meta-value">Typhon</div>
                </div>
            </div>
            <div className="commander">
                <button className="btn green">
                    Ajouter au panier <MdAddShoppingCart />
                </button>
            </div>
            <style jsx>{`
                .sideBar {
                    width:  20%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    align-items: center;
                    padding: 10px 0;
                }
                .info {
                    width: 90%;
                    display: flex;
                    flex-direction: column;
                }
                .input-container {
                    width: 100%;
                    margin-bottom: 3vh;
                }
                .input-label {
                    margin: 0 0 1vh;
                    font-weight: bold;
                }
                .input-text {
                    padding: 10px 10px;
                    border-radius: 10px;
                    width: 90%;
                    border: 1px solid var(--accent);

                }
                .input-text:focus {
				    outline: none;
                }
                .histoire {
                    height: 100px;
                    width: 90%;
                    resize: none;
                }
                .histoire::placeholder {
                    font-family: "Montserrat";
                }
                .radio {
                    font-size: 12px;
                }
                .metadata {
                    width: 90%;
                    padding-top: 10px;
                }
                .meta-item {
                    display: flex;
                    justify-content: space-between;
                    width: 100%;
                    font-size: 14px;
                    padding: 2vh 0;
                    border-bottom: 1px solid var(--accent);
                }
                .meta-value {
                    color: var(--accent)
                }
                .commander {
                    width: 90%;
                    padding-top: 10px;
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
                }
                .dimension {
                    padding: 10px 10px;
                    border-radius: 10px;
                    margin-top: 1vh;
                    width: 90%;
                    border: 1px solid var(--accent);
                }
            `}</style>
        </div >)
};
