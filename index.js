import ReactDom from 'react-dom'
import React from 'react'

import 'favicon/android-chrome-192x192'
import 'favicon/android-chrome-512x512'
import 'favicon/apple-touch-icon'
import 'favicon/favicon-16x16'
import 'favicon/favicon-32x32'
import 'favicon/favicon'
import 'favicon/site'

import style from 'blankita'
import App from 'comps/app/app'

ReactDom.render
(
  <div>
      <div className={style.rowcenter}>
        <div className={style.colcenter}>
          <div>say goodbye</div>
          <div>or say hello</div>
        </div>
      </div>
      <App person={{name:'alexander',surname:'gomez'}}/>
  </div>,
  document.getElementById('root')
)
