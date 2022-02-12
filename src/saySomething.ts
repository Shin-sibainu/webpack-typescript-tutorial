export default class SaySomething {
    //クラスで使うプロパティ
    message: string;

    //初期化
    constructor(message: string) {
        this.message = message
    }

    //外部から呼び出せるメソッドを定義
    public sayText(elem: HTMLElement | null) {
        if(elem) {
            elem.innerText = this.message
        }
    }
}
