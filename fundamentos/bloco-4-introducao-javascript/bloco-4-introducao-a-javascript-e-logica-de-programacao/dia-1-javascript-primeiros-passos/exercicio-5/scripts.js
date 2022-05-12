var status = "lista";

switch (status){
    case "aprovada":
        console.log("Parabens, você foi aprovada");
        break;
    
    case "lista":
        console.log("Você esta na lista de espera");
        break;

    case "reprovada":
        console.log("Você foi reprovada");
        break;
    default:
        console.log("Não se aplica")
}