let acces === prompt("etes-vous connecté?(Oui/Non");
let role === prompt("votre role?(admin, utilisateur, invité");
if (acces === Oui); {

    if (role === admin); {
        console.log("Bienvenue admin");

    } else if (role === utilisateur) {
        console.log("Bienvenue utilisateur")

    } else if (role === "invité") {
        console.log("Accès restreint(invité)");
    } else
        console.log("Role inconnu");
}

   } else if (accès === "non") {
    console.log("Veuillez vous connecter");
} else {
    console.log("Reponse invalide");
}