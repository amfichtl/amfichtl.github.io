// ==================================================
// AUDIO-STEUERUNG
// Funktioniert auf ALLEN Seiten
// ==================================================

let aktuellesAudio = null;
let aktuellerButton = null;


// --------------------------------------------------
// AUDIO-STEUERUNG STARTEN
// --------------------------------------------------

function audioSteuerungStarten() {

    const audioButtons = document.querySelectorAll(".audio-start");

    audioButtons.forEach(button => {

        // Das Audio gehört zum jeweiligen Button.
        const audio = button.parentElement.querySelector("audio");

        // Falls kein Audio vorhanden ist, wird dieser Button übersprungen.
        if (!audio) {
            return;
        }


        // --------------------------------------------------
        // BUTTON ANKLICKEN
        // --------------------------------------------------

        button.addEventListener("click", function () {

            // --------------------------------------------------
            // Wenn ein anderes Audio läuft:
            // stoppen und zurücksetzen
            // --------------------------------------------------

            if (
                aktuellesAudio &&
                aktuellesAudio !== audio
            ) {

                aktuellesAudio.pause();
                aktuellesAudio.currentTime = 0;

                if (aktuellerButton) {
                    aktuellerButton.classList.remove("abspielen");
                }

                aktuellesAudio = null;
                aktuellerButton = null;
            }


            // --------------------------------------------------
            // Wenn dieses Audio gerade läuft:
            // stoppen
            // --------------------------------------------------

            if (!audio.paused) {

                audio.pause();
                audio.currentTime = 0;

                button.classList.remove("abspielen");

                aktuellesAudio = null;
                aktuellerButton = null;

                return;
            }


            // --------------------------------------------------
            // AUDIO STARTEN
            // --------------------------------------------------

            audio.play()
                .then(() => {

                    aktuellesAudio = audio;
                    aktuellerButton = button;

                    button.classList.add("abspielen");

                })
                .catch(error => {

                    console.error(
                        "Audio konnte nicht abgespielt werden:",
                        error
                    );

                });

        });


        // --------------------------------------------------
        // WENN AUDIO ZU ENDE IST
        // --------------------------------------------------

        audio.addEventListener("ended", function () {

            button.classList.remove("abspielen");

            if (aktuellesAudio === audio) {

                aktuellesAudio = null;
                aktuellerButton = null;

            }

        });

    });
}


// ==================================================
// GEGENSTANDSSEITE
// Nur ausführen, wenn #gegenstand-inhalt existiert
// ==================================================

const gegenstandInhalt =
    document.getElementById("gegenstand-inhalt");


