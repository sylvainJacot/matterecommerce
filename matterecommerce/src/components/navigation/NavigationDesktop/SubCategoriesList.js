import React from "react";
import Styled from 'styled-components';
import {SubCategoryTypeList} from "./SubCategoryTypeList";

const SubCategories = Styled.ul`
color:blue;
`;


export class SubCategoriesList extends React.Component {
    render() {
        const {category} = this.props;
        return (
            <>
                {category.map(subCategory =>
                    <SubCategories key={subCategory.id} id={subCategory.id}>
                        {subCategory.title}

                        <SubCategoryTypeList
                            subCategoryType = {subCategory.subCategoryType}
                        />
                    </SubCategories>
                )}
                </>
        )
    }
}