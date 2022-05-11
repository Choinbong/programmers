function solution(n) {
    var answer = [];
    let num = n.toString();
    for (let i = 0; i < num.length; i++) {
        let temp = 0;
        temp = n % 10;
        n = Math.floor(n / 10);

        answer.push(temp);
    }
    return answer;
}