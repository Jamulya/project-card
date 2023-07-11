import React from 'react'
import Icon from './thanks/Icon'
import Continue from './thanks/Continue'

function Thanks() {
  return (
    <>
      <div id="thanksContainer">
        <div id="iconWrapper" className='mb-[35px]'>
          <Icon/>
        </div>
        <div id="copyWrapper" className='mb-12'>
        </div>
        <div id="continueWrapper">
          <Continue/>
        </div>
      </div>
    </>
  )
}

export default Thanks