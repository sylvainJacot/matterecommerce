import React from "react";
import Styled from 'styled-components';

const SubCategoryType = Styled.li`
opacity: 0.5;
`;

export class SubCategoryTypeList extends React.Component {
    render() {
        const {subCategoryType} = this.props;
        return (
            <>
                {subCategoryType.map(subCategoryType =>
                    <SubCategoryType>
                        {subCategoryType}
                    </SubCategoryType>
                )}
                </>
        )
    }
}