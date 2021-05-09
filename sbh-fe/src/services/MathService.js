export default class MathService { 
    _apibaseURL = 'http://a0540172.xsph.ru/api'; 

    testConnection = async () => { 
        await fetch(`${this._apibaseURL}/testconnection`, {
            method: 'GET', 
            mode:'cors'
        })
        .then((res) => { 
            const json = res.json(); 
            console.log(json); 
        }) 
    }

}