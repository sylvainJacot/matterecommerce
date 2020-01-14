import React from "react";
import Styled from "styled-components";
import {NavigationShop} from './NavigationShop';

const NavigationWrapper = Styled.div`
display: flex;
`;

const NavigationPages = Styled.ul`
display: flex;
    li {
    margin-left: 16px;
    }
`;

export class NavigationDesktop extends React.Component {
    render() {
        const {onMouseEnter,onMouseLeave} = this.props;
        return (
            <>
                <NavigationWrapper>

                    <NavigationShop onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}/>


                    <NavigationPages>
                        <li><a href="/">Fabric</a></li>
                        <li><a href="/">Journal</a></li>
                        <li><a href="/">About</a></li>
                    </NavigationPages>
                </NavigationWrapper>
            </>
        )
    }
}