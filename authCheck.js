let isConnected = prompt("Êtes-vous connecté ? (oui/non)");
let role = prompt("Quel est votre rôle ? (admin/utilisateur)");

isConnected = isConnected.toLowerCase();
role = role.toLowerCase();

if (isConnected === "oui") {

    if (role === "admin") {
        console.log("Bienvenue admin");
    } else if (role === "utilisateur") {
        console.log("Bienvenue utilisateur");
    } else {
        console.log("Accès restreint");
    }

} else {
    console.log("Veuillez vous connecter");
}
