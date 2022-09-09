import React, {Component} from "react";
import {FaSearch} from 'react-icons/fa'
class Search extends Component{
    render(){
        const srch = document.querySelector('.srch');
        const input = document.querySelector('.input');
        const srchbtn = document.querySelector('srch-btn');
        srchbtn.addEventListener("click", () =>{
            input.classList.toggle('active')
            input.focus();
        })
        return(
            <div>
            <div className='srch'>
                <input type="text" class="input" placeholder="Search..." />
                <button id="search-btn"><FaSearch /></button>
            </div>
                
            </div>
        );

    }
    
}
export default Search;