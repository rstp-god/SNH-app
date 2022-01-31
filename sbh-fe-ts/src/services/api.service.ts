import {Formula} from "../types/common.types";
import {ApiRoutesEnum} from "../enums/apiRoutes.enum";

export default class ApiService {
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

    public async getMathFormula(id: string): Promise<Formula> {
        const result = await fetch(ApiRoutesEnum.GET_MATH_FORMULAS_BY_ID + id, {
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