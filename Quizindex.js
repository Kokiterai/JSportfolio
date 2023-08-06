const quiz = [
    {
        question: '日本にある島の中で一番人口が多い島はどれ？',
        ansers: [
            '初島',
            '石垣島',
            '淡路島',
            '佐渡島'
        ],
        correct: '淡路島',
    },{
        question: '兵庫県にある世界遺産に登録されたお城はどれ？',
        ansers: [
            '姫路城',
            '竹田城',
            '城山城',
            '明石城'
        ],
        correct: '姫路城'

    },{
        question: '「金泉」と「銀泉」で有名な神戸にある温泉はどれ？',
        ansers: [
            '城崎温泉',
            '有馬温泉',
            '赤穂温泉',
            '浜坂温泉'
        ],
        correct: '有馬温泉'

    }
];
const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;
//定数の文字列をHTMLに反映させる
const setupQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].ansers[buttonIndex];
    buttonIndex++;
    }
}
setupQuiz();

//以下は何度も使用するので、定数でまとめちゃう

const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent){
        window.alert('正解！');
        score++;
    } else{
        window.alert('不正解...');
    }

    quizIndex++;

    if(quizIndex < quizLength){
        //問題数がまだあればこちらを実行
        setupQuiz();
    } else {
        //問題数がなければこちらを実行
        window.alert('終了です！お疲れ様でした！あなたの正解数は' + score + '/' +quizLength + 'です！');
    }
};

//ボタンをクリックしたら正誤判定

let handlerIndex = 0;
while (handlerIndex < buttonLength) {
    $button[handlerIndex].addEventListener('click',(e) => {
        clickHandler(e);
    });
    handlerIndex++;
}