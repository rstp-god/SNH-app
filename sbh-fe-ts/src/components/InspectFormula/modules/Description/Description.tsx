import React, { FC } from 'react';
import {
	DivFlexBoxColumn,
	HeaderText,
	TextSpanBlock
} from "../../../StyledComponents/StyledComponents.module";
import { Dictionary } from "../../../../enums/common.enum";
import { FormulaDescription } from "../../../../types/common.types";

const Description: FC<FormulaDescription> = (props: FormulaDescription) => {
	const displayedText : React.ReactChild[] = props.text.split("\n")
		.map((paragraph) => <TextSpanBlock>{paragraph}</TextSpanBlock>)
	return (
		<DivFlexBoxColumn>
			<HeaderText>{Dictionary.DESCRIPTION}</HeaderText>
			{displayedText}
		</DivFlexBoxColumn>
	);
};

export default Description;