if (gegenstandInhalt) {


    // --------------------------------------------------
    // GEGENSTAND AUS DER URL BESTIMMEN
    // --------------------------------------------------

    const parameter =
        new URLSearchParams(window.location.search);

    const id =
        Number(parameter.get("id"));


    // --------------------------------------------------
    // PRÜFEN, OB GEGENSTAENDE VORHANDEN IST
    // --------------------------------------------------

    if (
        typeof gegenstaende === "undefined" ||
        !gegenstaende[id]
    ) {

        gegenstandInhalt.innerHTML = `
            <h1>Gegenstand nicht gefunden</h1>

            <p>
                Dieser Gegenstand existiert nicht.
            </p>

            <p>
                <a href="index.html">
                    Zur Startseite
                </a>
            </p>
        `;

    } else {


        // --------------------------------------------------
        // GEGENSTAND HOLEN
        // --------------------------------------------------

        const gegenstand =
            gegenstaende[id];


        // Seitentitel an den jeweiligen Gegenstand anpassen.
        document.title =
            gegenstand.titel;


        // --------------------------------------------------
        // EINLEITUNG OBEN
        // --------------------------------------------------

        let einleitung = `
            <div class="audio-zeile einleitung">

                <div class="audio-button">

                    <button
                        class="audio-start"
                        type="button"
                        aria-label="Audio abspielen">

                        🔊

                    </button>

                    <audio
                        src="audio/Leda_navi_andere.wav"
                        preload="none">
                    </audio>

                </div>

                <div class="audio-text">

                    <p>
                        Hier kommen Sie zu dem
                        <strong>Text</strong> von <strong>vorher</strong>
                        und dem Text von <strong>danach</strong>.
                    </p>

                </div>

            </div>
        `;


        // --------------------------------------------------
        // NAVIGATION
        // --------------------------------------------------

        let navigation = `
            <p class="navigation">
        `;


        // --------------------------------------------------
        // PFEIL LINKS
        // --------------------------------------------------

        if (id > 1) {

            // Bei Gegenstand 2 bis 6:
            // zum vorherigen Gegenstand.
            navigation += `
                <a href="gegenstand.html?id=${id - 1}">

                    <button
                        class="nav-pfeil links"
                        type="button"
                        aria-label="Zum vorherigen Gegenstand"
                        title="Zum vorherigen Gegenstand">
                    </button>

                </a>
            `;

        } else {

            // Bei Gegenstand 1:
            // zurück zur Manufaktur.
            navigation += `
                <a href="manufaktur.html">

                    <button
                        class="nav-pfeil links"
                        type="button"
                        aria-label="Zur vorherigen Seite"
                        title="Zur vorherigen Seite">
                    </button>

                </a>
            `;
        }


        // --------------------------------------------------
        // PFEIL RECHTS
        // --------------------------------------------------

        if (id < 6) {

            // Bei Gegenstand 1 bis 5:
            // zum nächsten Gegenstand.
            navigation += `
                <a href="gegenstand.html?id=${id + 1}">

                    <button
                        class="nav-pfeil rechts"
                        type="button"
                        aria-label="Zum nächsten Gegenstand"
                        title="Zum nächsten Gegenstand">
                    </button>

                </a>
            `;

        } else {

            // Bei Gegenstand 6:
            // weiter zum Glossar.
            navigation += `
                <a href="glossar.html">

                    <button
                        class="nav-pfeil rechts"
                        type="button"
                        aria-label="Zum Glossar"
                        title="Zum Glossar">
                    </button>

                </a>
            `;
        }


        navigation += `
            </p>
        `;


        // --------------------------------------------------
        // EINLEITUNG UNTEN
        // --------------------------------------------------

        let einleitungUnten = `
            <div class="audio-zeile einleitung unten">

                <div class="audio-button">

                    <button
                        class="audio-start"
                        type="button"
                        aria-label="Audio abspielen">

                        🔊

                    </button>

                    <audio
                        src="audio/Leda_navi_andere.wav"
                        preload="none">
                    </audio>

                </div>

                <div class="audio-text">

                    <p>
                        Hier kommen Sie zu dem
                        <strong>Text</strong> von <strong>vorher</strong>
                        und dem Text von <strong>danach</strong>.
                    </p>

                </div>

            </div>
        `;


        // ==================================================
        // HTML AUFBAUEN
        // ==================================================

        let html = `

            <div class="grau-bereich oben">

                ${einleitung}

                ${navigation}

            </div>

        `;


        // ==================================================
        // START / RATEN
        // ==================================================

        html += `
            <div class="audio-zeile">

                <div>
                    <br />
                    <br />
                </div>

            </div>

            <div class="audio-zeile">

                <div class="audio-button">

                    <button
                        class="audio-start"
                        type="button"
                        aria-label="Audio abspielen">

                        🔊

                    </button>

                    <audio
                        src="${gegenstand.audio.raten}"
                        preload="none">
                    </audio>

                </div>

                <div class="audio-text">

                    <h1>
                        ${gegenstand.titel}
                    </h1>

                    <p>
                        <strong><u>Was ist das?</u></strong><br /><br />
                    </p>

                    <img
                        class="gegenstand"
                        src="${gegenstand.bild}"
                        alt="${gegenstand.alt}">

                </div>

            </div>

        `;


        // ==================================================
        // ANDERE MENSCHEN DENKEN
        // ==================================================

        html += `
            <div class="audio-zeile">

                <p>
                    <br />
                </p>

            </div>

            <div class="audio-zeile">

                <div class="audio-button">

                    <button
                        class="audio-start"
                        type="button"
                        aria-label="Audio abspielen">

                        🔊

                    </button>

                    <audio
                        src="${gegenstand.audio.andere}"
                        preload="none">
                    </audio>

                </div>

                <div class="audio-text">

                    ${gegenstand.andere}

                    <br />
                    <br />

                </div>

            </div>

        `;


        // ==================================================
        // RICHTIG IST
        // ==================================================

        html += `
            <div class="audio-zeile">

                <div class="audio-button">

                    <button
                        class="audio-start"
                        type="button"
                        aria-label="Audio abspielen">

                        🔊

                    </button>

                    <audio
                        src="${gegenstand.audio.richtig}"
                        preload="none">
                    </audio>

                </div>

                <div class="audio-text">

                    ${gegenstand.richtig}

                    <br />
                    <br />
                    <br />
                    <br />

                </div>

            </div>

        `;


        // ==================================================
        // INFORMATIONEN
        // ==================================================

        if (
            gegenstand.info &&
            gegenstand.info.length > 0
        ) {

            // --------------------------------------------------
            // ERSTER INFORMATIONSABSCHNITT
            // --------------------------------------------------

            html += `
                <div class="audio-zeile">

                    <div class="audio-button">

                        <button
                            class="audio-start"
                            type="button"
                            aria-label="Audio abspielen">

                            🔊

                        </button>

                        <audio
                            src="${gegenstand.info[0].audio}"
                            preload="none">
                        </audio>

                    </div>

                    <div class="audio-text">

                        <h2>
                            ${gegenstand.infoTitel}
                        </h2>

                        ${gegenstand.info[0].inhalt}

                    </div>

                </div>
            `;


            // --------------------------------------------------
            // WEITERE INFORMATIONSABSCHNITTE
            // --------------------------------------------------

            for (
                let i = 1;
                i < gegenstand.info.length;
                i++
            ) {

                html += `
                    <div class="audio-zeile">

                        <div class="audio-button">

                            <button
                                class="audio-start"
                                type="button"
                                aria-label="Audio abspielen">

                                🔊

                            </button>

                            <audio
                                src="${gegenstand.info[i].audio}"
                                preload="none">
                            </audio>

                        </div>

                        <div class="audio-text">

                            ${gegenstand.info[i].inhalt}

                        </div>

                    </div>
                `;
            }
        }


        // ==================================================
        // NAVIGATION UNTEN
        // ==================================================

        html += `
            <div class="audio-zeile">

                <div>
                    <br />
                    <br />
                    <br />
                </div>

            </div>

            <div class="grau-bereich unten">

                ${einleitungUnten}

                ${navigation}

                <div class="projekt-link-bereich">

                    <a
                        href="informationen.html"
                        class="projekt-link">
                        Informationen über das Projekt
                    </a>

                </div>

            </div>
        `;


        // --------------------------------------------------
        // HTML EINSETZEN
        // --------------------------------------------------

        gegenstandInhalt.innerHTML = html;

    }
}


// ==================================================
// AUDIO-STEUERUNG GANZ ZUM SCHLUSS STARTEN
// ==================================================

// Diese Funktion wird auf allen Seiten aufgerufen.
//
// Dadurch funktionieren die Audio-Buttons auch auf:
// - index.html
// - manufaktur.html
// - glossar.html
// - gegenstand.html

audioSteuerungStarten();