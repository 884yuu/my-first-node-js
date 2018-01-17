'use strict';
const number = process.argv[2] || 0;
console.log("nodeのパスは：" + process.argv[0]);
console.log("ファイルのパスは：" + process.argv[1]);

if (number >= 0) {
    console.log("0から" + process.argv[2] + "までの合計は↓");
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        sum = sum + i;
    }
    console.log(sum);
} else {
    console.log("自然数を入力してください");
}


