import {
	BlockNames,
	SquaresTitles
} from "../enums/common.enum";
import { CategoryRoutesEnum } from "../enums/routes.enum";

export const SQUARES_TITLES_MAP = new Map<string, string>([
	[BlockNames.MATH, 'Математика'],
	[BlockNames.INFORMATICS, 'Информатика'],
	[BlockNames.GEOMETRY, 'Геометрия'],
	[BlockNames.PHYSICS, 'Физика']
]);

export const CATEGORY_ROUTES_MAP = new Map<string, string>([
	[SquaresTitles.MATH, CategoryRoutesEnum.MATH],
	[SquaresTitles.GEOMETRY, CategoryRoutesEnum.GEOMETRY],
	[SquaresTitles.INFORMATICS, CategoryRoutesEnum.INFORMATICS],
	[SquaresTitles.PHYSICS, CategoryRoutesEnum.PHYSICS]
])
