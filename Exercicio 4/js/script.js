//acordions: selecionar todos os headers
var headers = document.querySelectorAll(".accordion header");
for (var i = 0; i < headers.length; i++) {
	headers[i].onclick = abriraccordion;
}

function abriraccordion(){
	var li=this.parentNode;
	if(li.className == "visivel"){
		li.classList.remove("visivel");
	}else{
		li.classList.add("visivel");
	} 

} 
	
//formulários: selecionar todos os formularios

var formularios = document.querySelectorAll(".formMensagem");
for (var i = 0; i < formularios.length; i++) {
	formularios[i].onsubmit = executarformulario;
}

function executarformulario(){

	// function removerErros() {
	// 	inputNome.parentNode.classList.remove("errado");
	// 	textareaMensagem.parentNode.classList.remove("errado");
	// }

	// function adicionarMensagem(){
	// 	var textareaMensagem = document.querySelector("#textareaMensagem");
	// 	var inputNome = document.querySelector("#inputNome");

	// 	if (inputNome.value != "" && textareaMensagem.value !=""){
		
	// 		enviarMensagem();
	// 		removerErros();
		
	// 	}else{
	// 		if(inputNome.value == ""){
	// 			inputNome.parentNode.classList.add("errado");
	// 		}else{
	// 			inputNome.parentNode.classList.remove("errado");
	// 		}

	// 		if(textareaMensagem.value == ""){
	// 			textareaMensagem.parentNode.classList.add("errado");
	// 		}else{
	// 			textareaMensagem.parentNode.classList.remove("errado");
	// 		}
	// 	}

	// 	// cancelar o submit
	// }

	var mensagens = this.parentNode.querySelector(".mensagens");
	var inputNome = this.querySelector(".inputNome");
	var inputMensagem = this.querySelector(".inputMensagem");

	if(inputMensagem.value != "" && inputNome.value != ""){
		var div = document.createElement("div");
		div.classList.add("mensagem");

		div.innerHTML = "<h3>"+inputNome.value+"</h3><p>"+inputMensagem.value+"</p>";

		mensagens.appendChild(div);

		inputMensagem.value = "";
		inputNome.value = "";

		inputNome.parentNode.classList.remove("errado");
		inputMensagem.parentNode.classList.remove("errado");
	}else{
		if(inputNome.value == ""){
			inputNome.parentNode.classList.add("errado");
		}else{
			inputNome.parentNode.classList.remove("errado");
		}

		if(inputMensagem.value == ""){
			inputMensagem.parentNode.classList.add("errado");
		}else{
			inputMensagem.parentNode.classList.remove("errado");
		}
	}




	
	return false;
}