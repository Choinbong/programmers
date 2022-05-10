function solution(n) {
    let arr = [];
    let answerArr = [];
    let answer = 0;
    arr = n.toString().split("").map(Number);

    answerArr = arr.sort(function (x, y) {
        return y - x;
    })
    return answer = +answerArr.join("");
}