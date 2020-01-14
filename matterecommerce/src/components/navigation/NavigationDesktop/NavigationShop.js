import React from "react";
import Styled from "styled-components";
import {navigationListItems} from "../../../constant/navigation";

const NavigationShopWrapper = Styled.ul`
display: flex;
    li {
    margin-left: 16px;
    }
`;

export class NavigationShop extends React.Component {
    render() {
        const {onMouseEnter,onMouseLeave} = this.props;
        return (
            <NavigationShopWrapper>
                <li
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                >
                    <a href={navigationListItems[0].href}>
                        {navigationListItems[0].title}
                    </a></li>
            </NavigationShopWrapper>
        )
    }
}