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
			image: "img/introducao800x533.png",
			story: "<h3>Lucídia, um reino outrora próspero e avançado, caiu em uma era glacial cruel; os reinos que restaram sucumbiram à barbárie e ao conflito para sobreviver.</h3><h3>Por muitos anos, a esperança havia desaparecido, até que um dia um mapa antigo chegou às suas mãos, contendo a localização de um templo dedicado ao espírito do verão em uma ilha remota, ambos esquecidos pela passagem do tempo.</h3><h3>Os oráculos dizem que neste local reside a semente da esperança que pode trazer as estações de volta para o mundo e, como um bom artista, você não conteve a sua curiosidade e decidiu averiguar, apesar dos riscos.</h3><h3>Você juntou os recursos necessários para a viagem além de um bom barco e uma tripulação de destemidos piratas, que ficaram mais do que felizes em embarcar nessa, afinal não é sempre que se tem a oportunidade de encontrar tesouros para saquear em um templo antigo que parece tão importante!</h3><h3>A viagem é longa e até agora correu sem nenhum perigo, o que torna as coisas um tanto quanto tediosas. Você decide aproveitar seu tempo para:</h3>",
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
			image: " ",
			story: "<h3>Com a conversa, você aprende que os piratas são um povo humano dominante do Reino de Soleriam; que quando o grande inverno veio, eles sobreviveram criando comunidades seminômades de navegadores que se mudavam, pilhando cidades e em busca de lugares mais quentes.</h3><h3>Esses navegadores também trabalham como comerciantes ou mercenários quando não estão na pirataria e por isso é tão fácil contratá-los.</h3>",
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
			image: " ",
			story: "<h3>As estações são muito importantes em Lucídia e afetam tudo, até mesmo a geografia local. As regiões conhecidas do mundo estão divididas em quatro grandes áreas, que eram os antigos Reinos antes do grande inverno. Cada uma dessas regiões tem seu território influenciado por uma das estações. Mesmo assim, todas experimentavam o ciclo completo quando as estações climáticas funcionavam naturalmente.</h3>",
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
			image: " ",
			story: "<h3>Conferindo seus equipamentos, você admira a engenhosidade dos designers antigos que criaram os projetos de tudo o que é usado atualmente.</h3><h3>Como a arte tem características mágicas em Lucídia, o traço de um pincel potencializado com magia pode ser mais forte do que o corte de uma lâmina. Por isso, as armas mais comuns são pincéis gigantes, que são usados como bastões, e bicos de pena, que são usados como espadas ou adagas.</h3>",
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
			image: " ",
			story: "<h3>Você é uma Exploradora, uma classe artística com habilidades especiais através do desenho de mapas.</h3><h3>Você está sempre viajando e treinando em todo tipo de terreno inóspito e, por isso, sabe sobreviver e se orientar em qualquer local.</h3><h3>Através dos seus desenhos, você entende o terreno como ninguém, movendo-se duas vezes mais rápido do que outras pessoas e tendo uma facilidade sobrenatural para nadar, correr, escalar e até se esconder.</h3>",
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
			image: "img/kraken800x533.png",
			story: "<h3>A viagem segue até que um dia o céu se torna nublado e sombrio, as águas revoltas do oceano se agitavam com uma inquietação que anunciava um terror iminente.</h3><h3>Primeiro, uma escuridão obscura começou a espalhar-se sob as águas, como se o próprio oceano estivesse sangrando tinta negra.</h3><h3>A substância lentamente sobe à superfície, criando uma névoa sinistra que obscurece o horizonte, escondendo qualquer vislumbre do sol pálido.</h3><h3>À medida que a neblina se espalha, uma tensão crescente toma conta da tripulação.</h3><h3>Eles sabiam que a chegada daquela névoa negra anunciava a chegada do Kraken, um monstro que aterroriza marinheiros há séculos.</h3><h3>Do centro da névoa negra, os tentáculos do Kraken começaram a emergir, cobertos por aquela substância viscosa que se assemelhava ao petróleo.</h3><h3>Eram gigantescos e sinuosos, serpenteando como monstros gigantes em direção ao navio indefeso.</h3><h3>A tripulação observava horrorizada enquanto os tentáculos se erguiam do mar, criando ondas turbulentas que ameaçavam engolir a embarcação.</h3><h3>O Kraken envolveu o navio com seus tentáculos viscosos e começou a aplicar uma pressão esmagadora.</h3><h3>O casco de madeira gemeu e rangeu sob a força do monstro.</h3><h3>Diante dessa situação, você decide:</h3>",
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
					choice: "Recuperar o mapa",
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
			image: " ",
			story: "<h3>Você pega suas armas e, com um movimento preciso do seu pincel de combate, faz um risco, e um dos tentáculos é partido ao meio!</h3><h3>Uma enxurrada de tinta nanquim cobre o seu corpo e o convés, e a parte decepada continua se contorcendo no convés do navio. Infelizmente, isso não é suficiente para parar o monstro, que aperta com ainda mais força o navio com seus outros tentáculos.</h3><h3>Enquanto você vê a criatura destruindo a embarcação com os tentáculos que lhe restavam, não há muito o que se fazer. Ocorre-lhe coletar um pouco daquele nanquim raro em um frasco de vidro, enquanto há oportunidade.</h3>",
			choices: [
				{
					choice: "A batalha continua?",
					destination: 'batalhaContinua'
				}
			]
		},

		falhaRolar01: {
			title: "Falha no ataque!",
			image: " ",
			story: "<h3>Você pega suas armas e...</h3><h3>Um chacoalhão do navio devido às investidas do Kraken atrapalha seu movimento.</h3><h3><i>Meu pincel!</i></h3><h3>Você grita mentalmente, enquanto realiza uma manobra arriscada para recuperar sua arma.</h3><h3>Você recupera a arma, mas perdeu o momento do ataque. O gigantesco tentáculo passa por você, arrastando escombros de madeira e abrindo enormes rachaduras em seu navio!</h3>",
			choices: [
				{
					choice: "A batalha continua?",
					destination: 'batalhaContinua'
				}
			]
		},

		batalhaContinua: {
			title: "A batalha continua?",
			image: "img/ilha800x533.png",
			story: "<h3>À medida que o navio se desfaz sob os ataques impiedosos do Kraken, a tripulação luta desesperadamente para sobreviver.</h3><h3>Mas nada detém o monstro marinho que envolve e arrasta o que um dia foi uma embarcação para as profundezas do oceano, e você vê tudo isso envolto em fumaça escura e águas turbulentas.</h3><h3>Isso porque segundos antes das investidas finais, você saltou do navio agonizante, lançando-se ao mar sabendo que suas chances de sobreviver eram maiores, mesmo com sua determinação a impelindo a continuar lutando.</h3><h3>Pedaços de madeira se tornam seu bote salva-vidas.</h3><h3>E assim, dali, você vê os últimos suspiros do navio e sua terrível descida ao fundo do oceano.</h3><h3>Os dias passam lentamente, à deriva no oceano vasto e implacável, fome e sede lhe atacam com a mesma ferocidade que o Kraken; no fim, tudo que lhe resta é o aconchego da inconsciência.</h3><h3>Seus olhos se abrem confrontando um céu azul e límpido, confusa e desorientada você percebe que está em terra firme, uma ilha vulcânica, uma terra árida e rochosa, com fumaça e cinzas vulcânicas pairando no ar; você resolve:</h3>",
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
			image: " ",
			story: "<h3>Antes de tomar qualquer atitude, sua decisão é analisar a criatura.</h3><h3>Sua habilidade permite que, ao desenhar algo, você consiga magicamente ter intuições sobre o que está desenhando.</h3><h3>Ao olhar para a criatura como se fosse desenhá-la, você descobre que esse tipo de Kraken gosta de atacar embarcações em mar aberto; que cortar um tentáculo dele em nada deterá seu ataque contínuo; que a criatura só usa seus tentáculos, nunca revelando sua face; e que seu ataque termina levando a embarcação para o fundo do oceano.</h3><h3>Você percebe que a substância negra que evapora na superfície é parte principal da estratégia de caça do Kraken, e que essa tinta pode ser capturada para uso posterior.</h3><h3>A luz não consegue penetrar na fumaça da tinta.</h3><h3>Estranhamente, o Kraken não mata ou devora os tripulantes que não o atacam diretamente.</h3><h3>Com tudo isso em mente, você percebe o quão fútil é lutar. Então, você aproveita para pegar um pouco da tinta espalhada no convés, e...</h3>",
			choices: [
				{
					choice: "A batalha continua?",
					destination: 'batalhaContinua'
				}
			]
		},

		salvaMantimentos: {
			title: "Salvar os Mantimentos",
			image: " ",
			story: "<h3>Você sente o perigo no ar e a iminência da catástrofe! Lutar é tão insano quanto perder tempo avaliando o óbvio: a criatura vai destruir tudo e todos! É hora de ser esperta e se preparar para o que virá a seguir: o naufrágio.</h3><h3>Você ordena seus homens a deixarem a luta e se focarem em sobreviver.</h3><h3>Botes são lançados ao mar, equipamentos de sobrevivência são pegos, comida e o que dá de bebida!</h3><h3>Tão logo você se dá por satisfeita com o que conseguiu pegar, você se atira ao mar.</h3>",
			choices: [
				{
					choice: "A batalha continua?",
					destination: 'batalhaContinua02'
				}
			]
		},

		batalhaContinua02: {
			title: "A batalha continua?",
			image: "img/ilha800x533.png",
			story: "<h3>À medida que o navio se desfaz sob os ataques impiedosos do Kraken, você e a tripulação fazem o que podem para se afastar e salvar aqueles que ainda não estão em segurança.</h3><h3>E conforme aquilo que um dia foi uma embarcação some num redemoinho de tinta escura, você e os homens assistem incrédulos e agradecidos por terem sobrevivido.</h3><h3>Mas ainda é cedo para cantar vitória, pois assim que a fumaça começa a se dissipar o mar vai ficando visível novamente, e acima dele o Sol impiedoso.</h3><h3>Os botes se reúnem e mesmo à deriva vocês tentam manter a moral elevada.</h3><h3>O tempo passa, os recursos vão se tornando cada vez mais escassos e o desespero começa a se abater sobre os mais incrédulos.</h3><h3>Mas em meio a todo o clima de desespero que vai se formando, a esperança brota como um raio de luz!</h3><h3>À distância vocês avistam o que parece, e com o tempo se revela ser uma ilha!</h3><h3>Assim vocês se dirigem para ela.</h3>",
			choices: [
				{
					choice: "Montar Acampamento",
					destination: "montarAcampamento2"
				}
			]
		},

		recuperaMapa: {
			title: "Recuperar o mapa",
			image: " ",
			story: "<h3>Você está aqui por um único motivo: encontrar o templo que pode trazer alguma esperança para o mundo.</h3><h3>E o meio para isso é o mapa; assim, você não vai deixá-lo aqui para ser destruído pelo monstro!</h3><h3>Enquanto o caos se instala no convés, você corre e desvia do mastro caindo, dos tentáculos do monstro, e salta sobre as rachaduras para alcançar a cabine.</h3><h3>Dentro da cabine, você rapidamente pega o mapa, um estojo resistente à água e observa se não há mais nada que possa ajudar.</h3><h3>Você avista um pequeno estojo com ferramentas de múltiplos usos!</h3><h3>São ferramentas usadas por ladrões, para abrir fechaduras, revelar e desativar armadilhas, esse tipo de coisa.</h3><h3>Você pega tudo isso, mas ao sair nota que não há mais esperança para nada nem ninguém, a embarcação está afundando!</h3>",
			choices: [
				{
					choice: "A batalha continua?",
					destination: 'batalhaContinua3'
				}
			]
		},

		batalhaContinua3: {
			title: "A batalha continua?",
			image: "img/ilha800x533.png",
			story: "<h3>À medida que o navio se desfaz sob o ataque impiedoso do Kraken, você corre com tudo e se atira ao mar!</h3><h3>E enquanto os tentáculos levam o que outrora foi sua embarcação para os confins do oceano, você nada para longe.</h3><h3>Algumas madeiras se tornam sua salvação e você consegue improvisar algo que pode lhe ajudar a sobreviver.</h3><h3>Segurando neste bote improvisado, você aguarda a loucura passar.</h3><h3>Quando o Sol volta a reinar e o perigo se torna passado, você abre o mapa e começa a estudar onde você está e onde está seu destino.</h3><h3>Um sorriso se forma em seus lábios; você está perto, muito perto de lá.</h3><h3>Mesmo cansada, com fome e sede, sua determinação a incendeia e você parte com tudo para uma ilhota, seu objetivo, seu destino, sua única meta!</h3>",
			choices: [
				{
					choice: "Investigar o local",
					destination: 'investigarLocal2'
				}
			]
		},

		InvestigarLocal: {
			title: "Investigar o Local",
			image: "img/caverna800x533.png",
			story: "<h3>Você caminha pelo lugar, e em sua mente um mapa vai se desenhando.</h3><h3>Não existe quase nada de útil aqui; mas o pouco que existe está devidamente seguro em sua mente para ser usado.</h3><h3>E dentre essas poucas coisas, há uma caverna grande o suficiente para você entrar e funda o suficiente para você não poder vê-la apenas olhando em sua entrada.</h3>",
			choices: [
				{
					choice: "Explorar a caverna",
					destination: 'explorarCaverna'
				}
			]
		},	
		
		montarAcampamento2: {
			title: "Montar Acampamento",
			image: "img/caverna800x533.png",
			story: "<h3>Você e os homens chegam à ilha e montam acampamento.</h3><h3>Enquanto alguns vão transformando os botes em abrigos, outros saem para colher destroços, encontrar alguma comida, bebida e informação.</h3><h3>E é assim que você fica sabendo da caverna, a única coisa na ilha que parece relevante.</h3>",
			choices: [
				{
					choice: "Explorar a caverna",
					destination: 'explorarCaverna2'
				}
			]
		},

		investigarLocal2: {
			title: "Investigar o Local",
			image: "img/caverna800x533.png",
			story: "<h3>A ilha não tem muito a oferecer, sendo uma ilha vulcânica e bastante pequena.</h3><h3>Mas nela, segundo seu mapa e sua investigação, há a entrada para o templo na forma de uma caverna natural.</h3><h3>Não demora muito até você encontrar, e sabendo o que é, procura minuciosamente e descobre ranhuras que seriam impossíveis de se perceber se você não soubesse onde está.</h3><h3>É um guia sobre a caverna e algum tipo de dispositivo dentro dela, e como desativá-lo!</h3>",
			choices: [
				{
					choice: "Explorar a caverna",
					destination: 'explorarCaverna2'
				}
			]
		},	
		
		montarAcampamento: {
			title: "Montar Acampamento",
			image: "img/caverna800x533.png",
			story: "<h3>Você começa a criar seu abrigo.</h3><h3>Com os restos do naufrágio e algumas coisas que encontra ao caminhar pela ilhota.</h3><h3>No meio de uma de suas caminhadas para coletar material, você se depara com uma enorme caverna.</h3><h3>Parece ser um ótimo lugar para trazer seu abrigo.</h3>",
			choices: [
				{
					choice: "Explorar a caverna",
					destination: 'explorarCaverna'
				}
			]
		},

		explorarCaverna2: {
			title: "Explorar a Caverna",
			image: " ",
			story: "<h3>Primeiro, você improvisa uma tocha. Em seguida, começa a andar e logo percebe tanto a mudança de temperatura quanto o quão fantástico é o lugar.</h3><h3>As paredes da caverna são adornadas com pinturas antigas e desgastadas que contam a história de Lucidia.</h3><h3>Nela conta que o mundo teria sido criado por duas divindades: a deusa da Criação e o deus da Representação.</h3><h3>Da vontade delas surgiu todo o universo de Lucidia, ainda disforme e caótico. Por isso, eles criaram e deram forma para o sonhar e para o plano material. O sonhar era uma dimensão de magia onde foram criadas as fadas superiores e os espíritos guardiões.</h3><h3>As fadas superiores ficaram encarregadas de dar forma para o mundo material e os espíritos guardiões deveriam representar e cuidar de todos os aspectos do mundo material.</h3><h3>Quando o esboço do mundo estava feito, a Criação e a Representação decretaram que o mundo seria uma tela em branco e que uma raça de seres materiais, os seres humanos, receberiam o presente e a dádiva de poder pintá-la.</h3><h3>Enquanto você interpretava as pinturas nos murais, o chão abaixo dos seus pés faz um clique estranho, e você percebe que caiu em uma armadilha.</h3><h3>A mesma armadilha que você leu na entrada da caverna. Você executa a ação dita e a armadilha se desfaz.</h3><h3>Você sabe que não é a única, mas para todas as outras, você:</h3>",
			choices: [
				{
					choice: "Usa as ferramentas de ladrões",
					destination: 'equipamentoPirata'
				}
			]
		},

		explorarCaverna: {
			title: "Explorar a Caverna",
			image: " ",
			story: "<h3>Depois de improvisar uma tocha, seus pés tocaram o solo da caverna, e rapidamente houve uma mudança na temperatura e na atmosfera. Um ar quente emanava das paredes, que devia vir do magma no interior do vulcão. Além disso, você não estava em uma caverna natural e comum, mas sim em um túnel esculpido por algum povo antigo.</h3><h3>As paredes da caverna estavam adornadas com pinturas antigas e desgastadas que contavam a história de Lucidia.</h3><h3>O mundo teria sido criado por duas divindades: a deusa da Criação e o deus da Representação.</h3><h3>Da vontade deles surgiu todo o universo de Lucidia, ainda disforme e caótico. Por isso, eles criaram e deram forma para o sonhar e para o plano material. O sonhar era uma dimensão de magia onde foram criadas as fadas superiores e os espíritos guardiões.</h3><h3>As fadas superiores ficaram encarregadas de dar forma para o mundo material e os espíritos guardiões deveriam representar e cuidar de todos os aspectos do mundo material.</h3><h3>Quando o esboço do mundo estava feito, a Criação e a Representação decretaram que o mundo seria uma tela em branco e que uma raça de seres materiais, os seres humanos, receberiam o presente e a dádiva de poder pintá-la.</h3><h3>Enquanto você interpretava as pinturas nos murais, o chão abaixo dos seus pés fez um clique estranho, e você percebeu que caiu em uma armadilha.</h3><h3>Ela parece um pouco enferrujada e por isso não ativou ainda, mas assim que mover seu pé, provavelmente ela ativará.</h3>",
			choices: [
				{
					choice: "Respira fundo e... CORRE!",
					destination: 'respiraCorre'
				}
			]
		},

		equipamentoPirata: {
			title: "As Ferramentas dos Ladrões",
			image: " ",
			story: "<h3>Você não encontra dificuldade alguma. Claro, sem essas ferramentas, você poderia esperar machucados, quem sabe até ossos deslocados, mas com elas? Nada, nem um arranhão!</h3>",
			choices: [
				{
					choice: "Continuar Explorando",
					destination: 'continuarExplorando2'
				}
			]
		},

		respiraCorre: {
			title: "Respira fundo e... CORRE!",
			image: " ",
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
			image: "img/golem800x533.png",
			story: "<h3>Cansada, machucada e de péssimo humor, você chega a uma sala circular com um altar majestoso.</h3><h3>Sobre este altar, um Golem guardião.</h3><h3>Esta imponente figura de pedra parecia ter sido esculpida diretamente de algum tipo de carvão vulcânico.</h3><h3>A estatura do Golem alcançava facilmente quatro metros de altura, e sua expressão esculpida em pedra transmitia uma serenidade eterna, como se ele fosse o protetor incansável deste templo sagrado.</h3><h3>E lá estava ele, segurando um ovo mágico com cuidado.</h3><h3>O ovo mágico em si era uma esfera brilhante e cintilante, com um espectro de cores que dançavam através de sua superfície como chamas dançantes.</h3><h3>Era um objeto de beleza e poder inquestionáveis, uma fonte de energia mágica que irradiava calor e vitalidade.</h3>",
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

		continuarExplorando2: {
			title: "Continuar Explorando",
			image: "img/golem800x533.png",
			story: "<h3>Você chega a uma sala circular com um altar majestoso.</h3><h3>Sobre este altar, um Golem guardião.</h3><h3>Esta imponente figura de pedra parecia ter sido esculpida diretamente de algum tipo de carvão vulcânico.</h3><h3>A estatura do Golem alcançava facilmente quatro metros de altura, e sua expressão esculpida em pedra transmitia uma serenidade eterna, como se ele fosse o protetor incansável deste templo sagrado.</h3><h3>E lá estava ele, segurando um ovo mágico com cuidado.</h3><h3>O ovo mágico em si era uma esfera brilhante e cintilante, com um espectro de cores que dançavam através de sua superfície como chamas dançantes.</h3><h3>Era um objeto de beleza e poder inquestionáveis, uma fonte de energia mágica que irradiava calor e vitalidade.</h3>",
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
			image: " ",
			story: "<h3>A batalha, como você esperava, não foi fácil!</h3><h3>A cada pincelada, o Golem respondia com socos, chiados e vapor quente!</h3><h3>E sua carcaça dura como rocha parecia impenetrável.</h3><h3>Mas se ele era durão, você era mais.</h3><h3>Você saltava de seus ataques, rolava com os golpes que recebia e usava as paredes como plataforma para atacá-lo pela frente e por trás.</h3><h3>Com os golpes, você foi abrindo rachaduras no Golem até que ele era uma pilha de escombros e você... bem, você já tinha visto dias melhores, mas estava viva e com o magnífico prêmio nas mãos: o ovo!</h3>",
			choices: [
				{
					choice: "Conclusão",
					destination: 'conclusao'
				}
			]
		},

		falhaRolar02: {
			title: "Falha no ataque!",
			image: " ",
			story: "<h3>O Golem se mostra muito mais forte e poderoso do que até mesmo o Kraken!</h3><h3>Seus golpes são ineficazes, e por mais que você salte, role e corra pelas paredes, ele parece estar um passo à sua frente. Suas defesas são fantásticas e suas esquivas magníficas.</h3><h3>É inegável o quão superior taticamente e marcialmente aquele ser é.</h3><h3>Com o tempo, a luta vai se tornando dramática para você. Golpe a golpe, investida a investida, você vai se cansando, enquanto ele permanece incansável.</h3><h3>Ele ataca, ataca e ataca.</h3><h3>Quando você para para retomar o fôlego, percebe seus hematomas, cortes e sangramentos.</h3><h3>É isso. É parar agora e fugir enquanto é tempo, treinar, ficar mais forte e voltar um dia.</h3>",
			choices: [
				{
					choice: "Usar as pernas e bater em retirada",
					destination: 'retirada'
				}
			]
		},

		retirada: {
			title: "Usar as pernas e bater em retirada",
			image: " ",
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
			image: " ",
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
			image: "img/conclusao800x533.png",
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
			image: " ",
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
			story: "<h3><center>Recomendação Etária: Livre</center></h3><h3>Para jogar uma aventura-solo, basta ler o texto apresentado, e no final, clicar sobre a decisão escolhida. Como exemplo, temos 2 opções:</h3><h3>- A primeira delas é a opção de 'Começar a Aventura', onde você irá ler o trecho introdutório do texto, identificando o personagem que você irá interpretar;</h3><h3>- A segunda opção é a de retornar a 'Tela Inicial' do jogo.</h3><h3>No caso dessa aventura-solo, é utilizado o sistema de regras <a href='https://operarpg.com.br' class='classe1' target='blank'>OPERA RPG</a>; caso queira ler um resumos das regras, consulte o <a href='https://operarpg.com.br/opereta/' class='classe1' target='blank'>OPEReta</a>.</h3><h3>Existe um botão flutuante no canto inferior da tela. Ele permite ver a ficha de personagem na mesma ou em outra janela.</h3><h3>Existe mais de um final possível deste jogo, por isso você poder jogar novamente escolhendo opções diferentes das anteriormente escolhidas.</h3>",
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
