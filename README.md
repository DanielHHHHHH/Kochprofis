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
Mithilfe des Buttons "Rezept erstellen" können Sie ein eigenes Rezept erstellen, welches dann für alle Benutzer sichtbar wird.
Nach dem Erstellen eines Rezeptes muss der "Aktualisieren" Button geklickt werden, um den aktuellen Stand der angezeigte Tabelle anzuzeigen.
Durch den "Button Löschen" können Sie ein bestehendes Rezept löschen.
Der Button "Rezept bearbeiten" ermöglcht es Ihnen, die Daten eines bestehenden Rezepts zu ändern.

Haben Sie ein passendes Rezept gefunden, können Sie sich über den Button "Ausloggen" von der Website abmelden. Sie gelangen daraufhin auf die Anmeldeseite.

## Architektur

Es folgt eine Beschreibung alle eingesetzten Technologien sowie der Architektur:

**Datenmodell**

Das ist eine Beispiel JSON für alle verwendeten Datenmodelle:

```bash
[ { "id": 1, "name" :"Hier steht der Name", "rezepttext": "Hier steht der Rezepttext", "autor": "Hier steht der Autor" } ]
```

**REST Services**

**Frontend**

Das Frontend basiert auf drei Seiten. Auf der einen Seite gibt es eine Anmeldeseite und eine Seite zur Registrierung, auf der anderen Seite die eigentliche Forumsseite.

Auf allen Seiten befindet sich das Logo der Website. 

Auf der Anmeldeseite gibt es zwei Textfelder mithlife derer man sich anmelden kann. Außerdem gibt es einen Button durch den man seine Anmeldung bestätigen kann und einen weiteren Button durch den man sich registrieren kann.

Auf der Seite zur Registration befinden sich drei Textfelder, in welche man den gewünschten Benutzernamen, ein Passwort und die Wiederholung der Passworts eingeben muss. Dazu gibt es einen Registrieren Button der die gewünschte Aktion ausführt.

Auf der Forumsseite bilden die Buttons, durch die die Hauptfunktionen ausgeführt werden können in der obersten Linie. Dazu zählen die Buttons "Rezept Suchen", "Rezept Bearbeiten", "Rezept Löschen" und "Aktualisieren". Zusätzlich ist auf der rechten Seite der "Ausloggen" Button, durch den man sich ausloggen kann.

Darunter ist eine Tabelle, die alle gespeicherten Rezepte des Forums anzeigen. Es werden die Spaltennamen "Id", "Titel" und "Autor" angezeigt.

Unter der Tabelle sind die Eingabefelder der Funktionen "Rezept Erstellen" und "Rezept Bearbeiten". Dazu zählen zwei Textfelder, in die der Name des Autors und der Titel geschrieben werden können. Zwischen den Textfeldern befindet sich eine größere Textarea, in welcher der eigentliche Rezepttitel Platz findet. Um die Erstellung eines Rezepts abzuschließen gibt es unter dem Textfeld für den Autor einen Button "Rezept Erstellen".