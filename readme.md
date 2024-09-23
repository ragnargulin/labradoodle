**Inlämningsuppgift 2 frågor att besvara**

- Hur många breakpoints använder ni och för vilka enheter/skärmar?

Två breakpoints / tre olika enheter. Mobil, padda och dator. Våra breakpoint definieras som spektrum, snarare än max ELLER min. Detta gjorde det enklare att styra styling för plattan, som annars hamnar i kläm. 

- Beskriv några typer av dynamisk funktionalitet som ni använder och vart de används (till exempel JavaScript, CSS Animationer eller CSS Transitions).

Vi använder bland annat en hover-funktion för menyn som skapar en organisk cirkel runt meny-element. 
Vi har även en js-funktion som körs om man klickar på hunden i headern. 
Under "om oss" har vi även en dropdown-knapp med text.

- Använder ni något ramverk? Om ja, var?

Ja, vi har använt Bootstrap som grund för hemsidan. Bland annat följer vår navbar och bild-karusell Bootstraps egna klasser.

- Hur har ni testat tillgängligheten och på hur många olika sätt? (till exempel automatiska verktyg, användartestning eller manuellt test)

Vi har bla. Testat med Wave, där vi fick bra resultat förutom en kontakt-knapp som ansågs ha för låg kontrast. Vi misstänker att detta är någon bugg, för andra knappar med samma färgkontrast blev godkända.
Vi har även testat att navigera hemsidan med enbart tangentbord. Slutligen har vi manuellt försökt se till att det finns alt-attribut och aria labels där det behövs

- Har ni använt Sass under projektetes gång? I vilken utsträckning?

Ja! Vi använde en hover-styling vi hittade på codepen som använde sass. Det gav oss en grund att utgå från. Vi har sedan modifierat sass-filen och sett hur compilern översätter till css. I övrigt har vi fått mycket styling från Bootstrap och bara behövt göra mindre ändringar med css. Vi har gjort någon slags hybridlösning. 




**Inlämning:**
- Deadline: Måndag 23 september 17:00
  - Koden laddas upp på GitHub (om repot är privat, bjud in `fridadunkelelevera`).
  - Lämna in på plattformen It’s Learning:
    - [ ] Länk till er färdiga inlämningsuppgift 2 på GitHub.
    - [ ] Länk till hemsidan ni förbättrar.
    - [ ] Print screens på hemsidan ni förbättrar.

**Betygskriterier:**

**Godkänt (G):**
- [x] Hemsidan ska innehålla logotyp, navigering, semantisk korrekt HTML och sidfot.
- [x] Menyn ska innehålla korrekt utformade länkar som leder till respektive sida (2-4 sidor).
- [x] Hemsidan ska vara responsiv och anpassad efter olika skärmstorlekar, med minst en breakpoint (till exempel Mobil – Dator).
- [x] Dynamisk funktionalitet ska finnas, med hjälp av JavaScript, CSS Animationer eller CSS Transitions.
Bark-funktion när man klickar på hunden
- [x] Hemsidan ska vara tillgänglig och testad på minst ett sätt (till exempel automatiska verktyg, användartestning eller manuellt test). Berätta mer om detta under redovisningen.
- [x] Ni ska arbeta med GitHub under hela projektets gång, och historik ska finnas tillgänglig.

**Väl Godkänt (VG):**
- [x] Uppfyll alla krav för G.
- [x] Hemsidan ska vara responsiv med minst två breakpoints (till exempel Mobil – Padda – Dator).
- [x] Hemsidan ska ha en fungerande mobil- och desktopmeny, med två olika menyer för olika enheter.
navbar för desktop, hamburger för mobile
- [x] Dynamisk funktionalitet ska finnas med hjälp av JavaScript, CSS Animationer eller CSS Transitions (minst tre funktionaliteter).
- [x] Använd tekniken SCSS/Sass för styling under projektets gång.
- [x] Hemsidan ska vara testad på minst två sätt (till exempel automatiska verktyg, användartestning eller manuellt test). Beskriv mer utförligt om detta under redovisningen.
Manuellt: sidan kan navigeras med tangntbord
Wave: MÅNDAG
- [x] Arbeta självständigt (inom gruppen) under hela projektets gång och visa att ni kan hantera problemlösning och ta egna beslut.