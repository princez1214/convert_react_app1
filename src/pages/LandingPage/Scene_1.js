import React from 'react'
import CSSModules from 'react-css-modules';
import styles from './LandingPage.module.css'
import Header from '../../components/Header';
import scene_1_phone from '../../assets/img/scene1_phone.png'
import cx from 'classnames'
function Scene_1() {
  return (
    <div className={ styles.scene_1_container }>
      <Header/>
      <div className = "row">
        <div className = "userml d-flex">
          <div style = {{ width : '800px'}}>
            <label className = { styles.convert_text}>
              <b className = { styles.convert_strong }>Convert</b> your <br/>monthly bills to EXTRA cash
            </label>
          </div>
          <div style = {{ width : '260px'}}>
            <img className = { styles.image } src = { scene_1_phone }></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CSSModules( Scene_1, styles );