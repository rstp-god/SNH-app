export default class CookieService {
    private _cookies = document.cookie;

    //обязательно при вызове правильно прописывать искомое наименование иначе все не правильно сработает блять
    public getCookiebyName(cookieName: string): string {
        if (this._cookies.indexOf(cookieName) === -1) {
            return '';
        }
        const result = this._cookies.slice(this._cookies.indexOf(cookieName) + cookieName.length + 1);
        if (result.indexOf(';') === -1) {
            return result;
        }
        return result.slice(0, result.indexOf(';'));
    }

    //вызывай так же для обновления кукисов, я че тебе сто мильонов функций пилить буду ага нахуй иди
    public setCookie(cookieName: string, value: string): void {
        this._cookies = `${cookieName}=${value}`
    }

}