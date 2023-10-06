//variáveis de controle do framework
var story;
var cont = 0;
var instrucoes = false;
var creditos = false;
var master = false;

//variáveis de controle da história
microchip = false;

//função que define o conteúdo textual da narrativa
function getStory () {
	return{

	currentScene: "intro", 
	intro: {
		title: "Introdução",
		image: "img/thomas_estudando.webp",
		story: "<h3>'<i>Akhenaton ascendeu ao trono em 1375 a.C.. Apurando e aprofundando a adoração ao Sol a ponto de criar o primeiro credo monoteísta que se conhece, Akhenaton rasurou do seu próprio nome o nome do deus anterior, Amon,  Criando o culto único de Aton, o Sol, como fonte de vida e amor. Daí seu próprio nome de Akhenaton. Tudo indica que os belos hinos do culto de Aton são de sua autoria. O sol de Akhenaton já era uma figura de pai.</i>'</h3><h3>Akhenaton... O que Akhenaton tem a ver com computadores, a não ser que os alienígenas estivessem infiltrados no Egito, Akhenaton nem saberia do que se trata a engenharia da computação.</h3><h3>Com alienígenas ou não, Tomás tem que estar a par das dinastias egípcias e mais um monte de bobagens sobre mitoses e meioses. O vestibular é burro, mas os seus concorrentes para o curso de Engenharia da Computação na USP não, muito pelo contrário; e ele está tendo que fazer um ano de cursinho por não ter conseguido entrar na primeira vez.</h3><h3>Tomás desistiu de viver nesse ano.</h3><h3>Ele mesmo não considera como vida essa rotina de estudos que ele vem levando, mas ele acredita na recompensa do curso na USP no ano que vem.</h3><h3>Acordar de madrugada, cursinho, almoço, estudo, banho, estudo, janta, estudo e dormir durante a semana.</h3><h3>Acordar tarde, estudo, almoço, estudo, lanche e cinema e dormir nos fins-de-semana e feriados.</h3><h3>Apesar de toda a agitação da cidade de São Paulo, Tomás se esforça para levar uma vida de cadáver, sem videogame, sem redes sociais, sem séries, sem namorada, sem futebol, sem viver, só vegetar com as raízes nos livros.</h3><h3>O contato com a realidade é feito através de portais de notícias: as consequências econômicas pós-pandêmicas, a crise na América do Sul, a queda do dólar, uma tevê do interior conquistando público na capital, os bombardeios da Rússia, o aumento do desemprego e da violência,...</h3><h3>- Ô Tomé, vem ver esse programa da Catantevê!</h3><h3>É Jonas, o irmãozinho de Tomás o tentando durante os estudos da noite.</h3><h3>O que você acha que Tomás deve fazer, ele deve mandar um tradicional calaboca para o irmãozinho e continuar com os estudos, deve largar tudo para dar uma relaxada em frente à televisão ou deve furar os olhos de Jonas com a lapiseira?</h3>",
		choices: [
	 	{
			choice: "Continuar Estudando",
			destination: 'continuarEstudando'
	 	},
		{
			choice: "Assistir o Programa",
			destination: 'assistirPrograma'
		},
		{
			choice: "Furar os olhos do Moleque",
			destination: 'furarOlhos'
		}
	 	]
	},

	continuarEstudando: {
		title: "Continuar Estudando",
		image: "img/aula.webp",
		story: "<h3>Determinado, Tomás não cede às tentações e continua sua árdua tarefa de estudante.</h3><h3>Seguindo sempre aquela rotina de estudos para não deixar a matéria acumular, a vida de Tomás continua, se é que pode se chamar isso de vida...</h3><h3>A época do vestibular se aproxima e os professores do cursinho alertam:</h3><h3>-- Gente, tá chegando a hora e não vamos descuidar das atualidades hein? E não vale aquela notícia da morte do Getúlio não, vamos ficar ligados no que está acontecendo agora. Com certeza vai estourar pergunta sobre a nova crise no mercado asiático ou sobre aquela rede de televisão do interior que está dominando a audiência em todo estado.</h3><h3>Por essa ele não esperava, ter que assistir televisão como lição de casa...</h3><h3>Ainda assim, Tomás tem uma alternativa:</h3>",
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

	assistirPrograma: {
		title: "Assistir Programa",
		image: "img/thomas_e_irmao_vendo_tv.webp",
		story: "<h3>Num ato de extrema rebeldia, Tomás rompe os laços sufocantes do livro de história geral e se afunda no sofá assistindo o programa de entrevistas que passa na televisão junto com toda sua família.</h3><h3>Tomás até acha divertido esse programa de entrevistas onde um palhaço sai pela rua perguntando idiotices para quem estiver passando.</h3><h3>Mais do que as perguntas, o que diverte é o amadorismo com que foi gravado o programa, também, não poderia se esperar mais do que isso de uma estação de tevê instalada em uma cidadezinha do interior.</h3><h3>Enquanto aguarda curioso por um programa de culinária que vai ser apresentado por um cachorro, Tomás acompanha um informativo sobre um novo projeto financeiro que está sendo implantado em várias regiões no interior do estado.</h3><h3>Apesar de achar estranho essa idéia de criar uma nova moeda para circulação paralela no país, Tomás acompanha o informativo sem disposição para analisar essa proposta, afinal, ele está sentado em frente à televisão para relaxar, e não para pensar.</h3><h3>Nesse dia Tomás vai dormir mais relaxado e no dia seguinte, você acha que Tomás deve passar o dia inteiro estudando ou reservar um tempinho para assistir a Catantevê?</h3><h3>Mais uma vez a opção é sua:</h3>",
		choices: [
		{
		choice: "Ir Estudar",
		destination: 'irEstudar'
		},
		{
			choice: "Assistir Televisão",
			destination: 'assistirTelevisao'
		}
		]
	},

	assistirCatanteve: {
		title: "Assistir Catantevê",
		image: "img/thomas_e_irmao_vendo_tv.webp",
		story: "<h3>Depois da janta, Tomás troca os livros pela televisão, mas a intenção de estudar é a mesma; enquanto seus pais e seu irmão assistem apenas por diversão, ele assiste com olhar crítico.</h3><h3>E não faltam motivos para criticar essa Catantevê, os programas são muito amadores, colocaram dois pescadores apresentando o telejornal, um tentando dar uma notícia maior do que a do outro.</h3><h3>Durante os intervalos, algumas propostas milagrosas sobre parcerias entre empresas e sua nova moeda, o Catandólar.</h3><h3 align='justify' > Tomás conclui que tem coisa estranha nisso aí, ele não entende como esse plano pode estar dando certo em todo o interior do estado e já começando na capital.</h3><h3>Que motivo alguém que não faz parte dessa cooperativa aceitaria essa nova moeda?</h3><h3>Você acha que Tomás deve:</h3>",
		choices: [
	 	{
			choice: "Continuar na Catantevê",
			destination: 'continuarCatanteve'
		},
		{
			choice: "Conversar com seu Pai",
			destination: 'conversarPai'
		}
	 	]
	},

	furarOlhos: {
		title: "Furar os olhos do Moleque",
		image: "img/clinica.webp",
		story: "<h3>5 anos depois, durante uma entrevista com o psicólogo no Sanatório São Juquinha:</h3><h3>- Eu não sei o que aconteceu comigo naquela noite, eu tinha estudado muito e parece que uma voz me ordenou de dentro de minha cabeça e eu fiz...</h3><h3>Pobre Tomás, passou o resto de sua vida internado por um crime que ele não sabe porque cometeu até enlouquecer e morrer.</h3><h3>Não era bem essa a história que deveria ser contada, mas se você acha divertido ficar estragando histórias com decisões absurdas, é isso que geralmente acontece.</h3><h3>O jeito agora é voltar para o começo.</h3><h3>Tente viver a história de Tomás como se fosse realidade, tomando decisões que você realmente tomaria se estivesse no lugar dele.</h3>",
		choices: [
	 	{
			choice: "Começar Novamente",
			destination: 'intro'
		}
	 	]
	},

	pesquisarInformacoes: {
		title: "Pesquisar Informações",
		image: "img/thomas_pesquisando.webp",
		story: "<h3>Utilizando os mecânismos de pesquisa na Internet sobre a TV Catantevê, Tomás descobre muito pouco sobre os programas na seção de cultura, a maioria são programas de entrevistas ou variedades feitos na própria cidade, mas na seção de economia, muitas matérias falam sobre interferências boas dos Catandólares na economia regional e muitas ameaças do governo federal julgando como ilegal esse câmbio paralelo.</h3>",
		choices: [
	 	{
			choice: "Continuar",
			destination: 'sucessoRolar01'
		}
	 	]
	},

	irEstudar: {
		title: "Ir Estudar",
		image: "img/tv_cachorro.webp",
		story: "<h3>Não, chega de vadiagem, decide Tomás voltando aos estudos.</h3><h3>Durante uma passagem pela sala para pegar um copo de água na cozinha, Tomás vê que estão passando um programa de culinária apresentado por um cachorro na Catantevê.</h3><h3>Você acha que ele deve:</h3>",
		choices: [
		{
			choice: "Assistir um pouco de TV",
			destination: "assistirTelevisao"
		},
		{
			choice: "Pegar um Copo de Água",
			destination: "pegarCopo"
		}
		]
	},

	assistirTelevisao: {
		title: "Assistir Televisão",
		image: "img/familia_atonita.webp",
		story: "<h3><h3>Tomás novamente faz uma pausa nos estudos para acompanhar a programação da Catantevê junto com a família que não perde um dia dessa programação; ele acompanha um documentário feito por uma velhinha repórter que falava mais do que os entrevistados e acabava esquecendo qual era o tema da reportagem.</h3><h3>Mais uma vez passa aquele informativo sobre a nova moeda paralela nacional, e Tomás até fica entusiasmado com os projetos de extensão dos 'Catandólares' para todo o estado.</h3><h3>Tomás passa a acompanhar os programas da Catantevê sempre aguardando as novidades sobre os Catandólares e as propostas de readministração das empresas por essa nova moeda.</h3><h3>E essa readministração tem se mostrado muito eficiente pois forma uma espécie de consórcio com as outras empresas, o que faz com que a demanda sempre seja atendida, sem sobra de produtos nas prateleiras.</h3><h3>Com o surgimento das empresas 'Catanlisadas' em São Paulo, Tomás deixou os estudos de lado e passou a trabalhar em uma dessas empresas, assim como várias pessoas que estavam em busca de um emprego melhor.</h3><h3>Várias empresas tentam essa aliança com os Catandólares, e as que não conseguem estão falindo pois sua demanda está sendo puxada pelas empresas catanlisadas.</h3><h3>Até mesmo seu pai deixaria seu emprego para buscar uma vaga em uma empresa catanlisada se a empresa onde ele trabalhasse não se catanlisasse antes.</h3><h3>Apesar de só viver para trabalhar e assistir televisão, Tomás, assim como sua família e todos os telespectadores da Catantevê estão animados, pois agora o sinal de transmissão foi ampliado para toda a região sudeste e sul do Brasil, aumentando ainda mais o mercado dos Catandólares.</h3>",
		choices: [
		{
				choice: "Continuar",
				destination: "dominarMente"
		}
		]
	},

	continuarCatanteve: {
		title: "Continuar Assistindo Catantevê",
		image: "img/thomas_e_irmao_vendo_tv.webp",
		story: "<h3>Tomás assiste um documentário feito por uma velhinha repórter que falava mais do que os entrevistados e acabava esquecendo qual era o tema da reportagem.</h3><h3>Mais uma vez passa aquele informativo sobre a nova moeda paralela nacional, e Tomás percebe mais algumas falhas nos projetos de extensão dos 'Catandólares' para todo o estado.</h3><h3>Apesar de achar absurdos alguns desses planos, Tomás corre o risco de achar o que a Catantevê quer que ele ache.</h3><h3>Chegou a hora de jogar os dados, conferindo a ficha de Tomás, você perceberá que ele tem uma grande força de vontade, pois enquanto uma pessoa normal tem o atributo Vontade igual a 6, a Característica Psíquica Vontade Forte (2) deixa a Vontade de Tomás igual a 8.</h3><h3>Para ter sucesso em um Teste de Vontade, você deve rolar os 2D6 e conseguir um número igual ou menor a Vontade de Tomas:</h3>",
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
		story: "<h3>Sem dar mais atenção ao assunto (apesar da insistência de todos para que ele assista a tal Catantevê), Tomás se aplica mais ainda nos estudos, não faltando a nenhuma aula, ao contrário de alguns professores e grande parte dos seus colegas de classe.</h3><h3>Chega o grande dia, Tomás leva suas anotações até o local do vestibular.</h3><h3>Ao contrário do tumulto do ano anterior, esses testes foram calmos, sua classe está quase vazia, apenas 9 dos 30 candidatos compareceram, até mesmo alguns fiscais de prova faltaram.</h3><h3>Voltando para casa, encontra Tomás assistindo a tal Catantevê na televisão do quarto.</h3><h3>Nesse horário seus pais também assistem televisão na sala, todos os dias, sem perder um, até parecia que toda semana era a última semana da novela.</h3><h3>Tomás até tenta discutir com o Jonas mas não adianta, ele não desgruda os olhos da tela.</h3><h3>Depois de uns croques na cabeça dele, Jonas sai correndo para a sala quando você desliga a televisão.</h3><h3>Tomás vai para a sala para comemorar seus bons resultados mas ninguém se importa muito, estão todos ligados no telejornal apresentado por pescadores na Catantevê.</h3><h3>Sem outro remédio, Tomás junta-se à família na atividade telespectadora, Finalmente ele terá uma pausa nos estudos enquanto espera pelas provas da 2ª fase do vestibular.</h3><h3>Tomás acha graça dos pescadores apresentando o telejornal, um tentando dar uma notícia maior do que a do outro.</h3><h3>Durante os intervalos, algumas propostas milagrosas sobre parcerias entre empresas e sua nova moeda, o Catandólar.</h3><h3>Apesar de achar absurdos alguns desses planos, Tomás corre o risco de achar o que a Catantevê quer que ele ache.</h3><h3>Chegou a hora de jogar os dados, conferindo a ficha de Tomás, você perceberá que ele tem uma grande força de vontade, pois enquanto uma pessoa normal tem o atributo Vontade igual a 6, a Característica Psíquica Vontade Forte (2)deixa a Vontade de Tomás igual a 8.</h3><h3>Para ter sucesso em um Teste de Vontade, você deve rolar os 2D6 e conseguir um número igual ou menor a Vontade de Tomas.</h3>",
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
		story: "<h3>Tomás continua assistindo a programação para tentar entender qual é esse milagre econômico que essa Catantevê promete, ele acompanha um documentário feito por uma velhinha repórter que falava mais do que os entrevistados e acabava esquecendo qual era o tema da reportagem.</h3><h3>Mais uma vez passa aquele informativo sobre a nova moeda paralela nacional, e Tomás até fica entusiasmado com os projetos de extensão dos 'Catandólares' para todo o estado.</h3><h3>Tomás passa a acompanhar os programas da Catantevê sempre aguardando as novidades sobre os Catandólares e as propostas de readministração das empresas por essa nova moeda.</h3><h3>E essas readministração tem se mostrado muito eficiente pois forma uma espécie de consórcio com as outras empresas que faz com que a demanda sempre seja atendida, sem sobra de produtos nas prateleiras.</h3><h3>Tomás fica sabendo que a 2ª fase do vestibular foi prorrogada para data indefinida, mas ele nem se importa muito, ele nem lembrava que tinha uma 2ª fase do vestibular.</h3><h3>Com o surgimento das empresas 'Catanlisadas' em São Paulo, Tomás deixou os estudos de lado e passou a trabalhar em uma dessa empresas, assim como várias pessoas que estavam em busca de um emprego melhor.</h3><h3>Várias empresas tentam essa aliança com os Catandólares, e as que não conseguem estão falindo pois sua demanda está sendo puxada pelas empresas catanlisadas.</h3><h3>Até mesmo seu pai deixaria seu emprego para buscar uma vaga em uma empresa catanlisada se a empresa onde ele trabalhasse não se catanlisasse antes.</h3><h3>Apesar de só viver para trabalhar e assistir televisão, Tomás, assim como sua família e todos os telespectadores da Catantevê estão animados pois agora o sinal de transmissão foi ampliado para toda a região sudeste e sul do Brasil, aumentando ainda mais o mercado dos Catandólares.</h3>",
		choices: [
		{
			choice: "Continuar",
			destination: 'dominarMente'
		}
		]
	},

	conversarPai: {
		title: "Conversar com seu Pai",
		image: "img/thomas_e_o_pai01.webp",
		story: "<h3>-- E aí, pai, você acha que essa história de Catandólar vai continuar crescendo?</h3><h3>-- ...</h3><h3> --Pai ?</h3><h3>O pai dele não desvia a atenção da televisão, parece até um jogador de fliperama num final de fase.</h3><h3>Tomás se assusta, toda sua família está vidrada na televisão, seu pai, sua mãe e seu irmãozinho assistindo o comercial da Catantevê.</h3><h3>Tomás se assusta mais ainda quando percebe o silêncio que paira na cidade.</h3><h3>A cidade está silenciosa, Tomás sai da casa e observa uma rua deserta em São Paulo, algo que ele só via em feriados prolongados, quando metade da população viaja para fora da cidade e outra metade fica dormindo dentro de casa.</h3><h3>O único som que ele escuta é o coral de televisões sintonizadas na Catantevê na vizinhança.</h3><h3>Tomás espera o espanto passar para se dar conta que tem algo muito estranho acontecendo, isso não pode ser natural.</h3><h3>O ronco do motor de uma moto desperta Tomás de seus pensamentos; aos poucos, os sons noturnos da grande cidade estão voltando, os carros passando pelas ruas, pessoas conversando,...</h3><h3>Dentro da sua casa, a movimentação volta ao normal, ele encontra seu irmão indo para a cozinha e seus pais conversando em frente à televisão. A transmissão da Catantevê acabou, eles estão assistindo um programa de variedades em outro canal.</h3><h3>Ele arrisca uma conversa mais uma vez:</h3><h3>-- Pai?</h3><h3>-- Oi filho...</h3><h3>-- Tudo bem?</h3><h3>-- Tudo bem, e você...</h3><h3>-- Tudo certo...</h3><h3>-- ...</h3><h3>-- Pai, você acha que esse plano econômico da Catantevê vai funcionar?</h3><h3>-- Mas é claro, quando as empresas adotam esse plano de readministração, elas autamaticamente aderem à uma cooperativa que redireciona a demanda, possibilitando uma melhor estruturação e geração de empregos...</h3><h3>-- Tá legal pai, mas essa história de lançar uma nova moeda é ficção, é um golpe, quando a coisa desabar, os donos dessa tevê ficam felizes e contentes com o dinheiro de verdade que eles pegaram daqueles que pegaram a moeda deles...</h3><h3>-- De maneira alguma filho, durante o período de transição ambas as moedas são utilizadas, sendo que os Catandólares são utilizados apenas para grandes valores.</h3><h3>Sem argumentos para discutir com seu pai, que parece ter decorado as falas dos intervalos da Catantevê, Tomás irá:</h3>",
		choices: [
		{
			choice: "Ir Dormir",
			destination: "irDormir"
		},
		{
			choice: "Tentar Acesso na Deep Web",
			destination: "acessarInternet"
		}
		]
	},

	dominarMente: {
		title: "Ter a Mente Dominada",
		image: "img/vida_dura.webp",
		story: "<h3>E assim, Tomás viveu feliz para sempre assistindo a Catantevê quando chegava em casa depois de mais um dia de trabalho.</h3><p><h2 align='center'>FIM</h2></p><h3>E então? O que você achou de nossa historinha interativa?</h3><h3>	Não gostou? Estranhou? Não entendeu? Achou boba?</h3><h3>Se você estranhou, você está na pista certa; um pouco tarde agora, pois Tomás já se tornou mais uma ovelha no rebanho, mas volte o tempo e talvez dessa vez você perceba o que está errado...</h3>",
		choices: [
		{
			choice: "Começar Novamente",
			destination: "intro"
		}
		]
	},

	pegarCopo: {
		title: "Pegar Copo de Água",
		image: "img/indo_cozinha.webp",
			story: "<h3>Tomás tenta desviar os olhos da televisão enquanto passa pela sala, mas...</h3><h3>Misteriosamente, essa decisão não depende apenas dele. Tomás precisará ter muita força de vontade para escapar da irresistível vontade de assistir televisão.</h3><h3> Chegou a hora de jogar os dados, conferindo a ficha de Tomás, você perceberá que ele tem uma grande força de vontade, pois enquanto uma pessoa normal tem o atributo Vontade igual a 6, a Característica Psíquica Vontade Forte(2) deixa a Vontade de Tomás igual a 8.</h3> <h3>Para ter sucesso em um Teste de Vontade, você deve rolar os 2D6 e conseguir um número igual ou menor a Vontade de Tomas.</h3>",
		choices: [
		{
			choice: "Rolar Dados",
			destination: "rolarDados03"
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
		story: "<h3>Tomás conclui que tem coisa estranha nisso aí, ele não entende como esse plano pode estar dando certo em todo o interior do estado e já começando na capital.</h3><h3>Que motivo alguém que não faz parte dessa cooperativa aceitaria essa nova moeda?<h3>Você acha que Tomás deve:</h3>",
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

	rolarDados03: {
		title: "",
		story: "",
		choices: [
		{
			choice: "",
			destination: ""
		}
		]
	},

	irDormir: {
		title: "Ir Dormir",
		image: "img/familia_vendo_tv.webp",
		story: "<h3>Depois de uma noite de sono agitada por pesadelos sobre uma invasão de discos-voadores, Tomás passa mais um dia tentando entender o que está acontecendo com o estado de São Paulo.</h3><h3>Ele não sabe se ainda não entendeu quais as vantagens dos Catandólares por ter passado esse tempo todo estudando ou se todos estão sofrendo uma espécie de dominação mental e ele escapou por ter ficado estudando esse tempo todo.</h3><h3>Com o final da tarde, seu pai e seu irmão Jonas voltam para casa, e com a noite, começa a programação da Catantevê.</h3><h3>E com o início da programação da Catantevê, Tomás percebe que toda sua família se acomoda no sofá e esquece que existe um mundo fora da televisão.</h3><h3>Com medo de olhar para a televisão, Tomás fica olhando os olhos vidrados de seu irmão; para alguém que não fica quieto por mais de 5 minutos, ele está completamente chapado, mais ainda do que quando ele fica jogando no computador.</h3><h3>Todos eles estão hipnotizados pela televisão!</h3><h3>Tomás sabe que olhar para a televisão não é uma alternativa, o que fazer para tentar acordar sua família?</h3>",
		choices: [
		{
			choice: "Desligar a TV",
			destination: "desligarTV"
		},
		{
			choice: "Chacoalhar o Pai",
			destination: "chacoalharPai"
        }
		]
	},

	acessarInternet: {
		title: "Acessar a Internet",
		image: "img/thomas_pesquisando.webp",
		story: "<h3>Tomás volta para o seu quarto e liga seu computador. Há muito tempo não o utiliza para outra coisa senão se atualizar sobre os possíveis temas de vestibular, através das notícias. Mas agora quer ter acesso a mais fonte de dados além das barreiras da internet tradicional, através do acesso à Deep Web.</h3><h3>Um ser humano normal, com apenas os conhecimentos básicos de informática, teria de fazer um teste na Habilidade Operação [computadores] para descobrir como acessar a Deep Web, mas como Tomás tem a Habilidade Hacker [computadores], o teste é desnecessário. Ele sabe que precisa fazer o download da versão mais atualizada do navegador TOR, antes de mais nada.</h3><h3>Após o download terminar, Tomás realiza a instalação e executa o TOR. Ele espera que sua a navegação não fique lenta no seu computador sem atualização de hardware a algum tempo. Pesquisando sobre a Catanteve, algumas páginas, sem muita confiabilidade, expõe a ligação da empresa com algum tipo de serviço de rastreamento por satélite do Oriente Médio. Em um diretório aberto em algum servidor privado, Tomás encontra uma criptopasta.</h3><h3>Para acessar o conteúdo dela, será necessário um teste da Habilidade Hacker [computadores], que Tomás tem no nível 1. Role os 2D6 e tente tirar menos de 7:</h3>",
		choices: [
		{
			choice: "Rolar Dados",
			destination: "rolarDados09"
		}
		]
	},

	desligarTV: {
		title: "Desligar a TV'",
		image: "img/tv_desligada.webp",
		story: "<h3>Sem olhar para a tela, Tomás apalpa a televisão em busca dos botões, encontra e desliga.</h3><h3>Automaticamente, sem desviar os olhos da tevê, sua mãe ergue o controle remoto e religa a tevê.</h3><h3>Tomás não se dá por vencido e puxa a tomada da televisão. Mais uma vez sua mãe ergue o controle remoto sem conseguir resultado, seu pai se ergue do sofá e caminha até a televisão.</h3><h3>Tomás tenta chamar a atenção dele no caminho mas ele nem percebe a presença do filho e fica apertando o botão da televisão.</h3><h3>Depois de quinze segundos tentando chamar a atenção de todos, Tomás percebe aos poucos eles voltam ao normal.</h3><h3>-- Será que acabou a força ?— Pergunta sua mãe.</h3><h3>-- Claro que não, mãe, olha a luz acesa, foi a televisão que quebrou – tenta explicar Jonas.</h3><h3>-- Gente, vocês tem que me escutar... – Tomás tenta explicar a situação mas todos estão preocupados com a televisão.</h3><h3>O pai de Tomás que está de pé encontra o problema: -- Calma, já achei, foi a tomada que soltou, esperem aí que eu vou ligar...</h3>",
		choices: [
		{
			choice: "Deixar a Família Voltar a Transmissão",
			destination: 'voltarTransmissao'
		},
		{
			choice: "Explicar a Situação",
			destination: 'explicarSituacao'
		}
		]
	},

	chacoalharPai: {
		title: "Chacoalhar seu Pai",
		image: "img/thomas_e_o_pai02.webp",
		story: "<h3>-- Pai, acorda, presta atenção, olha aqui, pai...</h3><h3>O pai de Tomás começa a acordar, ainda sem saber o que está acontecendo, assim como seu irmãozinho e sua mãe.</h3><h3>-- Seu Geraldo, olha aqui, sou eu, para de olhar para a tevê!</h3><h3>-- Tomás, o que aconteceu, o que você está fazendo?</h3>",
		choices: [
		{
				choice: "Continuar",
				destination: "explicarSituacao"
		}
		]
	},

	voltarTransmissao: {
		title: "Deixar a Família Voltar a Transmissão",
		image: "img/familia_vendo_tv.webp",
		story: "<h3>Tomás fica com medo de interferir de novo e volta para o seu quarto, deixando eles assistindo a televisão.</h3><h3>Quando percebe que a transmissão acabou, ele volta para a sala e tenta discutir o que sabe.</h3><h3>Você ache que Tomás deve ter uma:</h3>",
		choices: [
		{
			choice: "Discussão Leve",
			destination: "discussaoLeve"
		},
		{
			choice: "Discussão Pesada",
			destination: "conversarPai"
		}
		]
	},

	explicarSituacao: {
		title: "Explicar Situação",
		image: "img/thomas_e_o_pai02.webp",
		story: "<h3>-- Pai, olha aqui, vocês têm que parar de assistir televisão!</h3><h3>Seu irmãozinho se mete na conversa: -- Para de encher Tomás, sai fora que você está atrapalhando...</h3><h3>--Por que isso, filho? – Pergunta sua mãe assustada.</h3><h3>-- Vocês não percebem, mas vocês estão sendo hipnotizados por essa Catantevê, que dizer, não é figurado, vocês estão sendo dominados de verdade...</h3><h3>Sua mãe vai para a cozinha e seu pai continua a discutir com ele:</h3><h3>-- Tomás, isso é um absurdo, de quem você ouviu isso?</h3><h3>-- Não, eu não ouvi de ninguém pai, eu vi, eu vi vocês aí, na frente da televisão completamente travados.</h3><h3>-- Filho, isso não faz sentido, você andou exagerando em algum tipo de estimulante químico para ficar estudando de madrugada?</h3><h3>Enquanto escuta sua mãe conversando baixo no telefone da cozinha, Tomás tenta se livrar das acusações de seu pai: -- Não pai, de jeito nenhum, eu nunca nem cheguei perto disso, o que eu estou falando é verdade, você tem que acreditar em mim!</h3><h3>",
		choices: [
		{
			choice: "Ouvir Ligação da Mãe",
			destination: "ouvirLigacao"
		},
		{
			choice: "Continuar a Discussão",
			destination: "contarConspiracao"
		}
		]
	},

	discussaoLeve: {
		title: "Discussão Leve",
		image: "img/dando_moeda.webp",
		story: "<h3>Tomás puxa conversa com seu pai sobre o progresso dos Catandólares e ele se mostra animado com a nova moeda, tão animado que até já aderiu ao novo plano, e ele até dá para Tomás uma moeda de Catandólar.</h3><h3>O Catandólar vale mais do que a moeda corrente nacional, o Real, aliás, o Real é apenas utilizado como troco para o Catandólar.</h3><h3>A moeda de Catandólar é parecida com uma medalha, ela é grande e seu centro é feito de outro metal.</h3><h3>Tomás deve:</h3>",
		choices: [
		{
			choice: "Examinar a Moeda",
			destination: "examinarMoeda"
		},
		{
			choice: "Prestar Atenção às Propagandas",
			destination: "falhaRolar01"
		}
		]
	},

	ouvirLigacao: {
		title: "Ouvir Ligação da Mãe",
		image: "img/misterio.webp",
		story: "<h3>Você foi contaminado pelo clima de conspiração da história e acha que a mãe de Tomás está conspirando contra ele, certo? Ou então, você já leu essa história antes e não se deu bem pelo caminho que pegou e decidiu passar por aqui para ver o que se passa?</h3><h3>Em certos momentos de uma história de RPG, o jogador até percebe o que está acontecendo e tem condições de tomar decisões que evitariam muitas encrencas para o personagem, mas, sejamos honestos, se fosse realmente você na pele de Tomás, por mais paranóias que estivessem passando pela sua cabeça, você não iria deixar o seu pai falando sozinho achando que sua mãe estava tramando algo contra você, não é mesmo?</h3>",
		choices: [
		{
			choice: "Continuar",
			destination: 'contarConspiracao'
		}
		]
	},

	examinarMoeda: {
		title: "Examinar a Moeda",
		image: "img/olhando_moeda.webp",
		story: "<h3>Tomás leva a moeda para o seu quarto e começa a forçar o pequeno círculo interno da moeda com uma faquinha.</h3><h3>Prensando a moeda numa gaveta e martelando a faquinha com a sola de um sapato, Tomás consegue destacar o miolo da moeda que se quebra no chão.</h3><h3>Tomás se abaixa par recolher os pedaços e percebe que havia um microchip dentro daquela tampinha da moeda.</h3><h3>Tomás revirá a casa atrás de uma lente de aumento e acaba se conformando com uma régua de plástico com lente curva embutida.</h3><h3>Analisando o microchip, Tomás não consegue determinar se alguns risquinhos que ele está vendo são escritos ou fios, e durante a investigação, ele nota uma minúscula luzinha amarela piscando perto de um contato.</h3><h3>Enquanto Tomás tenta descobrir como funciona a bateria interna desse minúsculo aparelho, algo está acontecendo, faça um teste de percepção para Tomás.</h3><h3>O atributo Percepção de Tomás é 6, role 2D6: </h3>",
		choices: [
		{
			choice: "Continuar",
			destination: 'rolarDados04'
		}
		]
	},

	contarConspiracao: {
		title: "Contar sobre a Conspiração",
		image: "img/thomas_e_o_pai02.webp",
		story: "<h3>-- Esse plano econômico de Catandólares é ilegal, pai, é só parar para pensar que dá para perceber que isso é um golpe.</h3><h3>-- De maneira alguma filho, existe todo uma assistência jurídica que garante as operações, e em caso de...</h3><h3>-- Mas pai, essa assistência deve ser da própria Catantevê, pois se você apresentar essa moeda no resto do pais, você acha mesmo que isso vai funcionar?</h3><h3>-- Mas é claro, quando as empresas adotam esse plano de readministração, elas automaticamente aderem à uma cooperativa que redireciona a demanda, possibilitando uma melhor estruturação e geração de empregos...</h3><h3>-- Pai, eu não estava falando disso, eu estou tentando explicar que vocês estão tão hipnotizados pela televisão que não percebem que isso não tem valor fora do estado.</h3><h3>-- De maneira alguma filho, durante o período de transição ambas as moedas são utilizadas, sendo que os Catandólares são utilizados apenas para grandes valores.</h3><h3>O pai de Tomás começa a responder com frases feitas dos comerciais da Catantevê, a mãe dele volta para a sala e apresenta os mesmos 'argumentos'.</h3><h3>Enquanto discute, Tomás tenta descobrir alguma maneira de tirar eles desse transe.</h3><h3>Por meio de palavras ele está percebendo que não vai adiantar.</h3><h3>Durante a conversa, Tomás precisará de um teste de Percepção para perceber que algo estranho está acontecendo.</h3><h3>O atributo Percepção de Tomás é 6, role 2D6:</h3>",
		choices: [
		{
			choice: "Continuar",
			destination: 'rolarDados05'
		}
		]
	},

	rolarDados04: {
		title: "",
		story: "",
		choices: [
		{
			choice: "",
			destination: ""
		}
		]
	},

	sucessoRolar04: {
		title: "Sucesso no Teste de Percepção",
		image: "img/moeda_aberta.webp",
		story: "<h3>Durante a investigação, Tomás escuta o barulho de um carro estacionando na frente de sua casa, escuta também o rádio do carro chiar a frase: -- ... prosseguir com apreensão, código 1. --, depois, escuta o portão de sua casa sendo aberto.</h3><h3>Tomás vai:</h3>",
		choices: [
		{
			choice: "Pegar o Microchip",
			destination: 'pegarMicrochip'
		},
		{
			choice: "Deixar o Microchip",
			destination: 'correrFundos'
		}
		]
	},

	falhaRolar04: {
		title: "Falha no Teste de Percepção",
		image: "img/policial.webp",
		story: "<h3><h3>A maçaneta da porta gira, mas está trancada.</h3><h3>Tiros explodem na porta! Seu pai e sua mãe param de falar e ficam olhando para a porta, seu irmãozinho cai e fica imóvel no chão. </h3><h3>A porta é arrombada com estrondo por um policial de óculos escuros empunhando uma arma.</h3><h3>Você vai:</h3>",
		choices: [
		{
			choice: "Ficar pra Conversar",
			destination: 'ficarConversar'
			},
		{
			choice: "Fugir pro Quintal",
			destination: 'fugirQuintal '
		}
		]
	},

	pegarMicrochip: {
		title: "",
		story: "",
		choices: [
		{
			choice: "",
			destination: ""
		}
		]
	},

	rolarDados05: {
		title: "",
		story: "",
		choices: [
		{
			choice: "",
			destination: ""
		}
		]
	},

	sucessoRolar05: {
		title: "Sucesso no Teste de Destreza",
		image: "img/thomas_e_o_pai02.webp",
		story: "<h3>Durante a conversa, Tomás escuta o barulho de um carro estacionando na frente de sua casa, escuta também o rádio do carro chiar a frase: -- ... prosseguir com apreensão, código 1. --, depois, escuta o portão de sua casa sendo aberto.</h3><h3>Dentro de casa, o pai e o irmão de Tomás continuam apresentando argumentos decorados da Catantevê para ele, mas sua mãe parou de falar e está olhando para a porta.</h3><h3>Tomás deverá:</h3>",
		choices: [
		{
			choice: "Ir pra Sala",
			destination: 'falhaRolar04'
		},
		{
			choice: "Correr pros Fundos",
			destination: 'correrFundos'
		}
		]
	},

	correrFundos: {
		title: "Correr para o Fundo da Casa",
		image: "img/correndo_quintal.webp",
		story: "<h3>Tomás corre pela casa na direção do quintal, deixando para trás seus pais e seu irmão em estado catatônico.</h3><h3>Ele escuta tiros vindos da sala e escuta uma ordem: -- Tomás de Oliveira, aqui é a polícia. Fique parado com as mãos na cabeça.<h3 align = 'justify'>Fugindo da ordem, Tomás chega no quintal, sobe no tanque e tenta pular o muro.</h3 ><h3>Pular o muro de sua casa apoiado no tanque até que seria uma tarefa fácil para Tomás se ele estivesse acostumado com isso, MAS, devido à sua morosa vida de estudos, Tomás precisará de um teste de Destreza para escapar dessa.</h3><h3>Como não tem nenhum bônus de Habilidades Físicas, tais quais Acrobacia ou Escalar, Tomás contará apenas com o número de seu Atributo Destreza, que atualmente é igual a 6.</h3><h3>Vamos ao teste:</h3>",
		choices: [
		{
			choice: "RolarDados",
			destination: 'rolarDados06'
		}
		]
	},

	rolarDados06: {
		title: "",
		story: "",
		choices: [
		{
			choice: "",
			destination: ""
		}
		]
	},

	sucessoRolar06: {
		title: "Sucesso no Teste de Destreza",
		image: "img/suv01.webp",
		story: "<h3>Pulando para o quintal do vizinho, Tomás escuta tiros raspando o muro e continua sua fuga por um corredor escuro, pula outro muro, chega em um jardim, abre o portão e já  está na calçada.</h3><h3>Mas ainda não está livre...</h3><h3>O carro da polícia fez uma curva e acelera em sua direção.</h3><h3>Tomás corre para o outro lado e se assusta com um carro vermelho que derrapa no meio da rua e solta rajadas de metralhadora na direção da viatura policial que pára e responde fogo.</h3><h3>Começa o tiroteio.</h3>",
		choices: [
		{
			choice: "Continuar",
			destination: 'fugirTiroteio'
		}
		]
	},

	falhaRolar06: {
		title: "Falha no Teste de Destreza",
		image: "img/correndo_quintal.webp",
		story: "<h3>Tomás não foi rápido o suficiente, e o policial não perdoa, dispara um tiro nele.</h3><h3>Tomás pode tentar se esquivar do tiro, pois ele já sabia que estava sendo alvejado.</h3><h3>O policial tem 7 de Destreza e somado a isso, ele tem 6 de bônus da arma e da sua habilidade e mais 9 pontos tirados nos 2D6, resultando em 22 pontos.</h3><h3>E Tomás só tem seus 6 pontos de Destreza para somar aos 2D6.</h3><h3>Se o número obtido dessa soma for maior do que os 22 pontos do policial, leia o texto... bom,... você sabe fazer contas? Se sabe, você pode perceber que nunca um número maior do que 22 será obtido nessa soma, mas se um 12 for conseguido nos 2D6 (duplo 6), Tomás conseguiu um sucesso crítico e consegue escapar da bala.</h3>",
		choices: [
		{
			choice: "Rolar Dados",
			destination: 'rolarDados07'
		}
		]
	},

	falhacriticaRolar06: {
		title: "Falha Crítica no Teste de Destreza",
		image: "img/policial_na_rua.webp",
		story: "<h3>Tomás leva um tombo do tanque, não chega a levar danos, sofrendo apenas algumas escoriações, mas esse tombo dá tempo ao policial de encostar o cano da arma na cabeça de Tomás.</h3><h3>Sem ter como reagir, Tomás é arrastado de volta para a sala.</h3>",
			choices: [
			{
				choice: "Voltar pra Sala",
				destination: 'ficarConversar'
		}
		]
	},

	ficarConversar: {
		title: "Ficar pra Conversar com o Agente",
		image: "img/policial_na_rua.webp",
		story: "<h3>-- Você é Tomás de Oliveira?</h3><h3>-- Sim, sou eu, eu estou desarmado. – Tomás responde assustado erguendo as mãos.</h3><h3>Um outro policial surge: -- Fique com os braços erguidos e nos acompanhe.</h3><h3>Tomás tenta chamar seu pai, que está paralisado em estado de catatônia.</h3><h3>Um policial puxa Tomás pelo braço, quando ele tenta encostar em seu pai, e o leva para fora da casa.</h3><h3>Já na calçada, quando um terceiro policial estava abrindo a porta traseira do camburão, um carro vermelho faz uma curva derrapando os pneus e alguém começa a atirar uma rajada de metralhadora de dentro do carro na direção de Tomás.</h3><h3>Os policiais se jogam no chão junto com Tomás e o tiroteio começa.</h3>",
		choices: [
		{
			choice: "Voltar pra Sala",
			destination: 'fugirTiroteio'
		}
		]
	},

	fugirQuintal: {
		title: "Fugir pelo Quintal",
		image: "img/correndo_quintal.webp",
		story: "<h3>Um policial tentando fazer pontaria em Tomás e ele tentando sair correndo!</h3><h3>Vamos ver quem é mais rápido numa disputa de iniciativa.</h3><h3>Nem o policial nem Tomás tem bônus de alguma Habilidade Física para aumentar sua iniciativa, portanto, ambos contarão apenas com sua Destreza.</h3><h3>O policial tem Destreza 7 e rolando os 2D6, um 5 foi obtido.</h3><h3>A iniciativa do policial é 12:</h3><h3>Role 2D6 e some com a Destreza de Tomás, se um número menor ou igual a 12 for obtido, o policial fez pontaria antes, se um número maior do que 12 for obtido, Tomás conseguir correr para trás da parede a tempo.</h3>",
		choices: [
		{
			choice: "Rolar Dados",
			destination: 'rolarDados08'
		}
		]
	},

	rolarDados07: {
		title: "",
		story: "",
		choices: [
		{
			choice: "",
			destination: ""
		}
		]
	},

	sucessoRolar07: {
		title: "Sucesso no Teste de Destreza",
		image: "img/suv01.webp",
		story: "<h3>Pulando para o quintal do vizinho, Tomás escuta tiros raspando o muro e continua sua fuga por um corredor escuro, pula outro muro, chega em um jardim, abre o portão e já  está na calçada.</h3><h3>Mas ainda não está livre...</h3><h3>O carro da polícia fez uma curva e acelera em sua direção.</h3><h3>Tomás corre para o outro lado e se assusta com um carro vermelho que derrapa no meio da rua e solta rajadas de metralhadora na direção da viatura policial que pára e responde fogo.</h3><h3>Começa o tiroteio.</h3>",
		choices: [
		{
			choice: "Continuar",
			destination: 'fugirTiroteio'
		}
		]
	},

	falhaRolar07: {
		title: "Falha no Teste de Destreza",
		image: "img/thomas_caido.webp",
			story: "<h3>Tomás é baleado, rolando 2D6 para determinar a área de acerto, um 2 é conseguido e rolando 1D6 para determinar o dano da arma, um 3 é calculado.</h3><h3>Tomás levou 3 danos na área B, esses 3 pontos são diminuídos de seu Físico que cai de 5 para 2...<h3>Sentindo muita dor na área B, que são os órgãos vitais, Tomás...</h3><h3>Parem o jogo um instantinho, por favor...</h3><h3>Eu disse órgãos vitais?</h3><h3>Bom, acho que eu me enganei, se você consultar as regras sobre áreas do corpo, você vai notar que danos na área B: órgãos vitais, são multiplicados por 3, então, na verdade, Tomás levou 9 danos...</h3><h3>Talvez esse não seja o FIM que você esperava, mas tente de novo e talvez, você tenha mais sorte da próxima vez...</h3>",
		choices: [
		{
			choice: "Começar Novamente",
			destination: 'intro'
		}
		]
	},

	aceitarCarona: {
		title: "Aceitar Carona",
		image: "img/interior_suv.webp",
			story: "<h3>Correndo agachando aproveitando a pausa nos tiros dos policiais, Tomás pula para dentro do carro ficando enroscado nas pernas do motorista.</h3><h3>A metralhadora para de pipocar.</h3><h3>O motorista empurra sua cabeça engatando a marcha do carro e acelerra, o carro sai de ré.</h3 ><h3>Enquanto Tomás se puxa para o banco do passageiro, uma bala se espatifa no parabrisa do carro, que deve ser blindado.</h3><h3>O carro gira, a porta se fecha e Tomás se ajeita no banco, olhando para trás, ele vê um homem de cabelos grisalhos segurando uma metralhadora e vestindo uma batina de padre.</h3><h3>Enquanto faz zigue-zague pelo trânsito, o motorista negro pergunta para Tomás: -- E então, você também achou a programação da televisão uma porcaria e resolveu sair para dar uma volta?</h3><h3>Parece que agora, finalmente Tomás terá algumas respostas, mas isso fica para outro episódio...</h3><p align='center'><h2>FIM</h2></p><h3>Bom, talvez  esse não seja o fim...</h3>",
		choices: [
		{
				choice: "Continuar",
				destination: 'testeMicrochip'
			}
		]
	},

	fugirTiroteio: {
		title: "Fugir do Tiroteio",
		image: "img/interior_suv.webp",
		story: "<h3>Tentando se arrastar para fora do tiroteio, Tomás escuta um grito vindo do carro vermelho: -- Ei, camarada! Entra aqui, rápido!!!</h3><h3>Tomás olha para o carro e vê um negro com cabelos raspados e traje social sentado no banco do motorista abrindo a porta do carro vermelho, enquanto alguém dispara a metralhadora do banco traseiro iluminando a noite e inibindo os disparos dos policiais, que tentam se esconder atrás da viatura.</h3><h3>Sem tempo para negociar e com os policiais no caminho de volta para o portão de sua casa, Tomás tem que continuar.</h3>",
		choices: [
			{
				choice: "Pegar Carona",
				destination: 'testeMicrochip'
			},
			{
				choice: "Fugir pela Esquina",
				destination: 'fugirEsquina'
			}
		]
	},

	testeMicrochip: {
		title: "",
		story: "",
		choices: [
			{
				choice: "",
				destination: ""
			}
		]
	},

	fugirEsquina: {
		title: "Fugir pela Esquina",
		image: "img/thomas_no_onibus.webp",
		story: "<h3>Tomás se arrasta até a esquina para fugir do alcance dos tiros, depois se levanta e corre, corre muito até conseguir pegar um ônibus.</h3><h3>Para onde? Ele não sabe para onde o ônibus está indo. Não faz diferença.</h3><h3>Em menos tempo do que um comercial de televisão, sua vida tranquila foge debaixo de seus pés.</h3><h3>Ele está apenas com a roupa do corpo, sozinho, com a polícia e um bando de terroristas na sua cola e todos só pensam em assistir televisão.</h3><h3>O cobrador do ônibus está assistindo algo em uma minitevê.</h3><h3>Um passageiro está esticando o pescoço para acompanhar o programa também.</h3><h3>Mas Tomás tem medo do que pode estar passando naquela minitevê...</h3><p><h2 align='center'>FIM</h2></p><h3>Ou início de uma nova aventura.</h3>",
		choices: [
		{
			choice: "Continuar",
			destination: 'irFinal'
		}
		]
	},

	rolarDados08: {
		title: "",
		story: "",
		choices: [
		{
			choice: "",
			destination: ""
		}
		]
	},

	sucessoRolar08: {
		title: "Sucesso no Teste de Destreza",
		image: "img/suv01.webp",
		story: "<h3>Pulando para o quintal do vizinho, Tomás escuta tiros raspando o muro e continua sua fuga por um corredor escuro, pula outro muro, chega em um jardim, abre o portão e já  está na calçada.</h3><h3>Mas ainda não está livre...</h3><h3>O carro da polícia fez uma curva e acelera em sua direção.</h3><h3>Tomás corre para o outro lado e se assusta com um carro vermelho que derrapa no meio da rua e solta rajadas de metralhadora na direção da viatura policial que pára e responde fogo.</h3><h3>Começa o tiroteio.</h3>",
		choices: [
		{
			choice: "Continuar",
			destination: 'fugirTiroteio'
			}
		]
	},

	falhaRolar08: {
		title: "Falha no Teste de Destreza",
		image: "img/thomas_caido.webp",
		story: "<h3>Tomás é baleado, rolando 2D6 para determinar a área de acerto, um 2 é conseguido e rolando 1D6 para determinar o dano da arma, um 3 é calculado.</h3><h3>Tomás levou 3 danos na área B, esses 3 pontos são diminuídos de seu Físico que cai de 5 para 2, e como dizem as regras: 'A cada 2 pontos de Físico perdido, 1 de Destreza é baixado' e sua Destreza cai de 6 para 5. Atenção para futuros testes que envolvam Destreza, agora ficou mais difícil.</h3><h3>Sentindo muita dor na área B, que são os órgãos vitais, Tomás...</h3><h3>Parem o jogo um instantinho, por favor...</h3><h3>Eu disse órgãos vitais?</h3><h3>Bom, acho que eu me enganei, se você consultar as regras sobre áreas do corpo, você vai notar que danos na área B: órgãos vitais, são multiplicados por 3, então, na verdade, Tomás levou 9 danos...</h3><h3>Talvez esse não seja o FIM que você esperava, mas tente de novo e talvez, você tenha mais sorte da próxima vez...</h3>",
		choices: [
		{
			choice: "Começar Novamente",
			destination: 'intro'
		}
		]
	},

	terMicrochip: {
		title: "Ter o Microchip",
		image: "img/explosao.webp",
			story: "<h3>O motorista se apresenta como Marcelo, e o padre da metralhadora no banco de trás como Josué.</h3><h3>Enquanto a SUV vermelha blindada transita pelas ruas de São Paulo, eles começam a colocar Tomás a par da grande conspiração que já engoliu o estado de São Paulo e pretende engolir o mundo, mas de repente, são fechados por uma viatura da polícia que acabou de virar a esquina.</h3><h3>Enquanto Marcelo freia o carro para evitar uma batida e tenta retornar, Josué pede para que Tomás abaixe o vidro do lado do passageiro e fique abaixado.</h3><h3>Marcelo não consegue um número muito bom em seu teste de motorista e o carro perde toda sua velocidade para fazer o retorno, dando tempo suficiente para um policial apoiar um lança-mísseis na janela da viatura.</h3><h3>-- Fomos rastreados – Josué grita – Só pode ser, para eles nos acharem tão rápido, nós fomos rastreados.</h3><h3>Sinto muito, mas o policial coseguiu um número muito bom no seu teste de pontaria com o lança-mísseis.<p><h2 align='center'>FIM</h2></p>",
				choices: [
					{
						choice: "Começar Novamente",
						destination: 'intro'
					}
				]
	},

	naoterMicrochip: {
		title: "Não Ter o Microchip",
		image: "img/padre.webp",
		story: "<h3>O motorista se apresenta como Marcelo, e o padre da metralhadora no banco de trás como Josué.</h3><h3>Enquanto a SUV vermelha blindada transita pelas ruas de São Paulo, eles começam a colocar Tomás a par da grande conspiração que já engoliu o estado de São Paulo e pretende engolir o mundo.</h3><h3>Enquanto dirige pelo trânsito, o motorista pergunta para Tomás: -- E então, você também achou a programação da televisão uma porcaria e resolveu sair para dar uma volta?</h3><h3>Parece que agora, finalmente Tomás terá algumas respostas, mas isso fica para outro episódio...</h3><p align='center'><h2>FIM</h2></p>",
		choices: [
		{
			choice: "Continuar",
			destination: 'irFinal'
		}
		]
	},

	rolarDados09: {
		title: "",
		story: "",
		choices: [
		{
			choice: "",
			destination: ""
		}
		]
	},

	sucessoRolar09: {
		title: "Sucesso no Teste de Hacker[computadores]",
		image: "img/thomas_pesquisando.webp",
		story: "<h3>Após descompactar, renomear, e aplicar um gerador de código para gerar senha, Tomás conseguiu acessar um diretório com três arquivos de imagens. A primeira contém uma reportagem do jornal o Regional, da Cidade de Catanduva, sobre o avistamento de OVNIs na região em torno da cidade, com uma tradução para o inglês. Inclusive, todo o restante do material está em inglês.</h3><h3>Para entender o conteúdo das duas outras imagens, Tomás terá de fazer um teste de Língua [inglês] (2), baseado em Inteligência (6 + 2). Role os dados para tentar tirar valor igual ou menor que 8:</h3>",
		choices: [
		{
			choice: "Rolar Dados",
			destination: 'rolarDados10'
		}
		]
	},

	falhaRolar09: {
		title: "Falha no Teste de Hacker[computadores]",
		image: "img/thomas_dormindo.webp",
		story: "<h3>Já um pouco cansado, você acaba se perdendo na sequência de procedimentos a serem aplicados à criptopasta, e depois de meia hora de tentativas sem sucesso, decide ir dormir.</h3>",
		choices: [
		{
			choice: "Ir Dormir",
			destination: 'irDormir'
		}
		]
	},

	rolarDados10: {
		title: "",
		story: "",
		choices: [
		{
			choice: "",
			destination: ""
		}
		]
	},

	sucessoRolar10: {
		title: "Sucesso no Teste de Língua[inglês]",
		image: "img/aliens.webp",
		story: "<h3>Você fica feliz em ver que seus esforços no estudo de inglês estão funcionando. A segunda imagem é um texto sobre o uso de, possivelmente, tecnologia alienígena, na fabricação da moeda da Catantevê. A terceira e última imagem mostram leituras eletromagnéticas feitas em uma moeda de Catandólar, mostrando que elas emitem ondas de energia em várias frequências, além de um aviso, sobre o rastreamento que pode ser feito a uma pessoa, se ela estiver de posse de uma.</h3><h3>Cansado, você vai pra cama.</h3>",
		choices: [
		{
			choice: "Ir Dormir",
			destination: 'irDormir'
		}
		]
	},

	falhaRolar10: {
		title: "Falha no Teste de Língua[inglês]",
		image: "img/thomas_dormindo.webp",
		story: "<h3>Já um pouco cansado, você desiste de digitar o texto contido na imagem no Google Tradutor, e decide ir dormir.<h3>",
		choices: [
		{
			choice: "Ir Dormir",
			destination: 'irDormir'
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
document.addEventListener ('DOMContentLoaded', function() {
	var button0 = document.querySelector('#button0');
	var button1 = document.querySelector('#button1');
	var button2 = document.querySelector('#button2');
	var button3 = document.querySelector('#button3');
	var content = document.querySelector('#content');

	//Iniciar a Aventura
	button0.addEventListener('click', function() {
		story = getStory ();
		renderScene ();
	})

	//Nova Janela com Site
	button1.addEventListener('click', function() {
		if (cont == 0)
		{
			window.open("https://operarpg.com.br", '_blank');
		}
		else
		{
			story = getStory ();
			renderScene ();
		}
	})

	//Instuções
	button2.addEventListener('click', function() {
		if (cont == 0)
		{
			instrucoes = true;
		}
		story = getStory ();
		renderScene ();
	})

	//Créditos
	button3.addEventListener('click', function() {
		if (cont == 0)
		{
			creditos = true;
		}
		story = getStory ();
		renderScene ();
	})
})


//Programação para Atualização do códigu HTML, Controle de Aletoriedade e de Itens
function renderScene()
{
	//verificacao de cenas
	var image = "";
	var titulo = "";

	if (instrucoes)
	{
		story.currentScene = "instrucoes";
		master = true;
		instrucoes = false;
	}

	if (creditos)
	{
		story.currentScene = "creditos";
		master = true;
		creditos = false;
	}

	//Renderização de Imagem
	if (!story[story.currentScene].image)
	{
		image = "<img></img>";
	}

	//Redenrização de Título
	if (story[story.currentScene].title == "Introdução")
	{
		titulo = story[story.currentScene].title;
	}

	//Variáveis de Aletoriedade
	dado1 = Math.floor(Math.random() * 6 + 1);
	dado2 = Math.floor(Math.random() * 6 + 1);
	dados = dado1 + dado2;

	//Controle de Aletoriedade
	switch (story.currentScene)
	{
		case ('rolarDados01'):
			if (dados <= 8)
			{
				story.currentScene = 'sucessoRolar01';
				swal('Valores obtidos: ' + dado1 + ' + ' + dado2 + ' = ' + dados + ' <= 8 (Sucesso)');
			}
			else
			{
				story.currentScene = 'falhaRolar01';
				swal('Valores obtidos: ' + dado1 + ' + ' + dado2 + ' = ' + dados + ' > 8 (Falha)');
			}
		break;
		case ('rolarDados02'):
			if (dados <= 8)
			{
				story.currentScene = 'sucessoRolar02';
				swal('Valores obtidos: ' + dado1 + ' + ' + dado2 + ' = ' + dados + ' <= 8 (Sucesso)');
			}
			else
			{
				story.currentScene = 'dominarMente';
				swal('Valores obtidos: ' + dado1 + ' + ' + dado2 + ' = ' + dados + ' > 8 (Falha)');
			}
		break;
		case ('rolarDados03'):
			if (dados <= 8)
			{
				story.currentScene = 'continuarEstudando';
				swal('Valores obtidos: ' + dado1 + ' + ' + dado2 + ' = ' + dados + ' <=8 (Sucesso)');
			}
			else
			{
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
				else
				{
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
	button0.addEventListener('click', function (){
		cont++;
		getInputValue(0);
	})

	if (button1 != null)
	{
		button1.addEventListener('click', function (){
			cont++;
			if (cont == 1 && master)
			{
				master = false;
				window.location.href='index.html';
			}
			getInputValue(1);
		})
	}
	if (button2 != null)
	{
		button2.addEventListener('click', function (){
			cont++;
			getInputValue(2);
		})
	}
	if (button3 != null)
	{
		button3.addEventListener('click', function (){
			cont++;
			getInputValue(3);
		})
	}
}

//Função de Seleção de Destino
function getInputValue (x) {
	var inputs = document.querySelectorAll('input[type="button"]');
	story.currentScene = inputs[x].getAttribute('data-destination');
	renderScene();
	return;

}

//Função de Captura da Seleção
function getInputs(){
	var input = ""
	if (!story[story.currentScene].choices){
		return ""
	}
	for(var i = 0; i < story[story.currentScene].choices.length; i++)
	{
		input += `
		<div>
			<center><input type="button" id="button${i}" data-destination=${story[story.currentScene].choices[i].destination} name="choices" class="button button${i}" value="${story[story.currentScene].choices[i].choice}"></center>
		</div>`
	}
	return input;
}
