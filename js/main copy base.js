//variáveis de controle do framework
var story;
var cont = 0;
var instrucoes = false;
var creditos = false;
var master = false;

//variáveis de controle da história
microchip = false;

//função que define o conteúdo textual da narrativa
function getStory() {
	return {

		currentScene: "intro",
		intro: {
			title: "Introdução",
			image: "img/thomas_estudando.webp",
			story: "<h3>...</h3>",
			choices: [
				{
					choice: "Conversar com a tripulação",
					destination: 'conversarTripulacao'
				}
			]
		},

		conversarTripulacao: {
			title: "Conversar com a Tripulação",
			image: "img/aula.webp",
			story: "<h3>...</h3>",
			choices: [
				{
					choice: "Assistir Catantevê",
					destination: 'assistirCatanteve'
				},
				{
					choice: "Pesquisar sobre Catantevê",
					destination: 'pesquisarInformacoes'
				}
			]
		},

		continuarCatanteve: {
			title: "Continuar Assistindo Catantevê",
			image: "img/thomas_e_irmao_vendo_tv.webp",
			story: "<h3>...</h3>",
			choices: [
				{
					choice: "Rolar Dados",
					destination: 'rolarDados01'
				}
			]
		},

		rolarDados01: {
			title: "",
			story: "",
			choices: [
				{
					choice: "",
					destination: ""
				}
			]
		},

		sucessoRolar01: {
			title: "Sucesso no Teste de Vontade",
			image: "img/familia_vendo_tv.webp",
			story: "<h3>...</h3>",
			choices: [
				{
					choice: "Rolar Dados",
					destination: 'rolarDados02'
				}
			]
		},

		falhaRolar01: {
			title: "Falha no Teste de Vontade",
			image: "img/familia_atonita.webp",
			story: "<h3>...</h3>",
			choices: [
				{
					choice: "Continuar",
					destination: 'dominarMente'
				}
			]
		},

		dominarMente: {
			title: "Ter a Mente Dominada",
			image: "img/vida_dura.webp",
			story: "<h3>...</h3>",
			choices: [
				{
					choice: "Começar Novamente",
					destination: "intro"
				}
			]
		},

		rolarDados02: {
			title: "",
			story: "",
			choices: [
				{
					choice: "",
					destination: ""
				}
			]
		},

		sucessoRolar02: {
			title: "Sucesso no Teste de Vontade",
			image: "img/familia_vendo_tv.webp",
			story: "<h3>...</h3>",
			choices: [
				{
					choice: "Continuar Assistindo TV",
					destination: 'falhaRolar01'
				},
				{
					choice: "Conversar com o Pai",
					destination: 'conversarPai'
				}
			]
		},

		

		irFinal: {
			title: "Ir pro Final",
			image: "img/suv02.webp",
			story: "<h3>Se divertiu com a história?</h3><h3>Sentiu o gostinho do que é um jogo de representação?</h3><h3 align = 'justify'>Ficou com gosto de 'quero mais' ?</h3 ><h3>Pois essa história sobre a hipnose televisiva coletiva da Catantevê pode continuar. Mas nessa continuação, o mestre-de-jogo será você!</h3><h3>Leia o <a href='https://operarpg.com.br' class='classe1' target='blank'>OPERA RPG</a>, e você encontrará várias dicas para você ser o mestre-de-jogo!</h3>",
			choices: [
				{
					choice: "Começar Novamente",
					destination: 'intro'
				}
			]
		},


		instrucoes: {
			title: "Instruções",
			story: "<h3><center>Recomendação Etária: Livre</center></h3><h3>Para jogar uma aventura-solo, basta ler o texto apresentado, e no final, clicar sobre a decisão escolhida. Como exemplo, temos 2 opções:</h3><h3>- A primeira delas é a opção de 'Começar a Aventura', onde você irá ler o trecho introdutório do texto, identificando o personagem que você irá interpretar;</h3><h3>- A segunda opção é a de retornar a 'Tela Inicial' do jogo.</h3><h3>No caso dessa aventura-solo, é utilizado o sistema de regras <a href='https://operarpg.com.br' class='classe1' target='blank'>OPERA RPG</a>; caso queira ler um resumos das regras, consulte o <a href='https://operarpg.com.br/opereta/' class='classe1' target='blank'>OPEReta</a>.</h3><h3>Existe um botão flutuante no canto inferior da tela. Ele permite ver a ficha de personagem na mesma ou em outra janela.</h3><h3>Existe mais de um final possível deste jogo, por isso você poder jogar novamente escolhendo opções diferentes das anteriormente escolhidas.</h3><h3>Após as opções de escolha narrativa, existe o controle (de 4 botões) de uma trilha sonora; recomendamaos escutá-la, caso seja possível.</h3>",
			choices: [
				{
					choice: "Começar a Aventura!",
					destination: "intro"
				},
				{
					choice: "Tela Inicial",
					destination: "inicio"
				}
			]
		},

		inicio: {
			title: "Inicio",
			story: "<h3></h3>",
			choices: [
				{
					choice: ".",
					destination: "inicio"
				}
			]
		},

		creditos: {
			title: "Créditos",
			story: "<h2 align='center'>Créditos</h2><h3>Esta é aventura-solo é parte do <a href='https://operarpg.com.br/product/opera-rpg-modulo-basico/' target='blank' class='classe1'>OPERA RPG 1ª Edição</a></center></p><p><b>ISBN:</b> 85-89161-05-6</p><p><b>Programação:</b> Leonardo Antônio de Andrade</p><p><b>Autores:</b></p><p>&nbsp;&nbsp;Leonardo Antônio de Andrade</p><p>&nbsp;&nbsp;Rogério de Mello Godoy</p><p><b>Ilustrações: </b>Marcelo Braga</p><p><b>Trilha Sonora: </b></p>&nbsp;&nbsp;<a href='jamendo.com/track/1839683/conspiracy-theorist' target='blank' class='classe1'>Trecho da Faixa Conspiracy Theorist, de Nick Gordy</a></h3>",
			choices: [
				{
					choice: "Começar a Aventura!",
					destination: "intro"
				},
				{
					choice: "Tela Inicial",
					destination: "inicio"
				}
			]
		}

	}
}

