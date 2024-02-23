let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

updateScoreElement();

function compMoves()
{
const randNum=Math.random();
let compMove='';
if(randNum>=0&&randNum<1/3)
{
    compMove='Rock';
}
else if(randNum>1/3&&randNum<2/3)
{
    compMove='Paper';
}
else
{
    compMove='Scissors';
}
return compMove;
}
function play(move)
{
let result='';
let compMove=compMoves();
if(move=="Rock")
{
    if(compMove=='Rock')
    {
        result='Tie';
    }
    else if(compMove=='Paper')
    {
        result='You Lose';
    }
    else
    {
        result='You Win';
    }
}
else if(move=="Scissors")
{
    if(compMove=='Rock')
    {
        result='You Lose';
    }
    else if(compMove=='Paper')
    {
        result='You Win';
    }
    else
    {
        result='Tie';
    }
}
else
{
    if(compMove=='Rock')
    {
        result='You Win';
    }
    else if(compMove=='Paper')
    {
        result='Tie';
    }
    else
    {
        result='You Lose';
    }
}
if(result=='You Win')
{
    score.wins+=1;
}
else if(result=='You Lose')
{
    score.losses+=1;
}
else
{
    score.ties+=1;
}

localStorage.setItem('score', JSON.stringify(score));

updateScoreElement();

document.querySelector('.js-result').innerHTML=result;

document.querySelector('.js-moves').innerHTML=`You
<img src="${move}-emoji.png" class="result-icon">
<img src="${compMove}-emoji.png" class="result-icon">
Computer`;

}
function updateScoreElement()
{
document.querySelector('.js-score').innerHTML=`Wins: ${score.wins}, Losses: ${score.losses},  Ties: ${score.ties}`;
}