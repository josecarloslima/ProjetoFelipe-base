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
			story: "<h3>Lucidia, um reino outrora prospero e avançado, caiu em uma era glacial cruel, os reinos que restaram sucumbiram à barbárie e ao conflito para sobreviverem.</h3><h3>Por muitos anos a esperança havia desaparecido até que um dia um mapa antigo chegou as suas mãos, contendo a localização de um antigo templo em uma ilha, dedicado ao espirito do verão.</h3><h3>Os oráculos dizem que neste local reside a semente da esperança que pode trazer as estações de volta para o mundo e como um bom Artista você não conteve a sua curiosidade e decidiu averiguar, apesar dos riscos.</h3><h3>Você juntou seus recursos e contratou um grupo de piratas para te levarem até o seu destino, eles ficaram felizes de te ajudar, ainda mais sabendo que teriam a oportunidade de encontrar tesouros para saquear, em um templo antigo que parece tão importante.</h3><h3>A viagem é um tanto longa e correu sem nenhum perigo até o momento, oque torna as coisas um tanto tediosas, você decide aproveitar seu tempo para:</h3>",
			choices: [
				{
					choice: "Conversar com a tripulação",
					destination: 'conversarTripulacao'
				},
				{
					choice: "Analisar os mapas",
					destination: 'analisarMapas'
				},
				{
					choice: "Conferir os equipamentos",
					destination: 'conferirEquipamentos'
				},
				{
					choice: "Praticar",
					destination: 'praticar'
				}
			]
		},

		conversarTripulacao: {
			title: "Conversar com a Tripulação",
			image: "img/aula.webp",
			story: "<h3>Com a conversa você soube que os piratas são o povo humano dominante do Reino de Soleriam, quando o grande inverno veio eles sobreviveram criando comunidades seminômades de navegadores que se mudavam, pilhando cidades, e em busca de lugares mais quentes.</h3><h3>Esses navegadores também trabalham como comerciantes ou mercenários quando não estão na pirataria e foi assim que você conseguiu contratar o trabalho deles.</h3>",
			choices: [
				{
					choice: "Seguir Viagem",
					destination: 'seguirViagem'
				},
				{
					choice: "Analisar os mapas",
					destination: 'analisarMapas'
				},
				{
					choice: "Conferir os equipamentos",
					destination: 'conferirEquipamentos'
				},
				{
					choice: "Praticar",
					destination: 'praticar'
				}
			]
		},

		analisarMapas: {
			title: "Analisar os mapas",
			image: "img/thomas_e_irmao_vendo_tv.webp",
			story: "<h3>As estações são muito importantes em Lucidia e afetam tudo até mesmo a geografia local, as regiões conhecidas do mundo estão divididas em quatro grandes áreas, que eram os antigos Reinos antes do grande inverno, cada uma dessas regiões tem seu território influenciado por uma das estações, mesmo assim todas experimentavam o ciclo completo quando as estações climáticas funcionavam naturalmente.</h3>",
			choices: [
				{
					choice: "Seguir Viagem",
					destination: 'seguirViagem'
				},
				{
					choice: "Conversar com a tripulação",
					destination: 'conversarTripulacao'
				},
				{
					choice: "Conferir os equipamentos",
					destination: 'conferirEquipamentos'
				},
				{
					choice: "Praticar",
					destination: 'praticar'
				}
			]
		},

		conferirEquipamentos: {
			title: "Conferir os equipamentos",
			image: "img/thomas_e_irmao_vendo_tv.webp",
			story: "<h3>Conferindo seus equipamentos você admira a engenhosidade dos designers antigos que fizeram os projetos das armas que são usadas atualmente.</h3><h3>Como a arte tem características magicas em Lucidia ou traço de um pincel potencializado com magia pode ser mais forte que o corte de uma lâmina, por isso as armas mais comuns são pinceis gigantes que são usados como bastões de longos e bicos de pena que são usados como espadas ou adagas.</h3>",
			choices: [
				{
					choice: "Seguir Viagem",
					destination: 'seguirViagem'
				},
				{
					choice: "Conversar com a tripulação",
					destination: 'conversarTripulacao'
				},
				{
					choice: "Analisar os mapas",
					destination: 'analisarMapas'
				},
				{
					choice: "Praticar",
					destination: 'praticar'
				}
			]
		},

		praticar: {
			title: "Praticar",
			image: "img/clinica.webp",
			story: "<h3>Você é um Explorador uma classe artística que adquiri habilidades especiais através do desenho de mapas.</h3><h3>Você está sempre viajando e treinando em todo tipo de terreno inóspito e por isso sabe sobreviver e se orientar em qualquer local.</h3><h3>Através dos seus desenhos você entende o terreno como ninguém, se movendo duas vezes mais rápido que outras pessoas e tendo uma facilidade sobrenatural para nadar, correr escalar, e até se esconder. </h3>",
			choices: [
				{
					choice: "Seguir Viagem",
					destination: 'seguirViagem'
				},
				{
					choice: "Conversar com a tripulação",
					destination: 'conversarTripulacao'
				},
				{
					choice: "Analisar os mapas",
					destination: 'analisarMapas'
				},
				{
					choice: "Conferir os equipamentos",
					destination: 'conferirEquipamentos'
				}
			]
		},

		seguirViagem: {
			title: "Seguir Viagem",
			image: "img/thomas_pesquisando.webp",
			story: "<h3>Continuamos navegando e um dia sob o céu nublado e sombrio, as águas revoltas do oceano se agitavam com uma inquietação que anunciava o terror iminente.</h3><h3>Primeiro, uma escuridão obscura começou a espalhar-se sob as águas, como se o próprio oceano estivesse sangrando tinta negra.</h3><h3>A substância lentamente subiu à superfície, criando uma neblina sinistra que obscureceu o horizonte, escondendo qualquer vislumbre do sol palido.</h3><h3>À medida que a neblina se espalhava, uma tensão crescente tomou conta da tripulação.</3><h3>Eles sabiam que a chegada daquela névoa negra anunciava a chegada do Kraken, um monstro que aterrorizara marinheiros há séculos.</h3><h3>Do centro da névoa negra, os tentáculos do Kraken começaram a emergir, cobertos por aquela substância viscosa que se assemelhava ao petróleo.</h3><h3>Eram gigantescos e sinuosos, serpenteando como serpentes gigantes em direção ao navio indefeso.</h3><h3>A tripulação observava horrorizada enquanto os tentáculos se erguiam do mar, criando ondas turbulentas que ameaçavam engolir a embarcação.</h3><h3>	O Kraken envolveu o navio com seus tentáculos viscosos e começou a aplicar uma pressão esmagadora.</h3><h3>O casco de madeira gemeu e rangeu sob a força do monstro.</h3><h3>Enquanto o ataque continua você descide:</h3>",
			choices: [
				{
					choice: "Atacar a criatura",
					destination: 'rolarDados01'
				},
				{
					choice: "Investigar a criatura",
					destination: 'investigaCriatura'
				},
				{
					choice: "Salvar os mantimentos",
					destination: 'salvaMantimentos'
				},
				{
					choice: "Recuperar o mapa que está na cabine do capitão",
					destination: 'recuperaMapa'
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
			title: "Sucesso no ataque!",
			image: "img/familia_vendo_tv.webp",
			story: "<h3>Você pega suas armas e com um movimento preciso do seu pincel de combate faz um risco, e um dos tentáculos é partido ao meio!</h3><h3>Uma enxurrada de tinta nanquim cobre o seu corpo e o convés e a parte decepada continua se contorcendo no convés do navio, infelizmente isso não é o suficiente para parar o monstro que aperta com ainda mais força o navio com seus outros tentáculos.</h3><h3>Enquanto você via a criatura destruindo a embarcação com os tentáculos que lhe restavam, não havia muito oque se fazer, lhe ocorreu coletar um pouco daquele nanquim raro em um fraco de vidro, enquanto havia oportunidade.</h3>",
			choices: [
				{
					choice: "A batalha continua?",
					destination: 'batalhaContinua'
				}
			]
		},

		falhaRolar01: {
			title: "Falha no ataque!",
			image: "img/familia_atonita.webp",
			story: "<h3>Você pega suas armas e...</h3><h3>Um chacoalhão do navio devido às investidas do Kraken atrapalham seu movimento.</h3><h3>--Meu pincel!-- Você grita mentalmente, enquanto realiza uma manobra arriscada para recuperar sua arma.</h3><h3>Você recupera a rma, mas perdeu o momento do ataque, o gigantesco tentáculo passa por você arrastando escombros de madeira, abrindo enormes rachaduras em seu navio.</h3>",
			choices: [
				{
					choice: "A batalha continua?",
					destination: 'batalhaContinua'
				}
			]
		},

		batalhaContinua: {
			title: "A batalha continua?",
			image: "img/vida_dura.webp",
			story: "<h3>À medida que o navio se desfazia sob o ataque impiedoso do Kraken, as madeiras rangiam e estalavam, e a tripulação lutava desesperadamente para sobreviver.</h3><h3>O monstro marinho arrastou a embarcação para as profundezas negras do oceano, sua última visão sendo a escuridão avassaladora das águas turbulentas.</h3><h3>Enquanto a destruição se desenrolava, você saltou do navio agonizante, lançando-se ao mar sabendo que suas chances de sobreviver eram incertas, mas sua determinação o impelia a continuar lutando.</h3><h3>Um bote salva-vidas, lançado momentos antes do ataque, flutuava próximo e nadando até ele você e se agarrou com força desesperada.</h3><h3>As águas turbulentas o arrastaram para longe do local da batalha, enquanto observava impotente enquanto o navio e a tripulação desapareciam nas profundezas.</h3><h3>Os dias passaram lentamente, à deriva no oceano vasto e implacável, após uma tempestade você acordou, o céu estava claro, e uma brisa fria acariciava seu rosto.</h3><h3>Confuso e desorientado você percebeu que havia chegado a uma ilha vulcânica, a terra era árida e rochosa, com fumaça e cinzas vulcânicas pairando no ar.</h3>",
			choices: [
				{
					choice: "Começar Novamente",
					destination: "intro"
				}
			]
		},
		
		investigaCriatura: {
			title: "Investigar a criatura",
			image: "img/suv02.webp",
			story: "<h3>Antes de tomar alguma atitude você decide usar suas habilidades especiais para analisar a criatura.</h3><h3>Quando desenha algo você consegue magicamente ter intuições sobre o seu desenho e as você descobre, que esses tipos de Krakens gostam de atacar embarcações em mar aberto, poucos aventureiros são capazes de enfrentá-los, e poucos se quer já viram algo além dos tentáculos enormes da criatura.</h3><h3>Geralmente ele ataca de noite ou no pôr do sol e quando ele ataca, as águas se tornam negras devido ao nanquim que o monstro solta no mar.</h3><h3>A luz não consegue penetrar, apenas os tentáculos negros da criatura se projetam para fora da água, destruindo os navios.</h3><h3>Estranhamente o Kraken não mata ou devora os tripulantes que não o atacam diretamente.</h3><h3>Você não sabe o porquê de ele agir assim, mas fica feliz de ter descoberto isso antes de partir para o combate</h3>",
			choices: [
				{
					choice: "A batalha continua?",
					destination: 'batalhaContinua'
				}
			]
		},

		salvaMantimentos: {
			title: "Salvar os Mantimentos",
			image: "img/suv02.webp",
			story: "<h3>Sentindo que o navio não tem mais salvação você decide se preocupar com seus próximos passos, se conseguir sobreviver a isso tudo, pode ser que tenha que ficar perdido no mar até conseguir voltar para terra firme e por isso é melhor ter mantimentos quando isso acontecer.</h3><h3>Usando sua habilidade especial de desenho você cria alguns pequenos animais feitos de tinta para coletar e trazer tudo que for necessário, água, comida, mochila, roupas, etc.</h3><h3>Enquanto se prepara o caos e a destruição se instalam no local, parece que a maioria da tripulação teve a mesma ideia que você e estão lutando por suprimentos, felizmente ainda existem recursos mais do que suficientes para todos.</h3>",
			choices: [
				{
					choice: "A batalha continua?",
					destination: 'batalhaContinua02'
				}
			]
		},

		batalhaContinua02: {
			title: "A batalha continua?",
			image: "img/vida_dura.webp",
			story: "<h3>À medida que o navio se desfazia sob o ataque impiedoso do Kraken, as madeiras rangiam e estalavam, e a tripulação abandonava o navio saltando ao mar com o máximo de recursos possíveis.</h3><h3>O monstro marinho arrastou a embarcação para as profundezas negras do oceano, sua última visão sendo a escuridão avassaladora das águas turbulentas.</h3><h3>Enquanto a destruição se desenrolava, você saltou do navio agonizante, lançando-se ao mar sabendo que suas chances de sobreviver estavam garantidas, ao menos por um tempo.</h3><h3>Um bote salva-vidas, lançado momentos antes do ataque, flutuava próximo e nadando até ele você e se agarrou com força desesperada.</h3><h3>As águas turbulentas o arrastaram para longe do local da batalha, enquanto buscava por sinais dos outros sobreviventes... sem encontrar nenhum...</h3><h3>Os dias passaram lentamente, à deriva no oceano vasto e implacável, após uma tempestade você acordou, o céu estava claro, e uma brisa fria acariciava seu rosto.</h3><h3>Confuso e desorientado você percebeu que havia chegado a uma ilha vulcânica, a terra era árida e rochosa, com fumaça e cinzas vulcânicas pairando no ar.</h3>",
			choices: [
				{
					choice: "Começar Novamente",
					destination: "intro"
				}
			]
		},

		recuperaMapa: {
			title: "Recuperar o mapa que está na cabine do capitão",
			image: "img/suv02.webp",
			story: "<h3>Você está aqui por um único motivo, encontrar o templo que pode trazer alguma esperança para o mundo.</h3><h3>Suas habilidades especiais de cartografo fazem que você conheça e entenda qualquer terreno como ninguém e se mova com agilidade e precisão.</h3><h3>Enquanto o caos se instala no convés você corre e desvia do mastro caindo, dos tentáculos do monstro e salta sobre as rachaduras para alcançar a cabine.</h3><h3>Dentro da cabine você sente um calafrio, o mapa desapareceu, alguém foi mais rápido que você!</h3><h3>Sem tempo para pensar você apensa se lamenta de ter tido que depender do serviço de piratas, e já que está aqui decide retribuir o favor e guardar para você os equipamentos que estão aqui.<h3></h3>São ferramentas de ladrões, coisas para abrir fechaduras, revelar e desativar armadilhas, talvez sejam uteis no futuro.</h3>",
			choices: [
				{
					choice: "A batalha continua?",
					destination: 'batalhaContinua'
				}
			]
		},

		nomeCapitulo: {
			title: "Nome do Capitulo",
			image: "img/suv02.webp",
			story: "<h3>...</h3>",
			choices: [
				{
					choice: "A batalha continua?",
					destination: 'batalhaContinua'
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
