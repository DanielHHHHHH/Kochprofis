# Kochprofis
Kochprofis ist eine Website, die Ihnen hilft, Ihr perfektes Kochrezept zu finden. Sie können zusätzlich noch eigene Rezepte mit anderen Personen teilen.

## Entwickler
* :woman: Laura Bieberle
* :woman: Gianna Dihpol
* :man: Daniel Haberberger
* :man: Julian Hermle
* :man: Marcel Mahlfeld

## Quickstart

1. git clone https://github.com/DanielHHHHHH/Kochprofis.git
2. 
3. npm install
4. npm start
5. http://localhost:2222

## Anleitung für Benutzer

Um die Website zu nutzen ist es erforderlich, sich zuerst zu registrieren. Dazu muss auf der Startseite der Button "Registrieren" angeklickt werden. Man muss einen Benutzernamen und ein Passwort eingeben.
Nachdem man sich registriert hat, kann man auf die "Anmeldeseite" zurückehren und sich mit den selbst festgelegten Daten anmelden.

Nach der erfolgreichen Anmeldung wird man automatisch auf die eigentliche Website geleitet.
Hier werden Ihnen nun alle gespeicherten Rezepte in Form einer Liste angezeigt.
Mithilfe des Buttons "Rezept erstellen" können Sie ein eigenes Rezept erstellen, welches dann für alle Beutzer sichtbar wird.
Nach dem Erstellen eines Rezeptes muss der "Aktualisieren" Button geklickt werden, um den aktuellen Stand der angezeigte Tabelle anzuzeigen.
Durch den "Button Löschen" können Sie ein bestehendes Rezept löschen.
Der Button "Rezept bearbeiten" ermöglcht es Ihnen, die Daten eines bestehenden Rezepts zu ändern.

Haben Sie ein passendes Rezept gefunden, können Sie sich über den Button "Ausloggen" von der Website abmelden. Sie gelangen daraufhin auf die Anmeldeseite.

## Architektur

Es folgt eine Beschreibung alle eingesetzten Technologien sowie der Architektur:

** Datenmodell**

Das ist eine Beispiel JSON für alle verwendeten Datenmodelle:

```bash
[ { "id": 1, "name" :"Hier steht der Name", "rezepttext": "Hier steht der Rezepttext", "autor": "Hier steht der Autor" } ]
```

** REST Services **

** Frontend **


