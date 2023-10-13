//variáveis de controle do framework
var story;
var cont = 0;
var instrucoes = false;
var creditos = false;
var master = false;

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
			story: "<h3>Você é um Explorador uma classe artística que adquiri habilidades especiais através do desenho de mapas.</h3><h3>Você está sempre viajando e treinando em todo tipo de terreno inóspito e por isso sabe sobreviver e se orientar em qualquer local.</h3><h3>Através dos seus desenhos você entende o terreno como ninguém, se movendo duas vezes mais rápido que outras pessoas e tendo uma facilidade sobrenatural para nadar, correr escalar, e até se esconder.</h3>",
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
			story: "<h3>Você pega suas armas e...</h3><h3>Um chacoalhão do navio devido às investidas do Kraken atrapalham seu movimento.</h3><h3>--Meu pincel!-- Você grita mentalmente, enquanto realiza uma manobra arriscada para recuperar sua arma.</h3><h3>Você recupera a arma, mas perdeu o momento do ataque, o gigantesco tentáculo passa por você arrastando escombros de madeira, abrindo enormes rachaduras em seu navio.</h3>",
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
					choice: "Investigar o local",
					destination: "investigarLocal"
				}
			],
			choices: [
				{
					choice: "Montar Acampamento",
					destination: "montarAcampamento"
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
					choice: "Investigar o local",
					destination: "investigarLocal"
				}
			],
			choices: [
				{
					choice: "Montar Acampamento",
					destination: "montarAcampamento"
				}
			]
		},

		recuperaMapa: {
			title: "Recuperar o mapa que está na cabine do capitão",
			image: "img/suv02.webp",
			story: "<h3>Você está aqui por um único motivo, encontrar o templo que pode trazer alguma esperança para o mundo.</h3><h3>Suas habilidades especiais de cartografo fazem que você conheça e entenda qualquer terreno como ninguém e se mova com agilidade e precisão.</h3><h3>Enquanto o caos se instala no convés você corre e desvia do mastro caindo, dos tentáculos do monstro e salta sobre as rachaduras para alcançar a cabine.</h3><h3>Dentro da cabine você sente um calafrio, o mapa desapareceu, alguém foi mais rápido que você!</h3><h3>Sem tempo para pensar você apensa se lamenta de ter tido que depender do serviço de piratas, e já que está aqui decide retribuir o favor e guardar para você os equipamentos que estão aqui.</h3><h3>São ferramentas de ladrões, coisas para abrir fechaduras, revelar e desativar armadilhas, talvez sejam uteis no futuro.</h3>",
			choices: [
				{
					choice: "A batalha continua?",
					destination: 'batalhaContinua3'
				}
			]
		},

		batalhaContinua3: {
			title: "A batalha continua?",
			image: "img/vida_dura.webp",
			story: "<h3>À medida que o navio se desfazia sob o ataque impiedoso do Kraken, as madeiras rangiam e estalavam, e a tripulação lutava desesperadamente para sobreviver.</h3><h3>O monstro marinho arrastou a embarcação para as profundezas negras do oceano, sua última visão sendo a escuridão avassaladora das águas turbulentas.</h3><h3>Enquanto a destruição se desenrolava, você saltou do navio agonizante, lançando-se ao mar sabendo que suas chances de sobreviver eram incertas, mas sua determinação o impelia a continuar lutando.</h3><h3>Um bote salva-vidas, lançado momentos antes do ataque, flutuava próximo e nadando até ele você e se agarrou com força desesperada.</h3><h3>As águas turbulentas o arrastaram para longe do local da batalha, enquanto observava impotente enquanto o navio e a tripulação desapareciam nas profundezas.</h3><h3>Os dias passaram lentamente, à deriva no oceano vasto e implacável, após uma tempestade você acordou, o céu estava claro, e uma brisa fria acariciava seu rosto.</h3><h3>Confuso e desorientado você percebeu que havia chegado a uma ilha vulcânica, a terra era árida e rochosa, com fumaça e cinzas vulcânicas pairando no ar.</h3>",
			choices: [
				{
					choice: "Investigar o local",
					destination: "investigarLocal2"
				}
			],
			choices: [
				{
					choice: "Montar Acampamento",
					destination: "montarAcampamento2"
				}
			]
		},

		InvestigarLocal: {
			title: "Investigar o Local",
			image: "img/suv02.webp",
			story: "<h3>Com fome e cansado, mas aliviado de estar em terra firme você não tem outra opção senão investigar o local.</h3><h3>Não existe quase nada de útil aqui é um lugar rochoso e sem vida, mas eventualmente você descobre e uma caverna e decide entrar para explorar.</h3>",
			choices: [
				{
					choice: "Explorar a caverna",
					destination: 'explorarCaverna'
				}
			]
		},	
		
		montarAcampamento2: {
			title: "Montar Acampamento",
			image: "img/suv02.webp",
			story: "<h3>Aliviado e agradecido você decide montar acampamento, se alimentar e recuperar suas forças.</h3><h3>Despois de se alimentar é hora de investigar a ilha, não existe quase nada de útil aqui é um lugar rochoso e sem vida, mas eventualmente você descobre e uma caverna e decide entrar para explorar.</h3>",
			choices: [
				{
					choice: "Explorar a caverna",
					destination: 'explorarCaverna2'
				}
			]
		},

		InvestigarLocal: {
			title: "Investigar o Local",
			image: "img/suv02.webp",
			story: "<h3>Com fome e cansado, mas aliviado de estar em terra firme você não tem outra opção senão investigar o local.</h3><h3>Não existe quase nada de útil aqui é um lugar rochoso e sem vida, mas eventualmente você descobre e uma caverna e decide entrar para explorar.</h3>",
			choices: [
				{
					choice: "Explorar a caverna",
					destination: 'explorarCaverna2'
				}
			]
		},	
		
		montarAcampamento: {
			title: "Montar Acampamento",
			image: "img/suv02.webp",
			story: "<h3>Aliviado e agradecido você decide montar acampamento, se alimentar e recuperar suas forças.</h3><h3>Despois de se alimentar é hora de investigar a ilha, não existe quase nada de útil aqui é um lugar rochoso e sem vida, mas eventualmente você descobre e uma caverna e decide entrar para explorar.</h3>",
			choices: [
				{
					choice: "Explorar a caverna",
					destination: 'explorarCaverna'
				}
			]
		},

		explorarCaverna2: {
			title: "Explorar a Caverna",
			image: "img/suv02.webp",
			story: "<h3>Depois de improvisar uma tocha, seus pés tocaram o solo da caverna, e rapidamente houve uma mudança na temperatura e na atmosfera. Um ar quente emanava das paredes, que devia vir do magma no interior do vulcão, além disso você não estava em uma caverna natural e comum, mas sim em um túnel esculpido por algum povo antigo.</h3><h3>As paredes da caverna estavam adornadas com pinturas antigas e desgastadas que contavam a história de Lucidia.</h3><h3>O mundo teria sido criado por duas divindades, a deusa da Criação e o deus da Representação.</h3><h3>Da vontade deles surgiu todo o universo de Lucidia, ainda disforme e caótico, por isso eles criaram e deram forma para o sonhar e para o plano material, o sonhar era uma dimensão de magia onde foram criadas as fadas superiores e os espíritos guardiões.</h3><h3>As fadas superiores ficaram encarregadas de dar forma para o mundo material e os espíritos guardiões deveriam representar e cuida de todos os aspectos do mundo material.</h3><h3>Quando o esboço do mundo estava feito a Criação e a Representação decretaram que o mundo seria uma tela em branco e que uma raça de seres materiais, os seres humanos, receberiam o presente e a dadiva de poder pinta-la.</h3><h3>Enquanto você interpretava as pinturas nos murais, o chão abaixo dos seus pés faz um clique estranho, e você percebe que caiu em uma armadilha.</h3><h3>Ela parece um pouco enferrujada e por isso não ativou ainda, mas assim que mover seu pé provavelmente ela ativará.</h3>",
			choices: [
				{
					choice: "Use as ferramentas de ladrões",
					destination: 'equipamentoPirata'
				}
			]
		},

		explorarCaverna: {
			title: "Explorar a Caverna",
			image: "img/suv02.webp",
			story: "<h3>Depois de improvisar uma tocha, seus pés tocaram o solo da caverna, e rapidamente houve uma mudança na temperatura e na atmosfera. Um ar quente emanava das paredes, que devia vir do magma no interior do vulcão, além disso você não estava em uma caverna natural e comum, mas sim em um túnel esculpido por algum povo antigo.</h3><h3>As paredes da caverna estavam adornadas com pinturas antigas e desgastadas que contavam a história de Lucidia.</h3><h3>O mundo teria sido criado por duas divindades, a deusa da Criação e o deus da Representação.</h3><h3>Da vontade deles surgiu todo o universo de Lucidia, ainda disforme e caótico, por isso eles criaram e deram forma para o sonhar e para o plano material, o sonhar era uma dimensão de magia onde foram criadas as fadas superiores e os espíritos guardiões.</h3><h3>As fadas superiores ficaram encarregadas de dar forma para o mundo material e os espíritos guardiões deveriam representar e cuida de todos os aspectos do mundo material.</h3><h3>Quando o esboço do mundo estava feito a Criação e a Representação decretaram que o mundo seria uma tela em branco e que uma raça de seres materiais, os seres humanos, receberiam o presente e a dadiva de poder pinta-la.</h3><h3>Enquanto você interpretava as pinturas nos murais, o chão abaixo dos seus pés faz um clique estranho, e você percebe que caiu em uma armadilha.</h3><h3>Ela parece um pouco enferrujada e por isso não ativou ainda, mas assim que mover seu pé provavelmente ela ativará.</h3>",
			choices: [
				{
					choice: "Respira fundo e... CORRE!",
					destination: 'respiraCorre'
				}
			]
		},

		equipamentoPirata: {
			title: "As Ferramentas dos Ladrões",
			image: "img/suv02.webp",
			story: "<h3>O equipamento dos piratas vai ser útil agora, com calma e suando frio você analisa e pouco a pouco consegue entender o mecanismo abaixo do seu pé e desativa-lo.</h3><h3>Um outro clique deixa seu coração mais tranquilo, é o barulho de uma alavanca que você conseguiu travar novamente, caso ela se abrisse a lava do vulcão escorreria do teto e você teria um banho quente demais para o seu gosto.</h3>",
			choices: [
				{
					choice: "Continuar Explorando",
					destination: 'continuarExplorando'
				}
			]
		},

		respiraCorre: {
			title: "Respira fundo e... CORRE!",
			image: "img/suv02.webp",
			story: "<h3>Sem opções você respira fundo e se prepara para seja o que for que está por vir.</h3><h3>Quando você tira seu pé do lugar, lava vulcânica começa a escorrer do teto por todo o corredor, talvez por seu um mecanismo antigo ele não esteja funcionando totalmente e você vê alguns “pontos cegos” onde não escorre lava, você não tem muito tempo para pensar e decide que essa e sua única chance, correr e desviar até chegar ao fim do corredor.</h3>",
			choices: [
				{
					choice: "Continuar Explorando",
					destination: 'continuarExplorando'
				}
			]
		},

		continuarExplorando: {
			title: "Continuar Explorando",
			image: "img/suv02.webp",
			story: "<h3>Você chega em uma sala circular com um altar majestoso.</h3><h3>Sobre este altar, um Golem guardião.</h3><h3>Esta imponente figura de pedra parecia ter sido esculpida diretamente de algum tipo de carvão vulcânico.</h3><h3>A estatura do Golem alcançava facilmente quatro metros de altura, e sua expressão esculpida em pedra transmitia uma serenidade eterna, como se ele fosse o protetor incansável deste templo sagrado.</h3><h3>E ele estava ali, segurando um ovo mágico com cuidado.</h3><h3>O ovo mágico em si era uma esfera brilhante e cintilante, com um espectro de cores que dançavam através de sua superfície como chamas dançantes.</h3><h3>Era um objeto de beleza e poder inquestionáveis, uma fonte de energia mágica que irradiava calor e vitalidade.</h3>",
			choices: [
				{
					choice: "Usar o nanquim do Kraken",
					destination: 'nanquimKraken'
				},
				{
					choice: "Usar seu pincel e começar o combate!",
					destination: 'rolarDados02'
				},
				{
					choice: "Usar as pernas e bater em retirada",
					destination: 'retirada'
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
			title: "Sucesso no ataque!",
			image: "img/familia_vendo_tv.webp",
			story: "<h3>A batalha, como você esperava, não foi fácil!</h3<h3>A cada pincelada o Golem respondia com socos, chiados e vapor quente!</h3<h3>E sua carcaça dura como rocha parecia impenetrável.</h3<h3>Mas se ele era durão, você era mais.</h3<h3>Você saltava de seus ataques, rolava com os golpes que recebia, e usava as paredes como plataforma para atacar-lhe pela frente e por trás.</h3<h3>Com os golpes você foi abrindo rachaduras no Golem até que ele era uma pilha de escombros e você... bem você já tinha visto dias melhores, mas estava viva e com o magnífico prêmio nas mãos: o ovo!</h3>",
			choices: [
				{
					choice: "Conclusão",
					destination: 'conclusao'
				}
			]
		},

		falhaRolar02: {
			title: "Falha no ataque!",
			image: "img/familia_atonita.webp",
			story: "<h3>O Golem se mostra muito mais forte e poderoso do que até mesmo o Kraken! Seus golpes são ineficazes, e por mais que você salte, role, e corra pelas paredes, ele parece estar um passo a sua frente. Defesas fantásticas e esquivas magníficas. É inegável o quão superior tática e marcialmente aquele ser é. Com o tempo a luta vai ficando dramática para você. Golpe a golpe, investida a investida você vai se cansando, ele não. Ele ataca, ataca e ataca. Quando você para para retomar o fôlego, percebe seus hematomas, cortes e sangramentos. É isso. É parar agora e fugir enquanto é tempo, treinar, ficar mais forte e voltar um dia.</h3>",
			choices: [
				{
					choice: "Usar as pernas e bater em retirada",
					destination: 'retirada'
				}
			]
		},

		retirada: {
			title: "Usar as pernas e bater em retirada",
			image: "img/suv02.webp",
			story: "<h3>Você decide que o risco não vale a pena, melhor viver para lutar outro dia.</h3<h3>Agora só lhe resta decidir se você vai esperar a sorte mandar algum socorro para te encontrar nessa ilha abandonada, ou encarar o mar aberto com o seu bote, é as opções não são nada boas, e você se pergunta como se meteu nessa situação.</h3>",
			choices: [
				{
					choice: "Conclusão",
					destination: 'conclusao2'
				}
			]
		},

		nanquimKraken: {
			title: "Usar o Naquim do Kraken",
			image: "img/suv02.webp",
			story: "<h3>O Nanquim do Krakem tem a propriedade magica da escuridão.</h3><h3>Cobrindo seu corpo com essa tinta negra, você fica invisível aos outros de outros seres por alguns instantes, tempo suficiente para se aproximar do Golem e tomar ovo para si.</h3><h3>Quando você pega o ovo o Golem dispara socos em todas as direções, um deles quase atinge você, mas incapaz de ver você a criatura não tem chances de te acertar conforme você corre para fora da caverna.</h3>",
			choices: [
				{
					choice: "Conclusão",
					destination: 'conclusao'
				}
			]
		},

		conclusao: {
			title: "Conclusão",
			image: "img/suv02.webp",
			story: "<h3>Com o ovo mágico, você deixou para trás a caverna no coração do vulcão.</h3><h3>Enquanto emergia da escuridão da gruta o calor fraco do sol banhava o ovo mágico e algo incrível aconteceu.</h3><h3>A esfera cintilante começou a brilhar intensamente, como se estivesse absorvendo a energia até que a superfície do ovo começou a rachar e se despedaçar, revelando uma criatura majestosa e mágica.</h3><h3>Diante de seus olhos incrédulos, uma fênix gloriosa emergiu das cinzas do ovo.</h3><h3>Suas penas eram de um vermelho-dourado resplandecente, e suas asas reluziam como chamas eternas.</h3><h3>Ela se ergueu no ar, enchendo a ilha com sua beleza e majestade enquanto voava em direção ao céu.</h3><h3>Você sentiu institivamente que esta era a manifestação do espírito guardião de Soleriam, o espírito do verão.</h3><h3>Algo incrível estava acontecendo.</h3><h3>A fênix, como o espírito do verão, representava a renovação e a vitalidade.</h3><h3>Com a fênix agora despertada, o verão estava retornando ao mundo.</h3><h3>A esperança florescia novamente, e a era glacial que havia assolado o mundo estava com os dias contados.</h3>",
			choices: [
				{
					choice: "Começar Novamente",
					destination: 'intro'
				}
			]
		},

		conclusao2: {
			title: "Conclusão",
			image: "img/suv02.webp",
			story: "<h3>As coisas não deram nada certo para você, mas com muito esforço e boas doses de sorte, você volta a civilização!</h3><h3>Suas histórias divertem os outros marinheiros e quase ninguém acredita naquilo que você relata.</h3><h3>Mas uma pessoa, um livreiro e escritor, não só acredita como lhe paga um bom dinheiro para que sua história seja imortalizada num livro escrito por ele.</h3><h3>Assim você vende sua história e o sucesso de seu livro a fazem uma modelo de coragem e bravura, inspirando gerações a se lançarem ao mar em busca de ovos de ouro e Krakens!</h3><h3>Mas nem mesmo todo conforto que suas histórias garantiram você conseguiu tirar de seus pensamentos um simples questionamento... e se você tivesse feito diferente...?</h3>",
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

		creditos: {
			title: "Créditos",
			story: "<h2 align='center'>Créditos</h2><h3>Esta aventura foi criada para o ambiente de RPG Lucidia publicado pelo Ópera RPG.</h3><h3>Ambiente criado em conjunto pelos alunos do <a href='https://www.instagram.com/estudiolucidi' class='classe1' target='blank'>Estúdio Ludici</a> com o professor <a href='https://www.instagram.com/contartesi_art/' class='classe1' target='blank'>Felipe Contartesi</a>.</h3><h3>Ilustrações: Felipe Contartesi.</h3><h3>WebDev: <a href='https://josecarloslima.github.io/Projeto-Portfolio/' class='classe1' target='blank'>José Carlos Lima</a>.</h3>",
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
				story.currentScene = 'falhaRolar02';
				swal('Valores obtidos: ' + dado1 + ' + ' + dado2 + ' = ' + dados + ' > 8 (Falha)');
			}
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
