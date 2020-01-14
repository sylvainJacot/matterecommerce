import React from "react";
import Styled from "styled-components";
import {navigationListItems} from '../../constant/navigation';
import {NavListItemsMobile} from "./NavListItemsMobile";

const NavigationMobileWrapper = Styled.ul`

`

export class NavigationMobile extends React.Component {
    render() {
        return (
            <NavigationMobileWrapper>
                    <NavListItemsMobile />
            </NavigationMobileWrapper>
        )
    }
}