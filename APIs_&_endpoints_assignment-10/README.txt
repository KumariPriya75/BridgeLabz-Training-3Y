ASSIGNMENT 10 - APIs & ENDPOINTS

Folder: APIs_&_endpoints_assignment-10

FILES
- Each question has its own HTML and JS file.
- Each question has its own JSON Server database:
  q1_db.json through q6_db.json.
- CSS is included inside the HTML files.

REQUIREMENTS
- Install Node.js.
- Open a terminal inside this folder.
- Install JSON Server once if it is not installed:
  npm install -g json-server

RUN EACH QUESTION IN A SEPARATE TERMINAL
Run these commands from this folder:

Q1:
  json-server --watch q1_db.json --port 3001
  Open q1.html with VS Code Live Server.

Q2:
  json-server --watch q2_db.json --port 3002
  Open q2.html with VS Code Live Server.

Q3:
  json-server --watch q3_db.json --port 3003
  Open q3.html with VS Code Live Server.

Q4:
  json-server --watch q4_db.json --port 3004
  Open q4.html with VS Code Live Server.

Q5:
  json-server --watch q5_db.json --port 3005
  Open q5.html with VS Code Live Server.

Q6:
  json-server --watch q6_db.json --port 3006
  Open q6.html with VS Code Live Server.

IMPORTANT
- Run only the JSON Server command for the question you are testing.
- Keep the JSON Server terminal running while using the page.
- Every question uses only its own JSON file and port.
- jQuery and Axios are loaded using CDN links, so an internet connection is needed.
- Q6 sample email addresses are already registered; try a new email address to test successful registration.
- Sample passwords in q6_db.json are for local practice only. Do not use real passwords.
