import React from 'react'
import Container from '../components/home/Container'
import Image from 'next/image'

export default function Main() {
    return (
        <div className="main">

            <div className="bg">
                <Image
                    src="/bg.jpg"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
            </div>
            <Container />
            <style jsx >{`
.bg {
    position: fixed;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    z-index: -1;
    pointer-events: none;
  }
        `}</style>
        </div>
    )
}
