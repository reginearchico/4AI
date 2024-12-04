function controllo() {
    const esito = document.getElementById("esito");
    const ris = document.getElementById("testoEsito");
    esito.style.display = "block";

    const username = document.getElementById("user").value;
    const password = document.getElementById("password").value;

    if (validateUsername(username) && validatePassword(password)) {
        esito.style.backgroundColor = "rgba(0, 172, 0, 0.607)";
        ris.innerHTML = "Accesso consentito";
    } else {
        esito.style.backgroundColor = "rgba(255, 0, 0, 0.585)";
        ris.innerHTML = "Accesso negato";
    }
}

function validateUsername(username) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(username);
}

function validatePassword(password) {
    return /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password);
    /* ^: Indica l'inizio della stringa.
    * (?=.*[A-Z]): Positive lookahead che richiede almeno una lettera maiuscola.
    * (?=.*\d): Positive lookahead che richiede almeno un numero.
    *  [A-Za-z\d@$!%*#?&]: Accetta solo lettere maiuscole, minuscole, numeri e i caratteri speciali specificati.
    *  {8,}: Richiede una lunghezza minima di 8 caratteri.
    *  $: Indica la fine della stringa.
    * 
    * Il metodo .test(password) restituisce true se la stringa password corrisponde a questa espressione regolare e false altrimenti.*/
}