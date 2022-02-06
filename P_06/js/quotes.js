const quotes = [
  {
    quote: "자발적으로 행동하지 못하는 무능력이 무력감의 뿌리",
    author: "에리히 프롬",
  },
  {
    quote: "비관은 기분이지만 낙관은 의지다",
    author: "프랑스의 철학자 알랭",
  },
  {
    quote: "이제 우리는 더 이상 모든 사람이 아니다. 그저 충분한 사람이면 된다.",
    author: "세스 고딘",
  },
  {
    quote: "공유하고 나누는 사람의 최종 이익이 커진다.",
    author: "아마구치 슈",
  },
  {
    quote: "완벽하려고 애쓰지 마세요. 모든 것엔 틈이 있답니다. 그 틈으로 빛이 들어오죠",
    author: "레너드 코헨",
  },
  {
    quote: "실험한다는 것은 자신에게 틀릴 수 있는 자유를 준다는 의미다.",
    author: "시어도어 다이먼",
  },
  {
    quote: "지적인 힘이 부족하면 나의 불행을 확대 해석한다. 그래서 공부를 해야한다",
    author: "김미경",
  },
  {
    quote: "인간에게 가장 중요한 능력은 자기 표현력이다",
    author: "피터드러커",
  },
  {
    quote: "설사 모든 사실과 수치, 뒷받침하는 증거, 원하는 지지를 얻더라도 신뢰를 얻지 못하면 성공할 수 없다.",
    author: "니알 피츠제럴드",
  },
  {
    quote: "남에게 친절하라. 당신이 만나는 사람들은 모두 힘겨운 싸움을 하고 있는 중이니까.",
    author: "플라톤",
  },
  {
    quote: "나는 직원들을 만날 때마다 그들의 가슴에 ‘나는 존중받고 싶다.’라고 쓰인 목걸이를 차고 있다고 생각하고, 그들을 대한다",
    author: "메리 케이 애시",
  },
];

const quote = document.querySelector(".quote");
const author = document.querySelector(".author");

let todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerHTML = todayQuote.quote;
author.innerHTML = todayQuote.author;