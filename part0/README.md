# Exercise 0.4
```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>browser: User types "hello friend" in the text field
    browser->>browser: User clicks the "save" button

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    server-->>browser: Responds with HTTP 302 redirect to /notes
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML document for the notes page
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: CSS file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: JavaScript file
    deactivate server

    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON data from the server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: JSON data containing notes including the new one ("hello friend")
    deactivate server

    Note right of browser: The browser executes the callback function that renders the notes, including the new note
```

# Exercise 0.5
```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>browser: User types a note in the text field
    browser->>browser: User clicks the "save" button

    browser->>browser: Prevent default form submission (e.preventDefault())
    browser->>browser: Create a new note and add it to the notes list
    browser->>browser: Redraw the notes list with the new note

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: HTTP 201 Created (no page reload)
    deactivate server

    Note right of browser: The page stays the same and the new note is displayed without a reload
```
