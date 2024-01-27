function solution(grade) {
    const gradeInfo = [...grade].map((point, index) => ({
        point: point,
        index: index
    })).sort((a, b) => b.point - a.point || a.index - b.index);

    let curRank = 1;
    let sameRankCount = 0;

    answer = [];

    gradeInfo.forEach((obj, index) => {
        // 동점자가 아니면
        if (index > 0 && gradeInfo[index].point < gradeInfo[index - 1].point) {
            curRank += sameRankCount;
            sameRankCount = 0;
        }
        answer[obj.index] = curRank;
        sameRankCount++;
    })
    return answer;
}

const data = [30, 20, 30, 10, 100, 50, 60, 70, 50, 30, 20];