function solution(cookie) {
    var answer = 0;
    let first = 0;
    let second = 0;

    for(let i = cookie.length - 1; i >= 0 ; i--) {
        second = cookie[i];
        let start = i - 1;
        for (let j = start; j >= 0 ; j--) {
            first += cookie[j];
            if (second === first) {
                answer = second;
                break;
            }
            else if(first > second) {
                first = 0;
                start--;
                j = start;
            }
        }
        if (second == first) {
            break;
        }
    }
    return answer;
}

const data1 = [1,2,4,5];