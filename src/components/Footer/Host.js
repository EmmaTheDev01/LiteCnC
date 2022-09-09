import React from 'react'

function Host() {
  return (
    <div>
        <div className='agent-container'>
            <h2 className='header-agent'>Fill this form to host your property on LiteCnC</h2>
            <input type="text" name="names" placeholder='Enter all names here' />
            <select className='select-phone'>
                <option>+250</option>
                <option>+254</option>
                <option>+256</option>
                <option>+257</option>
            </select>
            <input type="text" name="phone"  placeholder="Enter Your phone number here" />
            <input type="text" name="identity" placeholder='Enter your national ID number' />
            <select className='select-phone'>
                <option>Car</option>
                <option>Cottage</option>  
            </select>
            <input type="File" name='photo' placeholder='Upload a photo of property' />
            <input type="submit" name="save" value="Host" />
        </div>
    </div>
  )
}

export default Host