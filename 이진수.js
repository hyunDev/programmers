function solution(n) {
    var answer = 1;
    const value = n.toString(2);
    const max = value.length;
    const count = value.split('1').length - 1;
    let j = count;
    for(let i = max ; i > max - count; i--) {
        answer *= i
    }
    for(let i = count; i > 0 ; i--) {
        answer /= i;
    }
    let biggerCount = 0;
    for (let i = n + 1; i < Math.pow(2, max) ; i++) {
        const _value = i.toString(2);
        const _count = value.split('1').length - 1;
        if (count === _count) {
            answer--;
        }
    } 
    return answer;
}

const data = 9;