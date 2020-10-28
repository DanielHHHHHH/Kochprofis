# Kochprofis
Kochprofis ist eine Website, die es Ihnen ermöglicht Ihre Lieblingsrezepte festzuhalten und die eigenen Rezepte mit anderen Personen teilen. So dient Kochprofis als ein modernes Tool für Ihr digitales Kochbuch.

## Entwickler
* :woman: Laura Bieberle
* :woman: Gianna Dihpol
* :man: Daniel Haberberger
* :man: Julian Hermle
* :man: Marcel Mahlfeld

## Quickstart

1. git clone https://github.com/DanielHHHHHH/Kochprofis.git
2. "database.sql" in die Datenbank importieren, bestenfalls in phpmyadmin
3. npm install
4. npm start
5. http://localhost:2222

## Anleitung für Benutzer

Um die Website zu nutzen ist es erforderlich, sich zuerst zu registrieren. Dazu muss auf der Startseite der Button "Registrieren" angeklickt werden. Man muss einen Benutzernamen und ein Passwort eingeben.
Nachdem man sich registriert hat, gelangt man sofort auf die Forumseite.
Beim nächsten Mal reicht dann die normale Anmeldung aus.

Auf der Forumsseite angekommen werden Ihnen nun alle gespeicherten Rezepte in Form einer Liste angezeigt.
Mithilfe des Buttons "Rezept erstellen" können Sie ein eigenes Rezept erstellen, selbstverständlich erst wenn alle dafür vorgesehenen Textfelder gefüllt worden sind.
Nach dem Erstellen eines Rezeptes muss der "Aktualisieren" Button geklickt werden, um den aktuellen Stand der Tabelle aller Rezepte anzuzeigen.
Durch den "Button Löschen" können Sie ein bestehendes Rezept löschen, nachdem Sie es durch die Suche selektiert haben.
Der Button "Rezept bearbeiten" ermöglcht es Ihnen, die Daten eines bestehenden Rezepts zu ändern. Hierzu einfach die Daten in den Textfeldern bearbeiten und den bearbeiten Button klicken.

Haben Sie ein passendes Rezept gefunden, können Sie sich über den Button "Ausloggen" von der Website abmelden. Sie gelangen daraufhin auf die Anmeldeseite.

## Architektur

Es folgt eine Beschreibung alle eingesetzten Technologien sowie der Architektur:

**Datenmodell**

Das ist eine Beispiel JSON für alle verwendeten Datenmodelle:

