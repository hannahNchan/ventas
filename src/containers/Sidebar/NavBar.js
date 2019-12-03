import React, { Component } from 'react';
import { Nav, INavLink } from 'office-ui-fabric-react/lib/Nav';
import links from '../../constants/Menu';

class NavBar extends Component{
    handleClick = e => {
        console.log('News link clicked');
    }
    render = () => {
        return(
            <div>
                <div><img src={window.location.origin + '/logo.png'} alt="logo" /></div>
                <Nav
                onLinkClick={this.handleClick}
                selectedKey="key3"  
                selectedAriaLabel="Selected"
                ariaLabel="Nav basic example"
                styles={{
                root: {
                    width: 208,
                    height: '100%',
                    boxSizing: 'border-box',
                    border: '1px solid #eee',
                    overflowY: 'auto'
                }
                }}
                groups={[ { links } ]}
            />
            </div>
        )
    }
}

export default NavBar;
