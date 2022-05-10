let nSum = 0;

function solution(n) {
    const nStr = n.toString();
    for (i = 0; i < nStr.length; i++) {
        nSum += parseInt(nStr[i]);
    }
    return nSum;
}