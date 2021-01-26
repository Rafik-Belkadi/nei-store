// import { useState } from 'react'
import { MdPhotoCamera } from 'react-icons/md'

export default function Boxes() {

    // [images, setImages] = useState([])

    return (
        <div className="boxes">
            <div className="myPhotos">
                Vos Photos <MdPhotoCamera style={{ verticalAlign: "middle" }} />
            </div>

            <div className="row">
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
            </div>
            <div className="row">
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
            </div>
            <div className="row">
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
            </div>

            <style jsx>{`
            .boxes {
                display: flex;
                justify-content: space-around;
                margin-left: 40px;
            }
            .myPhotos{
                font-size: 50px;
                font-weight: ligher;
                transform: rotate(-90deg);
                color: #FFFFFF;
                position: absolute;
                left: 150px;
                top: 15%;
                height: 100%;
                z-index: 2;
                -webkit-touch-callout: none;
                -webkit-user-select: none;
                -khtml-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
            }
            .row {
                margin-top: 40px;
            }
            .box {
                height: 190px;
                width: 220px;
                border-radius: 20px;
                background-color: white;
                margin-bottom: 60px;
                padding: 0 10 10 0
            }
            `}

            </style>
        </div>
    )
}
