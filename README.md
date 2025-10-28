# Portfolio Radky Filipové

Toto je zdrojový kód pro osobní portfolio Radky Filipové, vytvořené v Reactu a Tailwind CSS.

## Jak nasadit na GitHub Pages

Tento projekt je navržen jako statická stránka a lze jej snadno nasadit na GitHub Pages. Protože projekt nepoužívá tradiční build proces (jako `npm run build`), nasazení spočívá v nahrání zdrojových souborů a správném nastavení GitHubu.

### Důležitá poznámka ke struktuře

GitHub Pages standardně hledá soubor `index.html` v kořenovém adresáři vašeho repozitáře. Váš projekt má tento soubor ve složce `public`. Aby nasazení fungovalo správně, je potřeba provést malou úpravu struktury.

**Doporučený postup:**

1.  **Přesuňte `index.html`**: Přesuňte soubor `public/index.html` do hlavního (kořenového) adresáře projektu. Složku `public` pak můžete smazat.
2.  **Upravte cestu ke skriptu**: V souboru `index.html` (nyní v kořenovém adresáři) změňte cestu k hlavnímu skriptu. Najděte tento řádek:
    ```html
    <script type="text/babel" data-type="module" src="/index.tsx"></script>
    ```
    A změňte jej na relativní cestu (odstraňte lomítko na začátku):
    ```html
    <script type="text/babel" data-type="module" src="index.tsx"></script>
    ```
3.  **Nahrajte změny**: Uložte změny a nahrajte je (commit & push) do vašeho GitHub repozitáře.

### Postup nasazení krok za krokem

Po provedení výše uvedené úpravy struktury postupujte následovně:

1.  **Otevřete nastavení repozitáře**
    Na stránce vašeho repozitáře na GitHubu klikněte na záložku **"Settings"**.

2.  **Přejděte do sekce "Pages"**
    V levém menu v nastavení najděte a klikněte na položku **"Pages"**.

3.  **Nastavte zdroj nasazení**
    - V sekci "Build and deployment" pod "Source" vyberte **"Deploy from a branch"**.
    - V části "Branch" vyberte vaši hlavní větev (obvykle `main`).
    - Složku (`Folder`) ponechte nastavenou na **`/ (root)**.
    - Klikněte na **"Save"**.

    

4.  **Počkejte na nasazení**
    GitHub nyní spustí proces nasazení (tzv. GitHub Action). Může to trvat minutu nebo dvě. Stav nasazení můžete sledovat v záložce **"Actions"** vašeho repozitáře.

5.  **Hotovo!**
    Jakmile je proces dokončen, vaše stránka bude dostupná na adrese, kterou uvidíte nahoře v sekci "Pages". Adresa bude mít formát:
    `https://<vase-uzivatelske-jmeno>.github.io/<nazev-repozitare>/`

Váš web je nyní online!
