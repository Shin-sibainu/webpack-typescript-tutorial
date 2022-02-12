import SaySomething from "./saySomething"

//htmlElement型のroot変数を用意してるだけ
const root: HTMLElement | null = document.getElementById("root")

//インスタンス化
const saySomething = new SaySomething("Hello Typescript")
saySomething.sayText(root)


