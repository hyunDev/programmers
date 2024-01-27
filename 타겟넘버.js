function solution(numbers, target) {
    var answer = 0;
    
    const checkTargetNumber = (numbers, target, curNum) => {
        if (numbers.length === 0) {
            if (curNum === target) {
                answer++;
            }
            return;
        }
        
        checkTargetNumber(numbers.slice(1), target, curNum + numbers[0]);
        checkTargetNumber(numbers.slice(1), target, curNum - numbers[0]);
    }

    checkTargetNumber(numbers, target, 0);
    return answer;
}

const data1 = [1, 1, 1, 1, 1];
const data2 = 3;



