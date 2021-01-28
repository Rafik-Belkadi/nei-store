import ImageView from '../components/ImageView'
import Navbar from '../components/Navbar'
import SideBar from '../components/SideBar'
import styles from '../styles/Home.module.css'
import { useState } from "react";
import { imageContext } from "../contexts/contexts";

export default function Home() {
  const [caption, setCaption] = useState("hahahah");
  const [font, setFont] = useState("Segoe Script");
  const [taille, setTaille] = useState("petite");
  const [filter, setFilter] = useState("");


  return (
    <div className={styles.container}>
      <Navbar />
      <div className="main-content">
        <imageContext.Provider value={{ filter, setFilter, caption, setCaption, font, setFont, taille, setTaille }} >
          <ImageView />
          <SideBar />
        </imageContext.Provider>
      </div>
      <style jsx>{`
        .main-content {
                height: 90vh;
                width: 100%;
                display: flex;
                }  
      `}</style>
    </div>
  )
}
