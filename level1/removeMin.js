let j = 0;

function solution(arr) {
    if (arr.length === 1) {
        arr = arr.splice(1);
        arr.push(-1);
        return arr;
    } else {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < arr[j]) {
                j = i;
            }
        }
    }
    arr.splice(j, 1);
    return arr;
}

//////////////////////////


function solution(arr) {
    if (arr.length === 1) {
        arr = arr.splice(1);
        arr.push(-1);
        return arr;
    } else {
        arr.splice(arr.indexOf(Math.min(...arr)), 1);
        return arr;
    }
}