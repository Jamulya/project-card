import React from 'react'

function Continue() {
  return (
    <>
        <div id="formConinueContainer">
            <form noValidate>
                <div id="continueContainer">
                    <input type="submit"
                     name='submit' 
                     id='submit' 
                     value='Continue' 
                     className='w-full
                      bg-veryDarkViolet
                       text-white
                        py-[15px]
                         rounded-lg' />
                </div>
            </form>
        </div>
    </>
  )
}

export default Continue