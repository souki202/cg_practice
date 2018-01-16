var mousePos = new Pair(0, 0);
var lastMousePos = new Pair(0, 0);
var deltaPos = new Pair(0, 0);

document.addEventListener("mousemove", function (e){
	lastMousePos = mousePos;
	mousePos.first = e.clientX;
	mousePos.second = e.clientY;
	deltaPos.first = mousePos.first - lastMousePos.first;
	deltaPos.second = mousePos.second - lastMousePos.second;
});

var keys = Array();

// キーボードの入力状態を記録する配列
var input_key_buffer = new Array();

// ------------------------------------------------------------
// キーボードを押したときに実行されるイベント
// ------------------------------------------------------------
document.onkeydown = function (e){
	if(!e) e = window.event; // レガシー
	input_key_buffer[e.keyCode] = true;
};

// ------------------------------------------------------------
// キーボードを離したときに実行されるイベント
// ------------------------------------------------------------
document.onkeyup = function (e){
	if(!e) e = window.event; // レガシー
	input_key_buffer[e.keyCode] = false;
};

// ------------------------------------------------------------
// ウィンドウが非アクティブになる瞬間に実行されるイベント
// ------------------------------------------------------------
window.onblur = function (){
	// 配列をクリアする
	input_key_buffer.length = 0;
};

// ------------------------------------------------------------
// キーボードが押されているか調べる関数
// ------------------------------------------------------------
function KeyIsDown(key_code){
	if(input_key_buffer[key_code])	return true;
	return false;
}
