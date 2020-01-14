import React from "react";
import Styled from "styled-components";
import {navigationListItems} from '../../constant/navigation';


const NavListItemMobileWrapper = Styled.ul`
`;

export class NavListItemsMobile extends React.Component {
    render() {
        return (
            <>
            {navigationListItems.map(NavItem =>
                <NavListItemMobileWrapper>
                    {NavItem.navLabel}
                    
                </NavListItemMobileWrapper>
            )}
            </>
        )
    }
}