import React from 'react'

<title>Become our agent</title>

function Agent() {
  return (
    <div>
        <div className='agent-container'>
            <h2 className='header-agent'>Fill this agent form to get started here</h2>
            <input type="text" name="names" placeholder='Enter all your names here' />
            <select className='select-phone'>
                <option>+250</option>
                <option>+254</option>
                <option>+256</option>
                <option>+257</option>
            </select>
            <input type="text" name="phone"  placeholder="Enter Your phone number here" />
            <input type="text" name="identity" placeholder='Enter your national ID number' />
            <input type="submit" name="save" value="Request" />
        </div>
    </div>
  )
}

export default Agent