import React from "react";
import Styled from "styled-components";
import {NavSubCategoryMobile} from './NavSubCategoryMobile';
import {navigationListItems} from "../../constant/navigation";

const Category = Styled.ul``;

export class NavCategoryMobile extends React.Component {
    render() {
        const {labelCategory} = this.props;
        return (

                <Category>

                    {labelCategory}

                    {navigationListItems.subcategory.map(categoryItem =>
                    <NavSubCategoryMobile
                        subcategoryName = {categoryItem.subcategoryName}
                    />
                    )}

                </Category>
        )
    }
}