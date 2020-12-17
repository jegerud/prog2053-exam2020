# PROG2053 eksamen v2020
Studentnumber: 10143

## Oppgave - Web komponenter
*Merk: det er ferdige PHP skript i oppgave/www/api for å hente og oppdatere informasjon.*

Lag en side som lister ut alle brukere. Hent brukere fra api/fetchUsers.php med fetch i JavaScript. Vis lista med brukere på venstre side av skjermen. Når en bruker velges fra lista skal et skjema for å redigere brukerens info vises på høyre side av skjermen.

I denne oppgaven skal du lage samme funksjonaliteten med web komponenter. I filen oppgave3.html finner du startpunktet for denne oppgaven. Denne filen bruker users-list.js komponenten i js/components mappen til å lage en liste av alle brukere, funksjonaliteten i denne komponenten er ferdig laget. I render (på linje 56) brukes en edit-user.js komponent, denne komponenten får tilsendt den valgte brukeren. Det som mangler i edit-user.js er funksjonaliteten for å oppdatere en bruker.

NB, i oppgave/www/node_modules ligger lit-element med de endringer som skal til for at det fungerer uten å bruke "polymer serve" (dvs, koden fungerer direkte i docker/XAMPP).
