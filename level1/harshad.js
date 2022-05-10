function solution(x) {
    let xStr = x.toString();
    let sum = 0;
    for (i = 0; i < xStr.length; i++) {
        sum += parseInt(xStr[i]);
    }
    if (x % sum === 0) {
        return answer = true;
    } else {
        return answer = false;
    }
}