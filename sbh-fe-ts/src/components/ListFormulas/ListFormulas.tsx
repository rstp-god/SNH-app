import React, {FC} from 'react';
import {
    DivFlexBoxColumn,
    SearchLine,
} from '../StyledComponents/StyledComponents.module';
import ListItemFormula from "../ListItemFornula/ListItemFormula";

const ListFormulas: FC = () => {
    return (
        <DivFlexBoxColumn>
            <SearchLine type='search' placeholder='Search'></SearchLine>
            <ListItemFormula
                id={1}
                formulaName={'test'}
                videourl={'test'}
                description={'test'}
                LaTeXformula={'test'}
                PlotFormula={'test'}
                section={'MATH'}
            />
        </DivFlexBoxColumn>
    );
};

export default ListFormulas;
