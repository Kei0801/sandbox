var btn = document.getElementById('btn');
var content = document.getElementById('content');

//音声認識APIの使用
var speech = new webkitSpeechRecognition();

//言語を日本語に設定
speech.lang = "ja";

//ボタンクリックで認識開始
btn.addEventListener('click', function() {
  speech.start();
});

//認識されたテキストを使って処理を継続
speech.addEventListener('result', function(e) {
  console.log(e);
  var text = e.results[0][0].transcript;

//  getTextContents(text);
  voicetext.value = text;

　var synthes = new SpeechSynthesisUtterance(text);
  synthes.lang = "ja-JP";
  speechSynthesis.speak( synthes );

});

//テキスト表示

function getTextContents(text) {
  content.innerHTML = '<input type="text" name="SpeechText"  value="' + text + '">';
}

