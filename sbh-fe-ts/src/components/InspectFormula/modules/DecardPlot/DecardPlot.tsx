import React, {
	FC,
	useEffect
} from 'react';
import {
	DivFlexBoxColumn,
	HeaderText,
	Graph
} from "../../../StyledComponents/StyledComponents.module";
import { Dictionary } from "../../../../enums/common.enum";
import functionPlot from "function-plot";
import { PlotFormula } from "../../../../types/common.types";


const DecardPlot: FC<PlotFormula> = (props:PlotFormula ) => {
	const GraphWidth: React.Ref<any> = React.createRef();
	useEffect(() => {
		functionPlot({
			target: "#rootgraph",
			width: GraphWidth.current.offsetWidth - 15,
			height: GraphWidth.current.offsetWidth * 0.5,
			yAxis: { domain: [-20, 20] },
			grid: true,
			data: [
				{
					fn: props.function,
					derivative: {
						fn: "x",
						updateOnMouseMove: true
					}
				}
			]
		});
	})
	return (
		<DivFlexBoxColumn>
			<HeaderText>{Dictionary.DECARD_PLOT}</HeaderText>
			<Graph ref={GraphWidth} id='rootgraph'/>
		</DivFlexBoxColumn>
	);
};

export default DecardPlot;