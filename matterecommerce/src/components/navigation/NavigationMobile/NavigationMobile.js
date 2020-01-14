import React from "react";
import Styled from "styled-components";
import {navigationListItems} from '../../../constant/navigation';

const NavigationWrapper = Styled.ul`
display: flex;
    li {
    margin-left: 16px;
    }
`

export class NavigationMobile extends React.Component {
    render() {
        return (
            <>
                <NavigationWrapper>
                    {navigationListItems.map((ListItem, id) =>
                        <li key={id}>
                            <a href={ListItem.href}>
                                {ListItem.title}
                            </a>
                        </li>
                    )}
                </NavigationWrapper>
            </>
        )
    }
}