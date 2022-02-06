import React from 'react';
import {ReactRouterLink, UlInside, UlReactRouterLink} from "../StyledComponents/StyledComponents";
import {Formula} from "../../types/common.types";
import {InspectRoutesEnum} from "../../enums/routes.enum";
import {BlockNames} from "../../enums/common.enum";

const ListItemFormula = (props: Formula) => {
    let route :string =''

    switch (props.section) {
        case BlockNames.MATH: {
            route = InspectRoutesEnum.MATH
            break;
        }
        case BlockNames.GEOMETRY: {
            route = InspectRoutesEnum.GEOMETRY
            break;
        }
        case BlockNames.INFORMATICS: {
            route = InspectRoutesEnum.INFORMATICS
            break;
        }
        case BlockNames.PHYSICS: {
            route = InspectRoutesEnum.PHYSICS
            break;
        }
        default:
            break;
    }

    return (
        <UlInside key={props.id}>
        <UlReactRouterLink to={`${route}/${props.id}`}>{props.formulaName}</UlReactRouterLink>
        </UlInside>
    );
};

export default ListItemFormula;
