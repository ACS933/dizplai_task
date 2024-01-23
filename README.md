Hi! this is the repo containing the polling app task!

----DEPENDENCIES

--Main Dependencies:
 - Node.js
 - express
 - react
 - cors
 - nodemon
full list of dependencies available at bottom of page


----HOW TO RUN----
1) in the command terminal, navigate to the project root (./dizplai_task)
2) run the following command: npm run dev
3) in a seperate terminal, navigate to ./displai_task/client
4) run the command: npm start
5) after 4), the web app should be opened in your browser.

----EXPLANATION OF PROJECT

Full disclosure: I have never really made a web app before! in order to do this task, I learned (or attempted to learn) node.js, express, react and CSS for the first time. as a result of this, I didn't have much time left over to actually complete the task!

The finished part of the web app is the voting page. the poll and poll questions are fetched from the api and stored as states, which are then displayed on the client page. The user can select an answer to the poll by clicking the corresponding button, and then clicking submit. the sumbit button will display an alert if no answer has been selected.

I did not have time to finish a lot of the task:
 - the selected answer is not sent back to the api upon submission, instead a placeholder alert containing the users selected option is displayed
 - the votes resource has not been implemented
 - the voting results page has not been implemented, partly because the votes resource would need to be fetched, and it doesn't exist currently
 - validation of the poll (e.g minimum/maximum number of options) has not been implemented

needless to say, if I had more time I would implement these features.

testing:
I used a program called Postman to test the app's api functions, and I tested the client side mainly through using inspect element.

technologies used:
for the backend, I used node.js with express. I made this decision because express is lightweight and it is simple to define routes. for the frontend, I chose to use REACT. REACT was useful for creating components that are dynamically updated. for example, the poll buttons are all part of a buttonGroup component, which dynamically chooses the number of buttons in the group by checking how many poll options there are. the Props feature was also useful for passing the poll options to the component after they have been fetched from app.ts.

hosting/security
the client is on localhost port 3000 while the server listens to localhost port 8000. if the app was to be hosted, it could be hosted on the Dizplai website, especially if other features of a similar nature already existed on the site. alternatively, a separate domain could be purchased. security wise, the app currently uses the http protocol, which transmits all data in plaintext. this in insecure, and the client browser would also probably throw up a giant warning symbol and not let the user visit the app. https should be used instead, which would require reprogramming a lot of the api methods. The site would also need an SSL certificate, but this isn't a huge issue since they can be obtained for free, although some human effort is required.

--full list of dependencies:
dizplai_task@1.0.0 C:\programming\dizplai_task
├─┬ @types/cors@2.8.17
│ └── @types/node@20.11.5 deduped
├─┬ @types/express@4.17.21
│ ├── @types/body-parser@1.19.5
│ ├── @types/express-serve-static-core@4.17.41
│ ├── @types/qs@6.9.11
│ └── @types/serve-static@1.15.5
├─┬ @types/node@20.11.5
│ └── undici-types@5.26.5
├─┬ concurrently@8.2.2
│ ├── chalk@4.1.2
│ ├── date-fns@2.30.0
│ ├── lodash@4.17.21
│ ├── rxjs@7.8.1
│ ├── shell-quote@1.8.1
│ ├── spawn-command@0.0.2
│ ├── supports-color@8.1.1
│ ├── tree-kill@1.2.2
│ └── yargs@17.7.2
├─┬ cors@2.8.5
│ ├── object-assign@4.1.1
│ └── vary@1.1.2
├── dotenv@16.3.2
├─┬ express@4.18.2
│ ├── accepts@1.3.8
│ ├── array-flatten@1.1.1
│ ├── body-parser@1.20.1
│ ├── content-disposition@0.5.4
│ ├── content-type@1.0.5
│ ├── cookie-signature@1.0.6
│ ├── cookie@0.5.0
│ ├── debug@2.6.9
│ ├── depd@2.0.0
│ ├── encodeurl@1.0.2
│ ├── escape-html@1.0.3
│ ├── etag@1.8.1
│ ├── finalhandler@1.2.0
│ ├── fresh@0.5.2
│ ├── http-errors@2.0.0
│ ├── merge-descriptors@1.0.1
│ ├── methods@1.1.2
│ ├── on-finished@2.4.1
│ ├── parseurl@1.3.3
│ ├── path-to-regexp@0.1.7
│ ├── proxy-addr@2.0.7
│ ├── qs@6.11.0
│ ├── range-parser@1.2.1
│ ├── safe-buffer@5.2.1
│ ├── send@0.18.0
│ ├── serve-static@1.15.0
│ ├── setprototypeof@1.2.0
│ ├── statuses@2.0.1
│ ├── type-is@1.6.18
│ ├── utils-merge@1.0.1
│ └── vary@1.1.2 deduped
├─┬ nodemon@3.0.3
│ ├── chokidar@3.5.3
│ ├── debug@4.3.4
│ ├── ignore-by-default@1.0.1
│ ├── minimatch@3.1.2
│ ├── pstree.remy@1.1.8
│ ├── semver@7.5.4
│ ├── simple-update-notifier@2.0.0
│ ├── supports-color@5.5.0
│ ├── touch@3.1.0
│ └── undefsafe@2.0.5
├─┬ react-bootstrap@2.10.0
│ ├── @babel/runtime@7.23.8
│ ├── @restart/hooks@0.4.15
│ ├── @restart/ui@1.6.6
│ ├── @types/react-transition-group@4.4.10
│ ├── @types/react@18.2.48
│ ├── classnames@2.5.1
│ ├── dom-helpers@5.2.1
│ ├── invariant@2.2.4
│ ├── prop-types-extra@1.1.1
│ ├── prop-types@15.8.1
│ ├── react-dom@18.2.0
│ ├── react-transition-group@4.4.5
│ ├── react@18.2.0
│ ├── uncontrollable@7.2.1
│ └── warning@4.0.3
└── typescript@5.3.3
