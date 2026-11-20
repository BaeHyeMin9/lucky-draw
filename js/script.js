/* 오늘의 행운 뽑기 — JavaScript */
// HTML 요소 찾기
const page = document.querySelector('#page');
const fortuneCard = document.querySelector('#fortune-Card');
const fortuneEmoji = document.querySelector('#fortune-Emoji');
const fortuneTitle = document.querySelector('#fortune-Title');
const fortuneMessage = document.querySelector('#fortune-Message');
const colorChip = document.querySelector('#color-Chip');
const colorName = document.querySelector('#colorName');
const luckyNumber = document.querySelector('#luckyNumber');
const drawBtn = document.querySelector('#draw-Btn');
const countText = document.querySelector('#countText');
let drawCount = 0;
// 1 ~ max 사이의 정수 반환
function getRandom(max) {
    return Math.floor(Math.random() * max) + 1;
}
function drawFortune() {
    const luck = getRandom(5);
    let emoji;
    let title;
    let message;
    let cardColor;
    let pageColor;
    let lucky;
    let chipColor;
    if (luck === 1) {
        emoji = '🌟';
        title = '대박 행운!';
        message = '오늘은 무엇을 해도 잘 풀리는 날이에요. \n하고 싶었던 일에 도전해 보세요!';
        cardColor = '#fff3b0';
        pageColor = '#fff9db';
        lucky = '노랑';
        chipColor = '#ffd43b';
    } else if (luck === 2) {
        emoji = '🍀';
        title = '좋은 일이 생겨요';
        message = '뜻밖의 반가운 소식이 찾아올 거예요. \n친구에게 먼저 인사해 보세요.';
        cardColor = '#d3f9d8';
        pageColor = '#ebfbee';
        lucky = '초록';
        chipColor = '#51cf66';
    } else if (luck === 3) {
        emoji = '☁️';
        title = '평범하지만 편안한 날';
        message = '큰일은 없지만 마음이 편안한 하루예요. \n좋아하는 음악을 들어 보세요.';
        cardColor = '#d0ebff';
        pageColor = '#e7f5ff';
        lucky = '하늘';
        chipColor = '#74c0fc';
    } else if (luck === 4) {
        emoji = '☔';
        title = '조심조심!';
        message = '서두르면 실수할 수 있어요. \n오늘은 천천히, 두 번 확인하세요.';
        cardColor = '#e5dbff';
        pageColor = '#f3f0ff';
        lucky = '보라';
        chipColor = '#9775fa';
    } else {
        emoji = '🔥';
        title = '열정이 가득한 날';
        message = '에너지가 넘치는 하루예요. \n운동이나 공부에 집중하면 큰 성과가 있어요!';
        cardColor = '#ffd8d8';
        pageColor = '#fff0f0';
        lucky = '빨강';
        chipColor = '#ff6b6b';
    }
    fortuneEmoji.textContent = emoji;
    fortuneTitle.textContent = title;
    fortuneMessage.textContent = message;
    page.style.backgroundColor = pageColor;
    fortuneCard.style.backgroundColor = cardColor;
    colorName.textContent = lucky;
    colorChip.style.backgroundColor = chipColor;
    luckyNumber.textContent = getRandom(45);
    drawCount = drawCount + 1;
    countText.textContent = '지금까지 ' + drawCount + '번 뽑았어요.';
}
drawBtn.addEventListener('click', drawFortune);
