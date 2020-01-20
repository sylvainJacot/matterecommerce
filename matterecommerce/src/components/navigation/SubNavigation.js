import React from "react";
import Styled from 'styled-components';
import {NavDesktopCategories} from './NavigationDesktop/NavDesktopCategories';
import {navigationListItems} from '../../constant/navigationitems';

const SubNavigationWrapper = Styled.div`
display: ${props => props.isSubNavOpen ? 'none' : 'true'};
background-color: lightyellow;
`;

export class SubNavigation extends React.Component {
    render() {
        const {SubNavigationActive} = this.props;
        return (
            <>
                { navigationListItems.map((navigationListItem, id) =>
                    <SubNavigationWrapper isSubNavOpen={SubNavigationActive} key={id} >
                        <NavDesktopCategories navigationListItem={navigationListItem} />
                    </SubNavigationWrapper>
                )}
            </>
        )
    }
}