//Programação dos Botões e Seleção das Opções Inciais (Iniciar a aventura, Nova janela com site, Instruções e Créditos)
document.addEventListener('DOMContentLoaded', function () {
	var button0 = document.querySelector('#button0');
	var button1 = document.querySelector('#button1');
	var button2 = document.querySelector('#button2');
	var button3 = document.querySelector('#button3');
	var content = document.querySelector('#content');

	//Iniciar a Aventura
	button0.addEventListener('click', function () {
		story = getStory();
		renderScene();
	})

	//Nova Janela com Site
	button1.addEventListener('click', function () {
		if (cont == 0) {
			window.open("https://operarpg.com.br", '_blank');
		}
		else {
			story = getStory();
			renderScene();
		}
	})

	//Instuções
	button2.addEventListener('click', function () {
		if (cont == 0) {
			instrucoes = true;
		}
		story = getStory();
		renderScene();
	})

	//Créditos
	button3.addEventListener('click', function () {
		if (cont == 0) {
			creditos = true;
		}
		story = getStory();
		renderScene();
	})
})


//Programação para Atualização do códigu HTML, Controle de Aletoriedade e de Itens
function renderScene() {
	//verificacao de cenas
	var image = "";
	var titulo = "";

	if (instrucoes) {
		story.currentScene = "instrucoes";
		master = true;
		instrucoes = false;
	}

	if (creditos) {
		story.currentScene = "creditos";
		master = true;
		creditos = false;
	}

	//Renderização de Imagem
	if (!story[story.currentScene].image) {
		image = "<img></img>";
	}

	//Redenrização de Título
	if (story[story.currentScene].title == "Introdução") {
		titulo = story[story.currentScene].title;
	}

	//Variáveis de Aletoriedade
	dado1 = Math.floor(Math.random() * 6 + 1);
	dado2 = Math.floor(Math.random() * 6 + 1);
	dados = dado1 + dado2;

	//Controle de Aletoriedade
	switch (story.currentScene) {
		case ('rolarDados01'):
			if (dados <= 8) {
				story.currentScene = 'sucessoRolar01';
				swal('Valores obtidos: ' + dado1 + ' + ' + dado2 + ' = ' + dados + ' <= 8 (Sucesso)');
			}
			else {
				story.currentScene = 'falhaRolar01';
				swal('Valores obtidos: ' + dado1 + ' + ' + dado2 + ' = ' + dados + ' > 8 (Falha)');
			}
			break;
		case ('rolarDados02'):
			if (dados <= 8) {
				story.currentScene = 'sucessoRolar02';
				swal('Valores obtidos: ' + dado1 + ' + ' + dado2 + ' = ' + dados + ' <= 8 (Sucesso)');
			}
			else {
				story.currentScene = 'dominarMente';
				swal('Valores obtidos: ' + dado1 + ' + ' + dado2 + ' = ' + dados + ' > 8 (Falha)');
			}
			break;
		case ('rolarDados03'):
			if (dados <= 8) {
				story.currentScene = 'continuarEstudando';
				swal('Valores obtidos: ' + dado1 + ' + ' + dado2 + ' = ' + dados + ' <=8 (Sucesso)');
			}
			else {
				story.currentScene = 'assistirTelevisao';
				swal('Valores obtidos: ' + dado1 + ' + ' + dado2 + ' = ' + dados + ' > 8 (Falha)');
			}
			break;
		case ('rolarDados04'):
			if (dados <= 6) {
				story.currentScene = 'sucessoRolar04';
				swal('Valores obtidos: ' + dado1 + ' + ' + dado2 + ' = ' + dados + ' <= 6 (Sucesso)');
			}
			else {
				story.currentScene = 'falhaRolar04';
				swal('Valores obtidos: ' + dado1 + ' + ' + dado2 + ' = ' + dados + ' > 6 (Falha)');
			}
			break;
		case ('rolarDados05'):
			if (dados <= 6) {
				story.currentScene = 'sucessoRolar05';
				swal('Valores obtidos: ' + dado1 + ' + ' + dado2 + ' = ' + dados + ' <= 6 (Sucesso)');
			}
			else {
				story.currentScene = 'falhaRolar04';
				swal('Valores obtidos: ' + dado1 + ' + ' + dado2 + ' = ' + dados + ' > 6 (Falha)');
			}
			break;
		case ('rolarDados06'):
			if (dados <= 6) {
				story.currentScene = 'sucessoRolar06';
				swal('Valores obtidos: ' + dado1 + ' + ' + dado2 + ' = ' + dados + ' <= 6 (Sucesso)');
			}
			else {
				if (dados == 12) {
					story.currentScene = 'falhacriticaRolar06';
					swal('Valores obtidos: ' + dado1 + ' + ' + dado2 + ' = ' + dados + ' = 12 (Falha Crítica)');
				}
				else {
					story.currentScene = 'falhaRolar06';
					swal('Valores obtidos: ' + dado1 + ' + ' + dado2 + ' = ' + dados + ' > 6 (Falha)');
				}
			}
			break;
		case ('rolarDados07'):
			if (dados == 12) {
				story.currentScene = 'sucessoRolar07';
				swal('Valores obtidos: ' + dado1 + ' + ' + dado2 + ' = ' + dados + ' = 12 (Sucesso Crítico)');
			}
			else {
				story.currentScene = 'falhaRolar07';
				swal('Valores obtidos: ' + dado1 + ' + ' + dado2 + ' = ' + dados + ' < 12 (Falha)');
			}
			break;
		case ('rolarDados08'):
			if ((dados + 6) >= 12) {
				story.currentScene = 'sucessoRolar08';
				swal('Valores obtidos: ' + dado1 + ' + ' + dado2 + ' + 6 = ' + (dados + 6) + ' >= 12 (Sucesso)');
			}
			else {
				story.currentScene = 'falhaRolar08';
				swal('Valores obtidos: ' + dado1 + ' + ' + dado2 + ' + 6 = ' + (dados + 6) + ' < 12 (Falha)');
			}
			break;
		case ('rolarDados09'):
			if (dados <= 7) {
				story.currentScene = 'sucessoRolar09';
				swal('Valores obtidos: ' + dado1 + ' + ' + dado2 + ' = ' + dados + ' <= 7 (Sucesso)');
			}
			else {
				story.currentScene = 'falhaRolar09';
				swal('Valores obtidos: ' + dado1 + ' + ' + dado2 + ' = ' + dados + ' > 7 (Falha)');
			}
			break;
		case ('rolarDados10'):
			if (dados <= 8) {
				story.currentScene = 'sucessoRolar10';
				swal('Valores obtidos: ' + dado1 + ' + ' + dado2 + ' = ' + dados + ' <= 8 (Sucesso)');
			}
			else {
				story.currentScene = 'falhaRolar10';
				swal('Valores obtidos: ' + dado1 + ' + ' + dado2 + ' = ' + dados + ' > 8 (Falha)');
			}
			break;
		case ('pegarMicrochip'):
			microchip = true;
			story.currentScene = 'correrFundos';
			break;
		case ('testeMicrochip'):
			if (microchip)
				story.currentScene = 'terMicrochip';
			else
				story.currentScene = 'naoterMicrochip';
			break;
		case ('intro'):
			microchip = false;
			break;
	}

	//Renderização do texto
	document.getElementById("content").innerHTML = `
	<center><h1>${titulo}</h1></center>
	<p>${story[story.currentScene].story}</p>
	${image}
	${getInputs()}
	`
	if (story[story.currentScene].image) {
		document.querySelector("img").src = `${story[story.currentScene].image}`
	}
	var button0 = document.querySelector("#button0");
	var button1 = document.querySelector("#button1");
	var button2 = document.querySelector("#button2");
	var button3 = document.querySelector("#button3");

	//Programação dos botões
	button0.addEventListener('click', function () {
		cont++;
		getInputValue(0);
	})

	if (button1 != null) {
		button1.addEventListener('click', function () {
			cont++;
			if (cont == 1 && master) {
				master = false;
				window.location.href = 'index.html';
			}
			getInputValue(1);
		})
	}
	if (button2 != null) {
		button2.addEventListener('click', function () {
			cont++;
			getInputValue(2);
		})
	}
	if (button3 != null) {
		button3.addEventListener('click', function () {
			cont++;
			getInputValue(3);
		})
	}
}

//Função de Seleção de Destino
function getInputValue(x) {
	var inputs = document.querySelectorAll('input[type="button"]');
	story.currentScene = inputs[x].getAttribute('data-destination');
	renderScene();
	return;

}

//Função de Captura da Seleção
function getInputs() {
	var input = ""
	if (!story[story.currentScene].choices) {
		return ""
	}
	for (var i = 0; i < story[story.currentScene].choices.length; i++) {
		input += `
		<div>
			<center><input type="button" id="button${i}" data-destination=${story[story.currentScene].choices[i].destination} name="choices" class="button button${i}" value="${story[story.currentScene].choices[i].choice}"></center>
		</div>`
	}
	return input;
}
