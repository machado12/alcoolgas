var ethanol, gasoline;

function calculate (){
	ethanol = parseFloat(frmFlex.txtEthanol.value.replace(",","."));
	gasoline = parseFloat(frmFlex.txtGasoline.value.replace(",","."));
	if (ethanol < 0.7 * gasoline){
		document.getElementById("status").src="images/etanol.png";
	}else{
		document.getElementById("status").src="images/gasolina.png";
	}
}

function toreset(){
	document.getElementById("status").src="images/neutro.png";
}