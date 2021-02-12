import React from 'react';
import '../src/Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingCart';
function Header() {
    return (
        <div className="header">
            <img className="header_logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD8LLI9539ww9XiGFpENy5J3niaEPQlAwbqw&usqp=CAU"/>

            <div className="header_search">
                <input
                className="header_searchInput"
                type="text" />
                {/*  LOGO_HERE  */}
                <SearchIcon className='header_searchIcon'/>
            </div>

        <div className="header_nav">
            <div className="header_option">
                <span className="header_optionLineOne">
                    Hello Guest
                </span>
                <span className="header_optionLineTwo">
                    Sign In
                </span>
            </div>

            <div className="header_option">
                
                <span className="header_optionLineOne">
                    Returns
                </span>
                <span className="header_optionLineTwo">
                    & Orders
                </span>
            </div>

            <div className="header_option">
                <span className="header_optionLineOne">
                    Your
                </span>
                <span className="header_optionLineTwo">
                    Prime
                </span>
            </div>
            <div className="header_optionBasket">
                <ShoppingBasketIcon/>
                <div className="header_optionLineTwo header_basketCount">
                    0</div>
            </div>

        </div>
        

        </div>
    )
}

export default Header
