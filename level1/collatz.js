function solution(num) {
    let answer = 0;
    for (i = 0; i < 500; i++) {
        if (num !== 1) {
            num % 2 === 0 ? num /= 2 : num = num * 3 + 1;
        } else {
            return i;
        }
    }
    return -1;
}