```bash
[ { "id": 1, "name" :"Hier steht der Rezepttitel", "rezepttext": "Hier steht der Rezepttext", "autor": "Hier steht der Autor" } ]
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


**Frontend**

Das Frontend basiert auf drei Seiten. Auf der einen Seite gibt es eine Anmeldeseite und eine Seite zur Registrierung, auf der anderen Seite die eigentliche Forumsseite.

Auf allen Seiten befindet sich das Logo der Website. 

Auf der Anmeldeseite gibt es zwei Textfelder mithlife derer man sich anmelden kann. Außerdem gibt es einen Button durch den man seine Anmeldung bestätigen kann und einen weiteren Button durch den man sich registrieren kann.

Auf der Seite zur Registration befinden sich drei Textfelder, in welche man den gewünschten Benutzernamen, ein Passwort und die Wiederholung der Passworts eingeben muss. Dazu gibt es einen Registrieren Button der die gewünschte Aktion ausführt.

Auf der Forumsseite bilden die Buttons, durch die die Hauptfunktionen ausgeführt werden können in der obersten Linie. Dazu zählen die Buttons "Rezept Suchen", "Rezept Bearbeiten", "Rezept Löschen" und "Aktualisieren". Zusätzlich ist auf der rechten Seite der "Ausloggen" Button, durch den man sich ausloggen kann.

Darunter ist eine Tabelle, die alle gespeicherten Rezepte des Forums anzeigen. Es werden die Spaltennamen "Id", "Titel" und "Autor" angezeigt.

Unter der Tabelle sind die Eingabefelder der Funktionen "Rezept Erstellen" und "Rezept Bearbeiten". Dazu zählen zwei Textfelder, in die der Name des Autors und der Titel geschrieben werden können. Zwischen den Textfeldern befindet sich eine größere Textarea, in welcher der eigentliche Rezepttitel Platz findet. Um die Erstellung eines Rezepts abzuschließen gibt es unter dem Textfeld für den Autor einen Button "Rezept Erstellen".

In der "index.html" befindet sich ein Formular, dass zwei Textfelder und zwei Buttons enthält. Im "index.js" wir dieses Formular über einen fetch angesprochen. Dieser fetch wird ausgelöst, wenn der Button "Anmelden" gedrückt wird. Dadurch wird in der "server.js" der passende REST-Service verwendet. Wenn es keine Fehler gibt, wird man auf die Forumseite weitergeleitet.

In der "index.js" gibt es auch noch einen Event-Listener, der mit einem Button verbunden ist. Wenn man diesen klickt, wird man auf die "register.html" weitergeleitet.

Auf der "register.html" gibt es ein Formular, dass alles Textfelder und Buttons auf der Seite beinhaltet. In der "registerScript.js" gibt es dann einen fetch, der beim klicken des Button ausgelöst wird. Dann wird der richtige REST-Service in der "server.js" gesucht und ausgeführt. Danach wird man auf die "Forum-Seite.html" weitergeleitet.

Auf der "Forum-Seite.html" gibt es ein Formular, dass die Felder zum Anzeigen eines Textes und den Button zum Erstellen eines Textes beinhaltet. Wird der Button gedrückt aktiviert sich der Event-Listener, in dem sich der Fetch befindet. Dann wird in der "server.js" der richtige REST-Service ausgeführt. Die Felder zum Eingeben von den Daten werden geleert und die Daten an die Datenbank übergeben. Es gibt jeweils einen Hinweis für eine erfolgreiche und fehlerhafte Durchführung.

Um sich aus zu loggen gibt es auf der "Forum-Seite.html" einen Button dafür. In der "forumScript.js" gibt es einen passenden Event-Listener, der durch einen Klick auf den Button "Ausloggen" ausgelöst wird. Dadurch wir man auf die Loginseite geführt.

Eine weitere Funktion der "Forum-Seite.html" ist es, einen Eintrag zu löschen. Drückt man den "Löschen-Button", wird ein Event-Listener aktiviert, der den Fetch "delete" enthält. Dann wird in der "server.js" der richtige REST-Service ausgeführt. Die ausgwählten Daten werden aus der Datenbank gelöscht. Daraufhin erfolgt ein Hinweis, der eine erfolgreiche oder fehlerhafte Durchführung kennzeichnet.

Um einen Rezepttext anzuzeigen, muss die ID in das Feld "Rezept Id Auswählen" geschrieben werden und auf den "Rezept Suchen" Button geklickt werden. Mit dem Klick auf den Button wird ein Event-Listener aktiviert, der einen fetch-request beinhaltet. Dadurch werden die zum Eintrag gehörenden Daten aus der Datenbank in das Textfeld "Rezepttext" geladen. Die Bestätigung, ob die Aktion erfolgreich war, erfolgt durch einen alert.

Damit ein Rezept auch bearbeitet werden kann gibt es zu dem noch einen "Rezept bearbeiten" Button. Wird dieser geklickt aktiviert sich ein Event-Listener welcher den Fetch request "update" enthält, durch diesen werden die Inhalte des jeweiligen Rezeptes aktualiesiert und in der Datenbank geändert. Durch einen alert wird außerdem noch  gekennzeichnet ob die Änderung funktioniert hat.

Die angelegten Rezepte sollen auf der Forum-Seite mit ihrer ID, ihrem Titel und dem jeweiligen Autor angezeigt werden. Dies erfolg durch den Fetch "Übersicht", welcher die Daten aus der Datenbank in einer Tabelle ausgibt.