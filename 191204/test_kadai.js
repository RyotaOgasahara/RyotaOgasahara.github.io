console.log("m0118052_kadai.jsの読み込み");

let answer = document.querySelector("#answer");
let answerHTML;
answerHTML = "<ul>"
let i = 0;
while (i < tweets.length) {
  answerHTML = answerHTML
      + "<li class='tweet'>"
      + "<img src = " + tweets[i].avatar + " alt = " + tweets[i].name + " class = 'icon'>"
      + "<b>" + tweets[i].name + "</b> "
      + tweets[i].message
      + " <i>" + tweets[i].tweetedAt + "</i>"
      + "</li>";
  i++;
}


function userSelectAll() {
  console.log("Allが押された");
  i = 0;
  answerHTML = answerHTML + "</ul>";
  answer.innerHTML = answerHTML;
}

function userSelectSaburou() {
  console.log("三郎BOTが押された");
  i = 1;
  answerHTML = answerHTML + "</ul>";
  answer.innerHTML = answerHTML;
}

function userSelectJirou() {
  console.log("次郎が押された");
  i = 2;
  answerHTML = answerHTML + "</ul>";
  answer.innerHTML = answerHTML;
}

function userSelectTarou() {
  console.log("太郎が押された");
  i = 3;
  answerHTML = answerHTML + "</ul>";
  answer.innerHTML = answerHTML;
}