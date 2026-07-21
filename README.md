# Compilatore Scheda Tecnica Ledwall (PWA - Euroledwall)

Questo pacchetto contiene l'applicazione Web PWA completa per la generazione delle schede tecniche di Euroledwall, pronta per essere pubblicata su **GitHub Pages** e installata come app offline.

## Contenuto del Pacchetto
1. `index.html` - Il codice HTML che hai corretto e approvato, con integrato il collegamento al Manifest e al Service Worker.
2. `manifest.json` - File di configurazione Web App Manifest (nome, colori del brand `#00AEEF`, icone e modalità standalone).
3. `sw.js` - Service Worker per abilitare il funzionamento **100% Offline** e la cache automatica delle immagini e dei fogli di calcolo.
4. `README.md` - Questo file di istruzioni.

---

## 📌 Risposta alla tua domanda sulle immagini su GitHub

> *"Per far sì che si vedano le immagini del pdf, sulla repository basta che metto le foto come ho fatto mettendo tutto dentro una cartella del pc?"*

**SÌ, esattamente!** 
Quando pubblichi un progetto su **GitHub Pages**, la cartella della repository si comporta esattamente come la cartella del tuo PC.

### ⚠️ REGOLE FONDAMENTALI PER I NOMI DELLE IMMAGINI SU GITHUB:
1. **Nessuna sottocartella:** Metti i file delle immagini (`LOGO.png`, `STRUTTURA.png`, `ESEMPIO1.png`, `ESEMPIO2.png`) **nella root principale** della repository, esattamente accanto ai file `index.html`, `manifest.json` e `sw.js`.
2. **Attenzione a Maiuscole e Minuscole (Case-Sensitive):** A differenza di Windows, i server di GitHub (Linux) distinguono tra lettere maiuscole e minuscole.
   - Nel tuo codice HTML le immagini sono chiamate: `LOGO.png`, `STRUTTURA.png`, `ESEMPIO1.png`, `ESEMPIO2.png`.
   - Assicurati che i file che carichi su GitHub si chiamino **esattamente con le stesse lettere maiuscole e la stessa estensione** (`.png`).
   *(Nota: nel Service Worker abbiamo incluso per sicurezza sia le estensioni `.png` che `.jpg` in modo da coprire ogni evenienza di cache).*

---

## 🚀 Come Pubblicare su GitHub Pages (Guida Step-by-Step)

1. **Crea una nuova Repository su GitHub:**
   - Vai su GitHub e clicca su **New Repository** (es. chiamala `scheda-tecnica-ledwall`).
   - Lasciala **Public** e clicca su **Create repository**.

2. **Carica i File:**
   - Clicca sul link *"uploading an existing file"* sulla pagina della repository appena creata.
   - Trascina all'interno **TUTTI i file di questo pacchetto** (`index.html`, `manifest.json`, `sw.js`, `README.md`) e **TUTTE e 4 le immagini** (`LOGO.png`, `STRUTTURA.png`, `ESEMPIO1.png`, `ESEMPIO2.png`).
   - Clicca su **Commit changes** in basso.

3. **Attiva GitHub Pages:**
   - Vai nella scheda **Settings** (Impostazioni) della tua repository.
   - Nella barra laterale di sinistra, clicca su **Pages**.
   - Sotto la voce **Build and deployment -> Source**, seleziona **Deploy from a branch**.
   - Sotto **Branch**, seleziona il menu a tendina (dove c'è scritto `None`), scegli il ramo **main** (o `master`) e lascia la cartella `/ (root)`. Clicca su **Save**.

4. **Fatto!**
   - Dopo 1-2 minuti, in cima alla pagina di GitHub Pages comparirà l'URL ufficiale della tua Web App (es. `https://tuonome.github.io/scheda-tecnica-ledwall/`).
   - Aprendolo da PC o Smartphone, il browser proporrà automaticamente di **"Installare l'App"** (PWA) sul desktop o nella schermata home!
