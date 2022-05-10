function solution(a, b) {
    if (a === b) {
        return a;
    } else {
        return a < b ? sum(a, b) : sum(b, a);
    }
}

function sum(a, b) {
    let answer = 0;
    for (; a <= b; a++) {
        answer += a;
    }
    return answer;
}