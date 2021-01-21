import { useState, useContext } from "react";
import { FiUpload } from "react-icons/fi";
import { imageContext } from "../contexts/contexts"


export default function ImageView() {
    const { caption, font } = useContext(imageContext)

    const [selectedImage, setSelectedImage] = useState("");
    const [selectedImageObject, setSelectedImageObject] = useState(null);
    const [filter, setFilter] = useState("");

    const filters_names = [
        "normal",
        "al dente",
        "athena",
        "audrey",
        "aurora",
        "daguerre",
        "eucalyptus",
        "fes",
        "frost",
        "hairspray",
        "hokusai",
        "incognito"
    ]
    const filters_values = [
        "",
        "/e_art:al_dente",
        "/e_art:athena",
        "/e_art:audrey",
        "/e_art:aurora",
        "/e_art:daguerre",
        "/e_art:eucalyptus",
        "/e_art:fes",
        "/e_art:frost",
        "/e_art:hairspray",
        "/e_art:hokusai",
        "/e_art:incognito",

    ]
    const upload = () => {
        var myCropWidget = window.cloudinary.createUploadWidget({
            cloudName: 'photomania123', uploadPreset: 'photo_', folder: 'clients_photos', cropping: true, showPoweredBy: false, showCompletedButton: true, singleUploadAutoClose: false
        },
            (error, result) => {
                if (result.event == "success") {
                    setSelectedImage(result.info.url)
                    setSelectedImageObject(result)
                }
            })
        myCropWidget.open()
    }

    return (
        <div className="image-view">
            <div className="top">
                <div className="title">
                    Apreçu
                </div>
                <div className="image-wrapper">
                    <div className="image-container">
                        {selectedImage !== "" ?
                            <div className="caption-container">
                                <div className="image">
                                </div>
                                <div className="caption">
                                    {caption}
                                </div>
                            </div>
                            :
                            <div className="choose-image">
                                <div className="instruction">
                                    Ajoutez  votre photo
                                </div>
                                <button className="btn" onClick={upload}>Choisir une image <FiUpload style={{ marginLeft: 10 }} /> </button>
                            </div>
                        }

                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="title">
                    Filtres
                </div>
                <div className="filtres">
                    {filters_names.map((el, index) => <div key={el} className="filtre-container" onClick={() => setFilter(filters_values[index])}>
                        <div className="filtre-name">
                            {el}
                        </div>
                        <FilterContainer selectedImage={selectedImage} filterValue={filters_values[index]} />
                    </div>)}
                </div>
            </div>
            <style jsx>{`
                .image-view {
                    width: 80%;
                    background: var(--accent);
                }
                .top {
                    
                    border-bottom: 1px solid white;
                    height: 75vh;
                    display: flex;
                }
                .top .title {
                    height: 100%;
                    width: 10%;
                    display: grid;
                    place-items: center;
                    transform: rotate(-90deg);
                    color: white;
                    font-size: 48px;
                }
                .image-wrapper {
                    width: 85%;
                    display: grid;
                    place-items: center;
                }
                .image-container {
                    width: 50%;
                    height: 90%;
                    background: white;
                    position: relative;
                    display: grid;
                    place-items: center;
                }
                .image {
                    margin: 10px auto;
                    height: 80%;
                    width: 90%;
                    background-image: ${selectedImage ? `url(${selectedImage.slice(0, 52) + filter + selectedImage.slice(52)})` : ""};
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                }
                .caption-container {
                    height: 100%;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: space-around;
                }
                .caption {
                    font-family: ${font};
                    font-size: 36px;
                }
                .choose-image {
                    display: grid;
                    place-items: center;
                }
                .instruction {
                    font-size: 2.2vw;
                    margin-bottom: 40px;
                    color: var(--accent);
                }
                .btn {
                   width: 25vw;
                   padding: 10px;
                   border-radius: 20px;
                   border: none;
                   background: var(--secondary-hover);
                   color: white;
                   font-size: 28px;
                   display: flex;
                   align-items: center;
                   justify-content: center;
                   align-content: center;
                }
                .bottom {
                    width: 100%;
                    height: 20%;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                }
                .bottom .title {
                    color: white;
                    font-size: 48px;
                }
                .filtres {
                    width: 80%;
                    height: 100%;
                    display: flex;
                    justify-content: space-around;
                    align-items: flex-start;
                    padding-top: 10px;
                }
                .filter-container {
                    height: 100%;
                }
                .filtre-name {
                    text-align: center;
                    color: white;
                    margin-bottom: 5px;
                    text-transform: capitalize;
                    font-size: 1vw;
                }
                
            `}</style>
        </div>
    )
};

const FilterContainer = ({ selectedImage, filterValue }) => {
    var url = "https://res.cloudinary.com/photomania123/image/upload/v1611151036/sample.jpg"
    var sample = url.slice(0, 52) + filterValue + url.slice(52)
    return <div className="filter-view">

        <style jsx>{`
            .filter-view {
                    height: 10vh;
                    width: 5vw;
                    background-image: ${selectedImage ? `url(${selectedImage.slice(0, 52) + filterValue + selectedImage.slice(52)})` : sample};
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: cover;
                    border-radius: 5px;
            }
        `}</style>
    </div>
}
