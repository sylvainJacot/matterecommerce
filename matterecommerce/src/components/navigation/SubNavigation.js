import React from "react";
import Styled from 'styled-components';
import {NavDesktopCategories} from './NavigationDesktop/NavDesktopCategories';

const SubNavigationWrapper = Styled.div`
background: ${props => props.isSubNavOpen ? 'lightyellow' : 'red'};
`;

export class SubNavigation extends React.Component {
    render() {
        const {SubNavigationActive} = this.props;
        return (
            <SubNavigationWrapper isSubNavOpen={SubNavigationActive}>
                    <NavDesktopCategories/>
            </SubNavigationWrapper>
        )
    }
}