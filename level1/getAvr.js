let sum = 0;
let avr = 0;

function solution(arr) {
    for (i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    avr = sum / arr.length;

    return avr;
}