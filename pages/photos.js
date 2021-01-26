import React from 'react'
import Nav from '../components/photos/Nav'
import SideB from '../components/photos/SideB'
import Boxes from '../components/photos/Boxes'
import styles from '../styles/Photos.module.css'

export default function Photos() {
    return (
        <div className={styles.photos}>
            <Nav />
            <SideB />
            <Boxes />



            <style jsx global>{`
  body {
      background-color: #FFA69E;
      
  }
      `}</style>
        </div>
    )
}
