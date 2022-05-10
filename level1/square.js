function solution(n) {
    var answer = 0;
    for (i = 0; ; i++) {
        if (n / i === i) {
            return answer = (i + 1) * (i + 1);
        } else if (n < i) {
            return -1;
        }
    }
}