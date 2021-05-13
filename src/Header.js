import React from 'react';
import '../src/Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import {useStateValue} from './StateProvider';
import { auth } from './firebase';

function Header() {
    const [ { basket, user }, dispatch] = useStateValue();

    const handleAuthentication = ( ) => {
        if (user) {
            auth.signOut()
        }
    }

    return (
        <div className="header">
            <Link to = './'>
                <img className="header_logo" 
                src="https://qph.fs.quoracdn.net/main-qimg-58b6d90da5d3feeafb33f5c101061429" alt='no'
                />
            </Link>

            <div className="header_search">
                <input
                className="header_searchInput"
                type="text" />
                {/*  LOGO_HERE  */}
                <SearchIcon className='header_searchIcon'/>
            </div>

        <div className="header_nav">
            <Link to ={!user && '/login'}>
            <div onClick={handleAuthentication} className="header_option">
                <span className="header_optionLineOne">
                    Hello, {!user? 'Guest' : user?.email}
                </span>
                <span className="header_optionLineTwo">
                    { user ? 'Sign Out' : 'Sign In'}
                </span>
            </div>
            </Link>

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
                <Link to ='./checkout'>
                    <ShoppingBasketIcon/>
                </Link>
                    <div className="header_optionLineTwo header_basketCount">
                    {basket?.length}</div>
                
            </div>

        </div>
        

        </div>
    )
}

export default Header
