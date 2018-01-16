function colorText(r, g, b, a){
	if(a == undefined){
		return 'rgb(' + r + ', ' + g + ', ' + b + ')';
	}
	return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + a + ')';
}

function whiteText(){
	return 'rgba(255, 255, 255, 1)';
}

function strokeRect(x, y, width, height, color){
	ctx.fillStyle = color;
	ctx.strokeRect(x, y, width, height);
	ctx.fillStyle = whiteText();
}

function fillRect(x, y, width, height, color){
	ctx.fillStyle = color;
	ctx.fillRect(x, y, width, height);
	ctx.fillStyle = whiteText();
}