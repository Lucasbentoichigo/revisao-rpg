//1. Criação das variáveis principais
let nome = "Ichigo";
let classe = "Guerreiro";
let nivel = 16;
let vida = 3842;
let ouro = 1001;
let xp = 5200;


//2. Definição de constantes mágicas.
const NOMEARMA = "Zangetsu";
const DANOBASE = 160;
const NOMEARMADURA = "Glotonería";
const DEFESABASE = 44;

//3. Aplicação de operadores de atribuição.
xp += 150; // O personagem treinou e ganhou 150 xp.
ouro -= 30; // Comprou uma poção por 30 moedas de ouro.
vida += 40; // Usou a poção e recuperou 40 pontos de vida
let danoEncantado = DANOBASE * 2 // A arma foi encantada, e seu dano foi dobrado.

//4. Cálculo de atributos finais
ataqueTotal = nivel + danoEncantado;
defesaTotal = DEFESABASE + (nivel / 2);

//5. Avaliação de prontidão com operadores lógicos
vidaSuficiente = vida> 70;
ataqueForte = ataqueTotal > 60
nivelAvancado = nivel >= 10;
podeEnfrentarGuardiao = vidaSuficiente && (ataqueForte || nivelAvancado);

//6. Geração da Lore do personagem
console.log(`🧾 LORE DO HERÓI: ${nome}`);
console.log("");
console.log(`${nome}, o ${classe} da Lâmina da lua, percorre os campos de batalha do mundo vazio.`);
console.log(`Empunhando sua ${NOMEARMA}, desfere golpes que cortam até mesmo o destino.`);
console.log(`A arma ${NOMEARMA} foi encantada e seu dano foi dobrado, ficando com ${danoEncantado} pontos de dano`);
console.log(`${nome} é respeitado até pelos heróis mais temidos de racoon city.`);
console.log(`Alcançou o nível, ${nivel} ficando com um ataque total de ${ataqueTotal} pontos de dano.`);
console.log(`Suas defesas, reforçadas pela ${NOMEARMADURA}, alcançam ${defesaTotal} pontos de proteção.`);
console.log(`Após árduos combates, acumulou ${xp} de XP, alcançando o nivel ${nivel} se tornando um herói respeitado`);
console.log(`seguidamente de uma das missões, ${nome} se feriu e comprou uma poção recuperando ${vida} pontos de vida`);
console.log(`Depois de comprar a poção,${nome} ficou com ${ouro} moedas restantes, preparado para trocas nos mercados.`);
console.log(`${nome} é reconhecido como um dos principais heróis de racoon city, e por isso ele decidiu ir a missão de derrotar o guardião do Hueco Mundo.`);
console.log(`Vida suficiente? ${vidaSuficiente} | Ataque forte? ${ataqueForte} | Nível avançado? ${nivelAvancado}`);
console.log(`Pode enfrentar o Guardião? ${podeEnfrentarGuardiao}`);

let manaAtual = 3000;
let manaMaxima = 3750;
let localAtual = "Racoon City";
let missaoAtual = "Derrotar o Guardião do Hueco Mundo";
let missoesCompletadas = 301;

console.log(`Antes de ir a missão de ${missaoAtual}, ${nome} decide ir ao mercado e comprar algumas poções.`);

if (ouro >= 180) {
    console.log(`${nome} comprou três poções de recuperação de vida e três poções de recuperção de mana.`);
    console.log(`Após comprar as poções ${nome} decide ir ao Palácio de Las Noches, onde o guardião do Hueco Mundo está.`);
};


console.log(`Chegando no palácio de Las Noches, ${nome} precisaria comprovar sua honra para enfrentar o guardião, e para isso ele precisaria ter completado 300 missões `);

if(missoesCompletadas >= 300) {
    console.log("Você é digno de enfrentar o guardião do Hueco Mundo, portanto o portão onde está o guardião se abrirá");
    console.log(`${nome} entra pelo portão e vai de encontro ao guardião do Hueco Mundo`);
    console.log(`O Guardião ataca e ${nome} tem duas opções`); 
}

let desviarAtaque = true;
if (desviarAtaque) {
    console.log(`${nome} desvia do ataque do Guardião e decide dar um ataque mortal para derrotar o guardião, sacrificando toda sua Mana.`);
    if (manaMaxima >= 3500) {
        console.log(`${nome} acerta seu ataque especial, Getsuga Tensho no guardião e o derrota. Liberando o portão em direção ao Hueco Mundo.`)
    };
    console.log(`${nome} decide entrar no portal que o levaria ao Hueco Mundo`);
    console.log(`Chegando ao Hueco Mundo ${nome} decide ir atrás de Mr.X a encarnação do desespero para o enfrentar em uma luta`);
    console.log(`${nome} chega ao local de invocação de Mr.X e utilizando seu próprio sangue invoca Mr.X `);
    console.log("No momento de sua invocação o ambiente fica sombrio e pesado, como se fosse a pressão do fundo do oceano");
    console.log(`No momento que Mr.X chega ele dá a proposta de ${nome} se render e se juntar a ele para poupar sua vida`);
    let render = false;
    if (!render) {
        console.log(`${nome} nega a desitência e desafia Mr.X para um combate até a morte`);
        console.log(`${nome} e Mr.X começam sua feroz batalha`);
        console.log(`Porém em poucos minutos ${nome} não consegue fazer nada durante a luta, a luta está totalmente unilateral, uma hora Mr.X bate e na outra ${nome} apanha`);
        console.log(`Prestes a morrer, ${nome} usa todas as poções, e decide ir para o recurso final`);
        console.log(`${nome} utiliza um encantamento que após o limite, a espada se quebraria`);
        console.log(`O encantamento faz com que todos os atributos atinjam o maximo, mas, após isso todos os atributos base iriam cair pela metade`);
        console.log("Mr.X decide usar seu ataque mais poderoso, a lança del relampago");
        parryComContraAtaque = true;
        if (!desviarAtaque) {
            console.log(`O ataque de Mr.X pulveriza completamente ${nome}`); 
        } else if (desviarAtaque && parryComContraAtaque) {
            console.log(`${nome} desvia do ataque, porém rapidamente Mr.X lança outro ataque mas ${nome} dá um parry perfeito, conseguindo lançar seu ataque especial com encantamento.`);
            console.log(`Após usar o ataque e derrotar Mr.X, ${NOMEARMA} fica em pedaços `);
            
        } else {
            console.log(`Mr.X mata ${nome} sem dificuldades.`);
            
        }
        
           
    } else {
        console.log(`Mr.X segura na mão de ${nome} e o teleporta para o reino do desespero, onde ${nome} sofrerá pela eternidade.`);
        
    }
    
    
    
    
} else {
    console.log(`O Guardião acerta um golpe mortal em ${nome} e a jornada acaba,pois ${nome} foi completamente massacrado e morto pelo ataque certeiro do guardião`)
};




