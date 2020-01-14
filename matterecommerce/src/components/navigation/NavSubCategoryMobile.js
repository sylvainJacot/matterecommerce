import React from "react";
import Styled from "styled-components";

const SubCategory = Styled.ul``

export class NavSubCategoryMobile extends React.Component {
    render() {
        const {subcategoryName} = this.props;
        return (
            <SubCategory>
                {subcategoryName}
            </SubCategory>
        )
    }
}

