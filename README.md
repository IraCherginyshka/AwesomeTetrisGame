# Awesome Tetris Game

## Project details

- Project name: Awesome Tetris Game
- Project key: ATG
- Project Lead: Oleksandr Starov (https://github.com/oleksandrstarov)
- Project Link: http://awesome-tetris-game-git-tetris.apps.us-west-1.starter.openshift-online.com

## Overview

The application will allow user to play Tetris by using controls such as Play, Pause and Reset and controls for rotating or moving blocks - Left, Right, Down, Drop, Rotation. User will be able to use mouse and keyboard, set customer settings (key assignment, show/hide labels for controls).

The application will show information about the level, score, speed, next block view. I will add functionality to the spinner component for visualization of loading status and a component for indication of losing the game.

Also, the application will allow user to see leaderboard and become part of it by winning the game (for this functionality authorization and back-end will be used in the app).

## Project setup

Before starting working on the project make sure that the following tools are installed:

- Git
- Latest LTS version of [NodeJS](https://nodejs.org/uk/) & [NPM](https://www.npmjs.com/get-npm)

## Development mode

```
# Start the doc viewer application so you can see your local changes in the browser on http://localhost:4200/.
$ npm run start

# Run ESLint.
$ npm run eslint

# Pre-hooks
"husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
```

## Build

`Push` all changes in branch `master`;

`auto` steps:

- checkout on `pr-pages` branch
- run "npm ci"
- run "npm run eslint" & "npm run test"
- run "ng build --prod",
- copy `dist/` directory to the `server/` directory
- delete all source files and folders that are not required for deployment

OpenShift platform was chosen to deploy the project.

It subscribes to changes in the `pr-pages` branch and after 5-6 minutes automatically adds all changes to the site using hooks.

## Project structure

```
AwesomeTetrisGame/
├── server/ - directory for Node configuration
|  └── dist/ - the build folder which contains all files and folders which can be hosted in server
|  └── models/ - directory for models
|  └── MEAN-specific configuration files
|
├── src/ - directory for code sources
|  └── app/ - directory for files in which application logic and data are defined
|  |   └── components/ - directory for components, templates, styles and unit tests
|  |   └── constants/ - directory for application constants
|  |   └── enums/ - directory for enums
|  |   └── models/ - directory for models
|  |   └── services - directory for services
|  └── assets/ - directory for static assets
|  └── environments/ directory contains build configuration options for particular target environments
└── application-specific configuration files
```

## General Naming Guidelines

```
#Components
@Component({ ... })
export class AppComponent { }

#file name
app.component.ts
```

```
#Services
@Injectable({ providedIn: 'root' })
export class GameService {}

#file name
game.service.ts
```

## Way of work

1. Create the backlog (a list of all the desired features of the application) and board in JIRA:

   - create Issue: Task, Bug, Story, Sub-Task (“To Do” status) with the origin estimate, assignee and description;
   - create Epics (Project Skeleton, Game logic, Back-end, User management). Decompose all issues into Epics;
   - planning, difficulty rating and analysis Sprints (2 weeks);

2. Start work with Issue:

   - change status of issue to “IN PROGRESS”;
   - create a New branch in project (name: `feature/ATG-#` or `bugfix/ATG-#`);

3. When the task is finished, create merge request in github:

   - assign mentor to code review;
   - log work;
   - update JIRA with link to request and status of issue “IN REVIEW”;
   - mentor code review;

   ##### Commit and push all recent changes

   - on the project we use a git flow model.
     Some basic Git commands are:

   ```
   git status
   git add
   git commit -m 'Commit'
   git pull
   git push
   ```

   - [Git flow tutorial](https://leanpub.com/git-flow/read)

4. After merging, status of issue must be changed to “DONE”.

## Technologies

- Angular
- Node.js
- Sass
- Socket.IO
- Express
- Passport.js

## Nice to have requirements

Game implementation in group at the same time and with showing of all progress while playing (using WebSocket).
