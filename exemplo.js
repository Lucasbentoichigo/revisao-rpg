// Dados iniciais
let vida = 60;
let energia = 40;
let xp = 800;
let ouro = 200;
let nivel = 3;

// Parte 1 - Estado de saúde
if (vida >= 80) {
    console.log("Ayla está em ótima forma para viagem!");
} else if (vida >= 40) {
   console.log("Ayla está ferida, mas pode continuar");
} else {
    console.log("Ayla precisa descansar!");
}

// Parte 2 - Missão
if (vida >= 50 && energia >= 50) {
    console.log("Ayla entra em batalha com confiança");
} else {
    console.log("Ayla precisa descansar antes de seguir.");
}

// Parte 3 - Nivel
if (xp >= 1000) {
    nivel++;
    console.log(`Ayla subiu para o nivel ${nivel}`);
    xp = 0;
} else {
    console.log("Continue lutando para subir de nível")
}

// Parte 4 - Compra

if (ouro >= 300) {
    console.log("Fala 300, fala 300");
} else {
    console.log("Ayla não tem ouro suficiente.")
}