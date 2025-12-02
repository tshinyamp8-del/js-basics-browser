let isConnected = prompt("Êtes-vous connecté ? (oui/non)");
let role = prompt("Votre rôle ? (admin, utilisateur, invité)");

// Convertir en minuscules pour éviter les erreurs
isConnected = isConnected.toLowerCase();
role = role.toLowerCase();

if (isConnected === "oui") {

    if (role === "admin") {
        console.log("Bienvenue admin");
    } else if (role === "utilisateur") {
        console.log("Bienvenue utilisateur");
    } else if (role === "invité") {
        console.log("Accès invité limité");
    } else {
        console.log("Rôle inconnu");
    }

} else {
    console.log("Veuillez vous connecter");
}
