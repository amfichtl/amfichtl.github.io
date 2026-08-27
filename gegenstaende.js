const gegenstaende = {

    // ==================================================
    // 1. GEGENSTAND
    // ==================================================

    1: {
        titel: "1. Seltsamer Gegenstand",
        bild: "bilder/1_obj.png",
        // Copyright des Bildes
        copyright: {
            lang: "Teedose, um 1711-15 (Modell), um 1711-15 (Ausformung), Böttgersteinzeug, 12 x 11 cm, 280g, Meissen Porzellan-Stiftung, Bearbeitung des 3D-Models: Andreas Bauer.",
            kurz: "© Meissen Porzellan-Stiftung, Bearbeitung des 3D-Models: Andreas Bauer."
        },
        alt: "Der erste seltsame Gegenstand. Der Gegenstand ist braun. Er hat oben ein Loch. Auf dem Gegenstand ist ein Relief. Das bedeutet: Es gibt hohe Stellen. Und: Es gibt tiefe Stellen. Das Relief zeigt Pflanzen und einen Vogel.",

        // --------------------------------------------------
        // AUDIO
        // --------------------------------------------------

        audio: {
            einleitung: "audio/Leda_navi_andere.wav",
            raten: "audio/Leda_raten.wav",
            andere: "audio/Leda_1_andere.wav",
            richtig: "audio/Leda_1_richtig.wav",
            info: "audio/Leda_1_weitereInfos.wav"
        },

        // --------------------------------------------------
        // ANDERE MENSCHEN DENKEN
        // --------------------------------------------------

        andere: `
            <strong><u>Andere Menschen denken:</u></strong><br />
            Der Gegenstand ist:<br />
            - eine Vase<br />
            - ein Fass für Tinte<br />
            - ein Salz·streuer<br />
            - eine Urne<br />
            - ein Kerzen·ständer
        `,

        // --------------------------------------------------
        // RICHTIGE ANTWORT
        // --------------------------------------------------

        richtig: `
            <div class="zeile">

                <p>
                    <strong><u>Richtig ist:</u></strong><br />
                    Der Gegenstand ist eine <strong>Tee·dose</strong>.
                </p>

                <img
                    src="bilder/1_1.png"
                    alt="Richtig ist: Der Gegenstand ist eine Teedose. Die Teedose steht auf einem Tisch. Eine Hand nimmt mit einem Löffel Tee aus der Dose. Auf dem Tisch liegt auch der Deckel von der Dose. Auf dem Tisch steht auch eine kleine Schale mit Tee.">

            </div>
        `,

        // --------------------------------------------------
        // WEITERE INFORMATIONEN
        // --------------------------------------------------

        infoTitel: "Mehr Informationen über die Tee·dose",

        info: [
            {
                audio: "audio/Leda_1_weitereInfos.wav",

                inhalt: `
                    <p>
                        <strong><u>Teurer Tee</u></strong><br />

                        Die Tee·dose ist schon alt.<br />
                        <br />

                        Damals ist Tee sehr teuer.<br />
                        <br />

                        Weil: Die Menschen müssen Tee aus
                        <strong>China</strong> kaufen.<br />

                        In China trinken die Einwohner seit sehr langer Zeit Tee.<br />
                        <br />

                        <div class="zeile">

                            <p>
                                Auch in <strong>Europa</strong> mögen die Menschen Tee.<br />

                                In Europa gibt es aber keine Tee·pflanzen.<br />

                                Der Tee muss mit dem Schiff von China nach Europa
                                gefahren werden.<br />
                                <br />
                            </p>

                            <img
                                src="bilder/1_2.jpg"
                                alt="Auf der linken Seite ist ein Mensch aus China. Er pflückt Blätter von Teepflanzen. Auf der rechten Seite ist ein Mensch aus Europa. Er hält eine Teedose in der Hand. In der Mitte ist ein Schiff auf dem Meer. Das Schiff fährt von China nach Europa.">

                        </div>

                        Die Menschen in Europa wollen den guten Tee gut
                        aufbewahren.<br />

                        Deswegen kaufen sie schöne Tee·dosen.<br />
                        <br />

                        Die Tee·dose auf dem Bild sieht aus wie eine
                        Tee·dose aus China.<br />

                        Sie ist aber nicht aus China.<br />

                        Sie ist aus Meißen.
                    </p>

                    <p>
                        <div class="zeile">

                            <p>
                                <strong><u>Böttger-Stein·zeug</u></strong><br />

                                Die Tee·dose ist braun und <strong>nicht</strong> weiß.<br />

                                Weil: Damals können die Arbeiter in der Manufaktur
                                noch <strong>kein</strong> Porzellan herstellen.<br />
                                <br />
                            </p>

                            <img
                                src="bilder/1_3.jpg"
                                alt="Eine braune Vase steht neben einer weißen Vase. Die braune Vase ist aus Böttgersteinzeug. Sie ist rau. Die weiße Vase ist aus Porzellan. Sie ist glatt.">

                        </div>

                        Die Tee·dose ist <strong>nicht</strong> aus Porzellan.<br />

                        Sie ist aus Böttger-Stein·zeug.
                    </p>
                `
            }
        ]
    },


    // ==================================================
    // 2. GEGENSTAND
    // ==================================================

    2: {
        titel: "2. Seltsamer Gegenstand",
        bild: "bilder/2_obj.png",
        // Copyright des Bildes
        copyright: {
            lang: "Sakeflasche mit Tierkopfausguss, um 1715 (Modell), 1715 (Ausformung),  Böttgersteinzeug, 20,3 x 13 x 10,5 cm, 280g, Meissen Porzellan-Stiftung, Bearbeitung des 3D-Models: Andreas Bauer.",
            kurz: "© Meissen Porzellan-Stiftung, Bearbeitung des 3D-Models: Andreas Bauer."
        },
        alt: "Der zweite seltsame Gegenstand. Der Gegenstand ist braun. Er sieht aus wie eine Vase. Er hat einen langen Hals und einen dicken Bauch. An dem Bauch ist der Kopf von einem Tier.",

        // --------------------------------------------------
        // AUDIO
        // --------------------------------------------------

        audio: {
            einleitung: "audio/Leda_navi_andere.wav",
            raten: "audio/Leda_raten.wav",
            andere: "audio/Leda_2_andere.wav",
            richtig: "audio/Leda_2_richtig.wav"
        },

        // --------------------------------------------------
        // ANDERE MENSCHEN DENKEN
        // --------------------------------------------------

        andere: `
            <strong><u>Andere Menschen denken:</u></strong><br />
            Der Gegenstand ist:<br />
            - eine Vase<br />
            - eine Gieß·kanne<br />
            - eine Öl·lampe<br />
            - eine Kanne für Öl, Wein oder Wasser
        `,

        // --------------------------------------------------
        // RICHTIGE ANTWORT
        // --------------------------------------------------

        richtig: `
            <div class="zeile">

                <p>
                    <strong><u>Richtig ist:</u></strong><br />
                    Der Gegenstand ist eine <strong>Flasche</strong>.
                </p>

                <img
                    src="bilder/2_1.jpg"
                    alt="Richtig ist: Der Gegenstand ist eine Flasche. Eine Frau hält die braune Flasche in der Hand. Die Frau gießt eine Flüssigkeit in eine Schale.">

            </div>
        `,

        // --------------------------------------------------
        // WEITERE INFORMATIONEN
        // --------------------------------------------------

        infoTitel: "Mehr Informationen über die Flasche",

        info: [
            {
                audio: "audio/Leda_2_weitereInfos.wav",

                inhalt: `
                    <p>
                        <strong><u>Sake</u></strong><br />

                        Der Gegenstand ist eine Flasche für Sake.<br />

                        Sake ist ein Getränk aus dem Land Japan.<br />
                        <br />

                        In Sake ist <strong>Alkohol</strong>.<br />

                        Sake ist also wie Wein oder Bier.<br />

                        Die Menschen in Japan stellen Sake aber aus Reis her.<br />

                        Deswegen nennt man Sake auch Reis·wein.
                    </p>

                    <p>
                        <strong><u>Das Wort Sake</u></strong><br />

                        Das Wort Sake ist japanisch.<br />

                        Früher bedeutet das Wort Sake <strong>Glück</strong>.<br />

                        Oder etwas Göttliches.<br />

                        Heute bedeutet das Wort Sake in Japan: Alkohol.
                    </p>

                    <p>
                        <strong><u>Porzellan ist gut für Sake.</u></strong><br />

                        Die Menschen trinken Sake <strong>kalt</strong>
                        oder auch <strong>warm</strong>.<br />

                        Deswegen brauchen die Menschen ein besonderes Gefäß.<br />

                        Sie müssen das Gefäß warm machen können.<br />

                        Deswegen ist die Flasche aus Porzellan.<br />
                        <br />

                        In einer Flasche aus Porzellan bleibt der Sake lange gut.
                    </p>
                `
            }
        ]
    },


    // ==================================================
    // 3. GEGENSTAND
    // ==================================================

    3: {
        titel: "3. Seltsamer Gegenstand",
        bild: "bilder/3_obj.png",
        // Copyright des Bildes
        copyright: {
            lang: "Fasanenterrine, Johann Joachim Kaendler, 1732 (Modell), 1774 (Ausformung), Porzellan, 44 x 29,5 x 25 cm,  4,2 kg, Meissen Porzellan-Museum, Bearbeitung des 3D-Models: Rudi Schubert.",
            kurz: "© Meissen Porzellan-Stiftung, Bearbeitung des 3D-Models: Rudi Schubert."
        },
        alt: "Der dritte seltsame Gegenstand. Der Gegenstand ist weiß und sieht aus wie ein Vogel. Der Vogel sitzt. Er hat den Schwanz erhoben. Seine Flügel sind nah an seinem Körper.",

        // --------------------------------------------------
        // AUDIO
        // --------------------------------------------------

        audio: {
            einleitung: "audio/Leda_navi_andere.wav",
            raten: "audio/Leda_raten.wav",
            andere: "audio/Leda_3_andere.wav",
            richtig: "audio/Leda_3_richtig.wav"
        },

        // --------------------------------------------------
        // ANDERE MENSCHEN DENKEN
        // --------------------------------------------------

        andere: `
            <strong><u>Andere Menschen denken:</u></strong><br />
            Der Gegenstand ist:<br />
            - eine Deko·figur<br />
            - eine Schüssel für Eier oder Suppe<br />
            - eine Kiste für Brot<br />
            - ein Öffner für Briefe<br />
            - ein Spring·brunnen
        `,

        // --------------------------------------------------
        // RICHTIGE ANTWORT
        // --------------------------------------------------

        richtig: `
            <div class="zeile">

                <p>
                    <strong><u>Richtig ist:</u></strong><br />
                    Der Gegenstand ist eine
                    <strong>Schüssel mit Deckel</strong>.
                </p>

                <img
                    src="bilder/3_1.jpg"
                    alt="Richtig ist: Der Gegenstand ist eine Terrine. Auf dem Tisch steht die Schüssel von der Terrine. In der Schüssel ist Suppe. Auf dem Tisch liegt auch der Deckel von der Terrine. Auf dem Tisch sind auch: Teller, Gläser und Besteck.">

            </div>
        `,

        // --------------------------------------------------
        // WEITERE INFORMATIONEN
        // --------------------------------------------------

        infoTitel: "Mehr Informationen zu der Schüssel",

        info: [
            {
                audio: "audio/Leda_3_weitereInfos.wav",

                inhalt: `
                    <p>
                        <strong><u>Fasan-Terrine</u></strong><br />

                        Der Gegenstand sieht aus wie ein Vogel.<br />

                        Der Vogel heißt <strong>Fasan</strong>.<br />
                        <br />

                        Der Gegenstand sieht aus wie eine Deko·figur
                        von einem Fasan.<br />

                        Der Gegenstand ist aber <strong>keine</strong> Deko·figur.<br />
                        <br />

                        Der Gegenstand ist eine <strong>Terrine</strong>.<br />

                        Eine Terrine ist eine Schüssel mit einem Deckel.<br />
                        <br />

                        In der Mitte von dem Fasan ist eine Linie.<br />

                        Die Linie zeigt: Hier liegt der Deckel auf der Schüssel.<br />
                        <br />

                        Aber das soll niemand sehen.<br />

                        Deswegen hat der Bild·hauer die Linie gut versteckt.<br />

                        Der Bild·hauer hat die Vorlage für die Terrine gemacht.<br />
                        <br />

                        <div class="zeile">

                            <p>
                                Damals steht die Terrine bei Festen auf dem Tisch.<br />

                                Sie ist ein <strong>Blick·fang</strong>.<br />

                                Das bedeutet: Alle Menschen haben die Terrine sofort angesehen.<br />
                                <br />
                            </p>

                            <img
                                src="bilder/3_2.jpg"
                                alt="Auf dem Tisch steht die Fasan-Terrine. Zwei Frauen stehen neben dem Tisch. Sie tragen lange Kleider. Sie schauen die Fasanterrine neugierig an.">

                        </div>

                        Sie denken zuerst: Auf dem Tisch steht ein echter Vogel.<br />

                        In der Terrine ist aber warmes Essen.<br />

                        Zum Beispiel: Suppe.
                    </p>

                    <p>
                        <strong><u>Ro·ko·ko</u></strong><br />

                        Zu der damaligen Zeit mögen Menschen Geschirr,
                        das wie ein Tier aussieht.<br />

                        Diese Zeit nennt man <strong>Ro·ko·ko</strong>.
                    </p>
                `
            }
        ]
    },


    // ==================================================
    // 4. GEGENSTAND
    // ==================================================

    4: {
        titel: "4. Seltsamer Gegenstand",
        bild: "bilder/4_obj.png",
        // Copyright des Bildes
        copyright: {
            lang: "Chinese auf Hahn als Kanne, Kändler, Johann Joachim, 1737 (Modell), 1750 (Ausformung), Porzellan, 19,5 x 13 x 17 cm, Meissen Porzellan-Stiftung, Bearbeitung des 3D Modells: Anastasiia Vasiutina.",
            kurz: "© Meissen Porzellan-Stiftung, Bearbeitung des 3D Modells: Anastasiia Vasiutina."
        },
        alt: "Der vierte seltsame Gegenstand. Der Gegenstand ist sehr bunt. Er sieht aus wie ein Hahn. Auf dem Hahn sitzt ein Mann. Der Mann trägt einen Hut und ein Kleid.",

        // --------------------------------------------------
        // AUDIO
        // --------------------------------------------------

        audio: {
            einleitung: "audio/Leda_navi_andere.wav",
            raten: "audio/Leda_raten.wav",
            andere: "audio/Leda_4_andere.wav",
            richtig: "audio/Leda_4_richtig.wav"
        },

        // --------------------------------------------------
        // ANDERE MENSCHEN DENKEN
        // --------------------------------------------------

        andere: `
            <strong><u>Andere Menschen denken:</u></strong><br />
            Der Gegenstand ist:<br />
            - eine Deko·figur<br />
            - eine Schach·figur<br />
            - eine Kanne für Milch<br />
            - eine Kanne für Kaffee
        `,

        // --------------------------------------------------
        // RICHTIGE ANTWORT
        // --------------------------------------------------

        richtig: `
            <div class="zeile">

                <p>
                    <strong><u>Richtig ist:</u></strong><br />
                    Der Gegenstand ist eine
                    <strong>Kanne für Öl oder Essig</strong>.
                </p>

                <img
                    src="bilder/4_1.jpg"
                    alt="Richtig ist: Der Gegenstand ist eine Kanne. Die Kanne sieht aus wie ein Hahn. Auf dem Hahn sitzt ein Mann. Eine Frau schüttet Öl aus der Kanne auf einen Teller. Das Öl kommt aus dem Schnabel von dem Hahn.">

            </div>
        `,

        // --------------------------------------------------
        // WEITERE INFORMATIONEN
        // --------------------------------------------------

        infoTitel: "Mehr Informationen zu der Kanne",

        info: [
            {
                audio: "audio/Leda_4_weitereInfos.wav",

                inhalt: `
                    <p>
                        <strong><u>Ein Mann auf einem Hahn</u></strong><br />

                        Der Gegenstand ist eine Kanne für Öl oder Essig.<br />

                        Die Kanne sieht aus wie ein <strong>Hahn</strong>.<br />

                        Auf dem Hahn sitzt ein <strong>Mann</strong>.<br />

                        Das Öl kommt aus dem Schnabel von dem Hahn.<br />

                        Die Schwanz·federn von dem Hahn sind der Griff
                        von der Kanne.
                    </p>

                    <p>
                        <div class="zeile">

                            <p>
                                <strong><u>Johann Joachim Kändler</u></strong><br />

                                Ein berühmter Bild·hauer hat die Kanne entworfen.<br />

                                Der Bild·hauer heißt Johann Joachim Kändler.<br />

                                Er hat vor langer Zeit gelebt.<br />

                                Er hat auch die Fasan-Terrine gemacht.
                            </p>

                            <img
                                src="bilder/4_2.jpg"
                                alt="Ein Mann sitzt an einem Tisch. Der Mann trägt eine Perücke und eine rote Jacke. Er formt mit den Händen eine Figur. Die Figur ist grau. Sie sieht aus wie die Kanne mit dem Hahn und dem Mann. Auf dem Tisch liegt Werkzeug.">

                        </div>
                    </p>

                    <p>
                        <strong><u>Seltsame Darstellung</u></strong><br />

                        Die Figur soll ein Mann aus China sein.<br />
                        <br />

                        Damals denken die Menschen in Europa:<br />

                        Menschen in China sind sehr anders als sie selbst.<br />
                        <br />

                        Sie wissen aber <strong>nicht</strong>:<br />

                        Wie sind die Menschen in China wirklich?<br />
                        <br />

                        Deswegen haben die Menschen in Europa
                        ein seltsames Bild von China.<br />

                        Sie stellen die fremde Kultur seltsam dar.<br />

                        Deshalb sieht die Figur so übertrieben aus.<br />

                        Zum Beispiel:<br />

                        Der Mann hat sehr lange Ohr·läppchen.
                    </p>
                `
            }
        ]
    },



    // ==================================================
    // 5. GEGENSTAND
    // ==================================================

    5: {
        titel: "5. Seltsamer Gegenstand",
        bild: "bilder/5_obj.png",
        // Copyright des Bildes
        copyright: {
            lang: "Sängerin (Affenkapelle), Johann Joachim Kändler/ Peter Reinicke, 1765 (Modell), um 1880 (Ausformung), Porzellan, Aufglasurfarben und Gold , 13 x 8 x 5,5 cm, Meissen Porzellan-Stiftung, Bearbeitung des 3D Modells: Emily-Sophie Witt.",
            kurz: "© Meissen Porzellan-Stiftung, Bearbeitung des 3D Modells: Emily-Sophie Witt."
        },
        alt: "Der fünfte seltsame Gegenstand. Der Gegenstand ist ein Affe. Der Affe trägt ein Kleid. Der Affe hält ein Buch mit Noten in der Hand. Der Affe singt.",

        // --------------------------------------------------
        // AUDIO
        // --------------------------------------------------

        audio: {
            einleitung: "audio/Leda_navi_andere.wav",
            raten: "audio/Leda_raten.wav",
            andere: "audio/Leda_5_andere.wav",
            richtig: "audio/Leda_5_richtig.wav"
        },

        // --------------------------------------------------
        // ANDERE MENSCHEN DENKEN
        // --------------------------------------------------

        andere: `
            <strong><u>Andere Menschen denken:</u></strong><br />

            Der Gegenstand ist eine Deko·figur.<br />
            <br />

            Die anderen Menschen denken:<br />

            Die Deko·figur zeigt:<br />
            - einen Wolf<br />
            - ein Monster mit schöner Kleidung
        `,

        // --------------------------------------------------
        // RICHTIGE ANTWORT
        // --------------------------------------------------

        richtig: `
            <div class="zeile">

                <p>
                    <strong><u>Richtig ist:</u></strong><br />

                    Der Gegenstand ist wirklich eine
                    <strong>Deko·figur</strong>.<br />

                    Sie zeigt einen Affen.
                </p>

                <img
                    src="bilder/5_1.jpg"
                    alt="Die Figur von einem Affen steht auf einem Tisch. Der Affe trägt ein Kleid. Der Affe hält ein Buch mit Noten in der Hand. Der Affe singt.">

            </div>
        `,

        // --------------------------------------------------
        // WEITERE INFORMATIONEN
        // --------------------------------------------------

        infoTitel: "Mehr Informationen zu der Deko·figur",

        info: [
            {
                audio: "audio/Leda_5_weitereInfos.wav",

                inhalt: `
                    <p>
                        <strong><u>Affen als Menschen</u></strong><br />

                        Der Gegenstand ist wirklich eine Deko·figur.<br />

                        Sie ist aber seltsam.<br />

                        Weil: Sie zeigt einen <strong>Affen</strong>
                        in einem Kleid.<br />

                        Das <strong>Kleid</strong> ist ein teures Kleid
                        für Feste bei einem König.<br />

                        Der Affe hält ein Heft mit Noten in der Hand
                        und <strong>singt</strong>.<br />
                        <br />

                        Vor langer Zeit mögen Menschen Bilder und Figuren
                        von Affen.<br /><br/>

                        Die Affen tragen die Kleidung von Menschen.<br />

                        Zum Beispiel:<br />
                        - Die Affen tragen Röcke.<br />
                        - Die Affen tragen Hüte.<br />
                        - Die Affen tragen Schuhe.<br />
                        <br />

                        <div class="zeile">

                            Die Affen benehmen sich wie Menschen.<br />

                            Zum Beispiel:<br />
                            - Die Affen tanzen.<br />
                            - Die Affen machen Musik.<br />
                            - Die Affen malen.<br />
                            <br />

                            <img
                                src="bilder/5_2.jpg"
                                alt="Viele Figuren von Affen stehen auf einem Tisch. Der erste Affe tanzt. Der zweite Affe spielt eine Gitarre. Der dritte Affe malt. Der vierte Affe trägt schöne Kleidung.">

                        </div>

                        <br />

                        Manche Menschen haben überall in ihrer Wohnung
                        Bilder von Affen.<br />

                        Zum Beispiel:<br />
                        - auf den Schränken<br />
                        - an den Wänden<br />
                        - an der Decke

                        <br />
                        <br />

                        <strong><u>Menschen als Affen</u></strong><br />

                        Damals denken die Menschen: Affen sind böse.<br />

                        Der Affe zeigt die schlechten Seiten von den Menschen.<br />

                        Die Figuren zeigen:<br />

                        Die Menschen benehmen sich manchmal wie dumme Affen.<br />

                        Die Menschen machen sich mit den Figuren
                        <strong>über sich selbst lustig</strong>.
                    </p>
                `
            }
        ]
    }

};

