// //masala 1
// function vaporcode(string) {
//     string = string.split("");
//     for(let i = 0; i < string.length; i++){
//         if(string[i] === " "){
//             string.splice(i, 1);
//             i--;
//         }
//     }
//     let result = "";
//     for(let i = 0; i < string.length-1; i++){
//         string[i] = string[i].toUpperCase();
//         result += string[i] + "  ";
//     }
//     result += string[string.length-1].toUpperCase();
//     return result;
// }

// console.log(vaporcode("hello world"))

// // masala 2
// function points(games) {
//     let score = 0;
    
//     for (let i = 0; i < games.length; i++) {
//         let [x, y] = games[i].split(':').map(Number);
        
//         if (x > y) {
//             score += 3;
//         } else if (x === y) {
//             score += 1;
//         }
//     }
    
//     return score;
// }

// console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]));

// masala 3
const sumAverage = (arr) => {
    let result = 0;
    
    for (let rows of arr) {
        let s = 0;
        for (let i = 0; i < rows.length; i++) {
            s += rows[i];
        }
        s /= rows.length;
        result += s;
    }

    return Math.floor(result);
}

console.log(sumAverage([[-4, 3, -8, -2], [2, 9, 1, -5], [-7, -2, -6, -4]]));

// masala 4
// 4 masalani otkan dars bergan ekanla