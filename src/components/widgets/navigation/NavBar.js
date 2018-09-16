import React from 'react'

export default (props)=>(
    <nav className="uk-navbar-container" data-uk-navbar>
 <div className="uk-navbar-left">
        <a className="uk-navbar-item uk-logo" href="#">
         <img src="/imgs/DevC_Logo_Lusaka_for_white_bg.png" style={{width:'350px'}}></img>
        </a>
 </div>
    <div className="uk-navbar-right">
    
        <ul className="uk-navbar-nav">
            <li className="uk-active"><a href="#">Login</a></li>
            <li>
                <a href="#">Register</a>
                <div className="uk-navbar-dropdown">
                    <ul className="uk-nav uk-navbar-dropdown-nav">
                        <li className="uk-active"><a href="#">Active</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">DevC</a></li>
                    </ul>
                </div>
            </li>
            <li><a href="#">Item</a></li>
        </ul>

    </div>

</nav>
)