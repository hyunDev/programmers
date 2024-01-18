function solution(friends, gifts) {
    console.log("solution");
    var answer = 0;
    // friend 이름으로 배열을 만든다.
    const giftRecord = new Object();
    const giftSummary = new Object();
    friends.forEach((name, index) => {
        giftRecord[name] = {};
        giftSummary[name] = {};
    })
    // gifts 배열을 돌면서 주고 받은 선물 저장한다.
    gifts.forEach((name, index) => {
        const [give, take] = name.split(" ");
        if(giftRecord[give][take]) {
            giftRecord[give][take]++;
        } else {
            giftRecord[give][take] = 1;
        }
    })
    // friend 이름 별로 준 선물, 받은 선물, 선물 지수 계산된 배열을 만든다.
    friends.forEach((name, index) => {
        let givenGift = 0;
        let takenGift = 0;
        let giftIndex = 0;
        friends.forEach((_name, _index) => {
            givenGift += giftRecord[name][_name];
            takenGift += giftRecord[_name][name];
        })
        giftIndex = givenGift - takenGift;
        giftSummary[name] = {
            givenGift: givenGift,
            takenGift: takenGift,
            giftIndex: giftIndex
        }
    })
    // friend 이름 별로 받을 선물 계산한다.
    return answer;
}

const friends = [];
const gifts = [];

const addButtonEvent = () => {
    const button = document.getElementById('startBtn');
    if (button) {
        button.addEventListener("click", null, solution(friends, gifts));
    }
}

window.addEventListener("load", addButtonEvent);
