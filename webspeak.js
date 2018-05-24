var btn = document.getElementById('btn');

//音声認識APIの使用
var speech = new webkitSpeechRecognition();

//言語を日本語に設定
speech.lang = "ja";

//ボタンクリックで認識開始
btn.addEventListener('click', function() {
//  alert(voicetext.value);
  var text = voicetext.value
　var synthes = new SpeechSynthesisUtterance(text);
  synthes.lang = "ja-JP";
  speechSynthesis.speak( synthes );

});



