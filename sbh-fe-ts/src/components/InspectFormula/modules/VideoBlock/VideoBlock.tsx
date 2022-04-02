import React, { FC } from 'react';
import { FormulaVids } from '../../../../types/common.types';
import {
	DivFlexBoxColumn,
	HeaderText,
	Video
} from "../../../StyledComponents/StyledComponents.module";
import { Dictionary } from "../../../../enums/common.enum";

const VideoBlock: FC<FormulaVids> = (props: FormulaVids) => {
	return (
		<DivFlexBoxColumn>
			<HeaderText>{Dictionary.VIDEO_HEADER}</HeaderText>
			<Video src={props.url} allowFullScreen/>
		</DivFlexBoxColumn>
	);
};

export default VideoBlock;