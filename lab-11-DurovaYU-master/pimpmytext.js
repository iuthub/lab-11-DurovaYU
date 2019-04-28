
function pimp(){
	document.getElementById('ptext').style.fontSize="24pt";

	if(func()){
	document.getElementById('ptext').style.fontWeight="bold";
	document.getElementById('ptext').style.fontStyle="italic";
	document.getElementById('ptext').style.textDecoration="underline";
	document.getElementById('ptext').style.color="green";
	document.getElementById('ptext').style.textDecoration="blink";
	document.getElementById('ptext').style.textShadow="2px 2px grey";
	document.getElementById('ptext').style.textTransform="uppercase";
	}
}
function func(){
	if(document.getElementById('btext').checked){
		return true;
	}
}
function snoop(){
	document.getElementById('ptext').style.textTransform="uppercase";
	var str=document.getElementById('ptext').value;
	var parts=str.split(".");
	str=parts.join("-zzle.");
document.getElementById('ptext').value=str;
}