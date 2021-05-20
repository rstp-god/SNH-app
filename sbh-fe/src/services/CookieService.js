export default class CookieService { 
    _cookies = document.cookie; 


    //обязательно при вызове правильно прописывать искомое наименование иначе все не правильно сработает блять 
    getCookiebyName = (cookieName) => { 
       if(this._cookies.indexOf(cookieName) === -1){ 
           return undefined; 
       }
       const result = this._cookies.slice(this._cookies.indexOf(cookieName)+cookieName.length+1); 
       if (result.indexOf(';') === -1) {
           return result;
       }
        return result.slice(0,result.indexOf(';'));
    }

    //вызывай так же для обновления кукисов, я че тебе сто мильонов функций пилить буду ага нахуй иди
    setCookie = (cookieName, value)=> { 
        this._cookies = `${cookieName}=${value}`
    }

}