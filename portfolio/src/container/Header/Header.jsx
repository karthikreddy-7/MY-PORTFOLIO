import React from 'react'
import { motion } from 'framer-motion'
import {images} from '../../constants'
import './Header.scss'
import { AppWrap } from '../../wrapper';
import Spline from "@splinetool/react-spline";
const scaleVariants={
  whileInView:{
    scale:[0,1],
    opacity:[0,1],
    transition:{
      duration:1,
      ease:'easeInOut',
    }
  }
}
const Header = () => {
  return (
    <div className='app__header app__flex'>
      <motion.div
        whileInView={{x:[-100,0],opacity:[0,1]}}
        transition={{duration:0.5}}
        className="app__header-info"
      >
        <div className='app__header-badge'>
        <div className="badge-cmp app__flex">
          <span>👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text">Hello, I am</p>
            <h1 className="head-text">Karthik</h1>
          </div>
        </div>
        <div className='tag-cmp app_flex'>
        <p className="p-text">Web Developer</p>
        <p className="p-text">Data Scientist</p>
        </div>
        </div>
      </motion.div>
      <Spline
    scene="https://prod.spline.design/5QisAWvh03SSYAak/scene.splinecode"
    style={{
      width: '80%',
      height: '70%',
      margin: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      placeItems: 'center',
      borderRadius: '10px'
    }}
  />
    </div>
  )
}

export default AppWrap(Header,'home');