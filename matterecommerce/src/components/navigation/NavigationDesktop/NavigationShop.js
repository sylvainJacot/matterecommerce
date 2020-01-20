import React from "react";
import Styled from "styled-components";
import {navigationListItems} from "../../../constant/navigationitems";

const NavigationShopWrapper = Styled.ul`
display: flex;
    li {
    margin-left: 16px;
    }
`;

export class NavigationShop extends React.Component {
    render() {
        const {onMouseEnter} = this.props;
        return (
            <NavigationShopWrapper>
                {navigationListItems.map((navigationListItem) =>
                <li
                    key={navigationListItem.id}
                    onMouseEnter={onMouseEnter}
                >
                    <a href={navigationListItem.href}>
                        {navigationListItem.title}
                    </a>
                </li>
                )}
            </NavigationShopWrapper>
        )
    }
}