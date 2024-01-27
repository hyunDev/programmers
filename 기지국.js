function solution(totalApartments, stationArray, range) {
    stationArray.sort((a, b) => a - b);
    let answer = 0;
    let start = 1;
    
    for (let i = 0; i < stationArray.length; i++) {
        if (start < stationArray[i] - range) {
            let diff = stationArray[i] - range - start;
            answer += Math.ceil(diff / (range * 2 + 1));
        }
        start = stationArray[i] + range + 1;
    }
    
    if (start <= totalApartments) {
        let diff = totalApartments - start + 1;
        answer += Math.ceil(diff / (range * 2 + 1));
    }
    
    return answer;
}

const data1 = 16;
const data2 = [9];
const data3 = 2;