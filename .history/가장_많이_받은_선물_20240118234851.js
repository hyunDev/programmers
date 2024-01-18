function solution(friends, gifts) {
    console.log("solution");
    var answer = 0;
    // friend 이름으로 배열을 만든다.
    const giftRecord = new Object();
    const giftSummary = new Object();
    friends.forEach((name, index) => {
        giftRecord[name] = {};
        giftSummary[name] = {
            givenGift: 0,
            takenGift: 0,
            giftIndex: 0,
            nextGift: 0
        };
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
        friends.forEach((_name, _index) => {
            const given = giftRecord[name][_name];
            const taken = giftRecord[_name][name];  
            giftSummary[name].givenGift += given ? given : 0;
            giftSummary[name].takenGift += taken ? taken : 0;
            if (given > taken) {
                giftSummary[name].nextGift++;
            }
            if (given === taken) {
                giftSummary[name][_name] = 0;
            }
        })
        giftSummary[name].giftIndex = giftSummary[name].givenGift - giftSummary[name].takenGift;
    })
    // friend 이름 별로 받을 선물 계산한다.
    giftSummary.forEach((name, index) => {
        const keys = Object.keys(giftSummary[name]);
        const originKeys = [
            "givenGift",
            "takenGift",
            "giftIndex",
            "nextGift"
        ];
        keys.forEach((key, index) => {
            if(!originKeys.includes(key)) {
                if (calc(name, key)) {
                    giftSummary[name].nextGift++;
                }
            }
        })
    })

    const calc = (name, key) => {
        if (giftSummary[name].giftIndex > giftSummary[key].giftIndex) {
            return true;
        } else {
            return false;
        }
    }
    return answer;
}

const friends = ["muzi", "ryan", "frodo", "neo"];
const gifts = ["muzi frodo", "muzi frodo", "ryan muzi", "ryan muzi", "ryan muzi", "frodo muzi", "frodo ryan", "neo muzi"];

const addButtonEvent = () => {
    const button = document.getElementById('startBtn');
    if (button) {
        button.addEventListener("click", () => solution(friends, gifts));
    }
}

window.addEventListener("load", addButtonEvent);
