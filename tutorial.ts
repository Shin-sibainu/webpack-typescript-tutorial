// プリミティブ型
const a: number = 3;
// const b: string = a;
const b: number = a;
console.log(b)

// リテラル型
// const a: "foo" = "foo";
// const b: "bar" = a
// const b: string = a
// console.log(b)
// // 推論型
// const a = "foo";
// const b: "bar" = a
// let a = "foo";
// const b: string = a;
// const c: "foo" = a; //エラー

// // 配列型
// let array1: Array<number> = [1,2,3,4]
// let array2: number[] = [1,2,3,4]
// console.log(array1)
// console.log(array2)


// // 連想配列型（Map）
// let renso = new Map<string, number>([
//     ["a", 1],
//     ["b", 2],
//     ["c", 3],
//     ["d", 4],
// ])
// console.log(renso)

// // 名前付き関数のデータ型を定義
// function getName(id:number, name:string): string {
//     return `${id}は${name}です。`
// }

// console.log(getName(1, "tarou"))
