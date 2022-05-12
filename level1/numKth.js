function solution(array, commands) {        //// 내 답안
    var answer = [];

    for (let i = 0; i < commands.length; i++) {
        let com = [];
        let arr1 = [];
        let arr2 = [];
        let answerNum = 0;

        com = commands[i];
        if (array.length === com[1]) {
            arr1 = array.slice(com[0] - 1);
        } else {
            arr1 = array.slice(com[0] - 1, -(array.length - com[1]));
        }
        arr2 = arr1.sort(function (x, y) {
            return x - y;
        });
        answerNum = arr2[com[2] - 1];
        answer.push(answerNum);
    }

    return answer;
}


//////////// 타인 답안

function solution(array, commands) {
    var result = new Array();
    for (var a in commands) {
        result.push(array.slice(commands[a][0] - 1, commands[a][1]).sort((x, y) => x - y)[commands[a][2] - 1]);
    }
    return result;
}


/////////////

function solution(array, commands) {
    let answer = [];

    for (let command of commands) {
        let slicing = array.slice(command[0]-1,command[1]);
        slicing.sort((a,b)=> a-b)
        answer.push(slicing[command[2]-1])
    }
    return answer;
}
