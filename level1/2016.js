function solution(a, b) {
    var answer = '';
    let day = new Date(2016, a - 1, b);
    const WEEKDAY = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    answer = WEEKDAY[day.getDay()];
    return answer;
}

//////////////////////////////

function getDayName(a, b) {
    var dayList = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
    var monthArr = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var daySum;
    if (a < 2) {
        daySum = b - 1;
    } else {
        daySum = monthArr.slice(0, a - 1).reduce((a, b) => a + b) + b - 1;
    }
    return dayList[daySum % 7];
}

//아래 코드는 테스트를 위한 코드입니다.
console.log(getDayName(5, 24));
console.log(getDayName(1, 19));