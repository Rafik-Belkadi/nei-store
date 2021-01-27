
export default function Container() {
    return (
        <div className="container">

            <div className="content">
                <h1 className="header">Print your memories</h1>
                <button className="btn"><a href="#">Shop Now</a></button>
            </div>
            <style jsx>{`
            .content {
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                text-align: center;
                margin: -25px 0 0 -25px;
            }
            .header {
                font-family: Montserrat;
                width: 300px;
                font-size: 50px;
                color: #120443;
            }
            .btn {
                width:23vw;
                height: 40px;
                padding: 5px 10px;
                border-radius: 20px;
                align-items: center;
                justify-content: center;
                color: #FFFFFF;
                background-color: #F59599;
                border: none;
                box-shadow: 0 2px 3px rgba(0,0,0,.7);
                padding-left: 20px;
                padding-right: 20px;
                font-size: 1.2rem;
            }

            .btn:hover {
                background-color: #fa6a70;
            }
            .btn:active {
                background-color: #c2565a;
            }
  
        `}</style>
        </div>
    )
}
