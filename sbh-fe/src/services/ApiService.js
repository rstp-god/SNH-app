export default class ApiService { 
    _apibaseURL = 'http://a0540172.xsph.ru/api'; 

    testConnection = async () => {
      const result =  await fetch(`${this._apibaseURL}/testconnection`, {
            method: 'GET', 
            mode:'cors'
        })
        .then((res)=> {
            return res.json().then((data) => {
                return data; 
            })
        }) 
        return await result;
    }

    getMathFormulas = async () => {
        const result =  await fetch(`${this._apibaseURL}/Math`, {
            method: 'GET', 
            mode:'cors'
        })
        .then((res)=> {
            return res.json().then((data) => {
                return data; 
            })
        }) 
        return await result;
    }

    getMathFormula = async (id) => { 
        const result = await fetch(`${this._apibaseURL}/Math/${id}`, { 
            method: 'GET', 
            mode : 'cors'
        })
        .then((res)=>{
            return res.json().then((data)=> { 
                return data; 
            })
        })
        return await result ;
    } 

    getGeometryFormulas = async() => { 
        const result = await fetch(`${this._apibaseURL}/Geometry` , { 
            method : 'GET', 
            mode : "cors"
        })
        .then((res)=>{
            return res.json().then((data) => { 
                return data ; 
            })
        })
        return await result;
    }

    getGeometryFormula = async (id) => { 
        const result = await fetch(`${this._apibaseURL}/Geometry/${id}`, { 
            method : 'GET', 
            mode: 'cors'
        })
        .then((res)=> { 
            return res.json().then((data) =>{ 
                return data; 
            })
        })
        return await result; 
    }

    getPhysicsFormulas = async () => { 
        const result = await fetch(`${this._apibaseURL}/Physics`, {
            method : 'GET', 
            mode :'cors'
        })
        .then((res)=> { 
            return res.json().then((data)=> { 
                return data; 
            })
        })
        return await result; 
    }

    getPhysicsFormula = async (id) => { 
        const result = await fetch(`${this._apibaseURL}/Physics/${id}`, {
            method : 'GET', 
            mode :'cors'
        })
        .then((res)=> { 
            return res.json().then((data)=> { 
                return data; 
            })
        })
        return await result; 
    }

    getInformFormulas = async () => { 
        const result = await fetch(`${this._apibaseURL}/Informatics`, { 
            method: 'GET', 
            mode :'cors'
        })
        .then((res)=> { 
            return res.json().then((data)=> { 
                return data; 
            })
        })
        return await result; 
    }
    
    getInformFormula = async (id) => { 
        const result = await fetch(`${this._apibaseURL}/Informatics/${id}`, { 
            method: 'GET', 
            mode :'cors'
        })
        .then((res)=> { 
            return res.json().then((data)=> { 
                return data; 
            })
        })
        return await result; 
    }
}