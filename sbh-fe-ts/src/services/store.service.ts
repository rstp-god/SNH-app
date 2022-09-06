import ApiService from "./api.service";
import { store } from "../store/store";
import { Store } from "redux";
import {
	emptyAction,
	formulaLoaded
} from "../store/actions";
import { Formula } from "../types/common.types";



export default class StoreService {
	private store: Store
	private apiService: ApiService;

	constructor() {
		this.store = store;
		this.apiService = new ApiService();
	}


	public async getMathFormula(id: string): Promise<any> {
		return emptyAction
	}

}