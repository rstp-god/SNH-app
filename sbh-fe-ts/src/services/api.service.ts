import {Formula} from "../types/common.types";
import {ApiRoutesEnum} from "../enums/apiRoutes.enum";
import { formulaLoaded } from "../store/actions";
import {
    Action,
    Store
} from "redux";
import { store } from "../store/store";

export default class ApiService {
    private store: Store

    constructor() {
        this.store = store
    }

    public async testConnection(): Promise<boolean> {
        const result = await fetch(ApiRoutesEnum.TEST, {
            method: 'GET',
            mode: 'cors'
        })
            .then((res) => {
                return res.json().then((data) => {
                    return data;
                })
            })
        return await result;
    }

    public async getMathFormulas(name?: string): Promise<Formula[]> {
        const result = await fetch(ApiRoutesEnum.GET_MATH_FORMULAS + name, {
            method: 'GET',
            mode: 'cors'
        })
            .then((res) => {
                return res.json().then((data) => {
                    return data;
                })
            })
        return await result;
    }

    public async getMathFormula(id: string): Promise<Action> {
        const result = await fetch(ApiRoutesEnum.GET_MATH_FORMULAS_BY_ID + id, {
            method: 'GET',
            mode: 'cors'
        })
            .then((res) => {
                return res.json().then((data) => {
                    return this.store.dispatch(formulaLoaded(data))
                })
            })
        return await result;
    }

    public async getGeometryFormulas(name?: string): Promise<Formula[]> {
        const result = await fetch(ApiRoutesEnum.GET_GEOMETRY_FORMULAS + name, {
            method: 'GET',
            mode: "cors"
        })
            .then((res) => {
                return res.json().then((data) => {
                    return data;
                })
            })
        return await result;
    }

    public async getGeometryFormula(id: string): Promise<Formula> {
        const result = await fetch(ApiRoutesEnum.GET_GEOMETRY_FORMULAS_BY_ID + id, {
            method: 'GET',
            mode: 'cors'
        })
            .then((res) => {
                return res.json().then((data) => {
                    return data;
                })
            })
        return await result;
    }

    public async getPhysicsFormulas(name?: string): Promise<Formula[]> {
        const result = await fetch(ApiRoutesEnum.GET_PHYSICS_FORMULAS + name, {
            method: 'GET',
            mode: 'cors'
        })
            .then((res) => {
                return res.json().then((data) => {
                    return data;
                })
            })
        return await result;
    }

    public async getPhysicsFormula(id: string): Promise<Formula> {
        const result = await fetch(ApiRoutesEnum.GET_PHYSICS_FORMULAS_BY_ID + id, {
            method: 'GET',
            mode: 'cors'
        })
            .then((res) => {
                return res.json().then((data) => {
                    return data;
                })
            })
        return await result;
    }

    public async getInformFormulas(name?: string): Promise<Formula[]> {
        const result = await fetch(ApiRoutesEnum.GET_INFORMATICS_FORMULAS + name, {
            method: 'GET',
            mode: 'cors'
        })
            .then((res) => {
                return res.json().then((data) => {
                    return data;
                })
            })
        return await result;
    }

    public async getInformFormula(id: string): Promise<Formula> {
        const result = await fetch(ApiRoutesEnum.GET_INFORMATICS_FORMULAS_BY_ID + id, {
            method: 'GET',
            mode: 'cors'
        })
            .then((res) => {
                return res.json().then((data) => {
                    return data;
                })
            })
        return await result;
    }
}