import World from "./world"

//htmlElement型のroot変数を用意してるだけ
const root: HTMLElement | null = document.getElementById("root")

//インスタンス化
const world = new World("Hello Typescript")
world.sayText(root)


