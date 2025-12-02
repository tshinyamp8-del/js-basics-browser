
let word = prompt("Es-tu connecté ? (oui/non)");
let role = prompt("Quel est ton rôle ? (admin/utilisateur/invité)");

if (word == "oui") {
    if (role == "admin") {
        console.log("Bienvenue " + role);
    }
    if (role == "utilisateur") {
        console.log("Bienvenue " + role);
    }
    if (role == "invité") {
        console.log("Accès restreint");
    }
    console.log("Bienvenue " + role);
} else if (word == "non") {
    console.log("Veuillez vous connecter");
} else {
    console.log("Accès restreint");
}

