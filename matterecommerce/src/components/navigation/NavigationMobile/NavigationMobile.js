import React from "react";
import Styled from "styled-components";
import {navigationListItems} from '../../../constant/navigation';

const NavigationWrapper = Styled.div`
display: flex;
`;

const NavigationShop = Styled.ul`
display: flex;
    li {
    margin-left: 16px;
    }
`;
const NavigationPages = Styled.ul`
display: flex;
    li {
    margin-left: 16px;
    }
`;

export class NavigationMobile extends React.Component {
    render() {
        const {onMouseEnter,onMouseLeave} = this.props;
        return (
            <>
                <NavigationWrapper>
                    <NavigationShop>
                        <li
                            onMouseEnter={onMouseEnter}
                            onMouseLeave={onMouseLeave}
                        >
                            <a href={navigationListItems[0].href}>
                                {navigationListItems[0].title}
                            </a></li>
                    </NavigationShop>

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