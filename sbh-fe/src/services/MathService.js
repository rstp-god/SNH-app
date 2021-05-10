export default class MathService { 
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

}