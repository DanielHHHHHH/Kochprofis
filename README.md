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

**REST Services**

In der server.js werden alle REST-Service durchgeführt.
Mit dem "connection.connect" wird eine Verbindung zur Datenbank aufgebaut. Dabei wird eine Fehlermeldung ausgegeben, wenn die Verbindung nicht funktioniert hat und einen Eintrag in der Konsoloe, wenn die Verbinung erfolgreich war.

Mit der REST-Funktion "post" werden die Daten auf der Webseite mit den Daten aus der Datenbank abgeglichen. 
Dies wird beim einloggen und dem Registrieren neuer Benutzer verwendet. 
Zudem hat es die Funktion eingegebene Daten auf der Website, in die Tabellen von der Datenbank einzufügen. 
Somit kann man auf unserer Seite sich als neuen Benutzer anlegen und neue Rezepte in die Datenbank hinzufügen.

Um Daten aus der Datenbank löschen zu können, wird die Funktion "delete" verwendet. Mit ihr wird eine bestimmte Zeile aus der Datenbank oder mehrere Datenbankinhalte gelöscht.
Auf der Website wählt man hier die ID eines Rezeptes aus und über die Funktion wird die Zeile mit der übereinstimmenden ID aus der Datenbank gelöscht.

Damit Daten in der Tabelle auf der Forumseite angezeigt werden, wird die REST-Funktion "get" verwendet. Über diese Funktion kann man Datenbankinhalte anfordern und anzeigen lassen.


** Frontend **


