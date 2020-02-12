# Awesome Tetris Game

## Project details

- Project name: Awesome Tetris Game
- Project key: ATG
- Project Lead: Oleksandr Starov (https://github.com/oleksandrstarov)
- Project Link: http://awesome-tetris-game-git-tetris.apps.us-west-1.starter.openshift-online.com

## Overview

The main aim of this project was creating the tetris game logic. And for the best game flow on the game page there are:

- the game board with different seven figures and all general tetris logic,
- block with next figure view,
- actual game stats (`level`, `score`, `lines`),
- block with information about type of controls (`default` or `custom`),
- information about spectators,
- block with controls for playing tetris game (`left`, `right`, `rotate`, `down`).

The authorization was implemented into the project using MEAN Stack and a user must login into the app to save his game results to `Leaderboard` or to be able to spectate the other players’ game in real time.
In order to make it possible forms were created, with validations, ability to select the favorite icon and enter general information.
The authorized user has a `Profile` page with his top 10 game results.

The application will allow the user to play Tetris using mouse and keyboard.
By default, user can control the game using keyboard controls such as :

`r` - reload the game; `p` - pause; `Enter` - start a new game; `Aroows Left`, `Right`, `Up` and `Down` - move a figure to the left and right, rotate and increase the fall speed, respectively.

The Player can customize the keyboard controls and these settings remain even after reloading the app.
On the `Option page`, there are two blocks, the first contains information about the `Default controls` and the second, where user can customize the keyboard controls.
The User must take into account the validation of the input, namely he can enter only `Latin letters` and `numbers`.
And if he try to enter the same keyboard control, he will see an error message about the incorrect symbol.

In addition, there is the `Leaderboard` page with all authorized players’ top ten game results.
And if current players' top result isn’t in the top ten, the separate block with his place in the board and game stats will appear.

All authorized players can observe the other players' game in real time. In order to make it possible SocketIO was introduced into the project.
First of all, user must visit the `Spectate` page, where all active games are shown with actual game level and choose one of these games and then he will be able to observe the selected game stats and the current board status.

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
- run "npm run eslint" & "npm run test-headless"
- run "npm run build",
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
|  |   └── directives/ - directory for application directives
|  |   └── enums/ - directory for enums
|  |   └── interfaces/ - directory for interfaces
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

Create the backlog (a list of all the desired features of the application) and board in JIRA:

- create Issue: Task, Bug, Story, Sub-Task (“To Do” status) with the origin estimate, assignee and description;
- create Epics (Project Skeleton, Game logic, Back-end, User management). Decompose all issues into Epics;
- planning, difficulty rating and analysis Sprints (2 weeks);

Start work with Issue:

- change status of issue to “IN PROGRESS”;
- create a New branch in project (name: `feature/ATG-#` or `bugfix/ATG-#`);

When the task is finished, create merge request in github:

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

After merging, status of issue must be changed to “DONE”.

## Unit Testing

Unit testing was implemented using the Jasmine test framework.

`Definition of Done (DoD)`:

The Code coverage report has such a progress:

- 79.87% `Statements`
- 595/74558.6% `Branches`
- 109/18675.49% `Functions`
- 154/20479.27% `Lines`

## Socket.IO logic

Socket.IO allows synchronized communication to take place simply within the app, which means real-time communication.
Our application sends messages about connection, creating and destroy the game room, joining and leaving the certain game room, changing game bord status to the server, along with content.
The listening for messages types `connection`, `new-active-game`, `delete-game`,`join-game`, `leave-game`, `new-stats`, `all-active-games` were added to Socket.IO server.
When the message arrive, server calls the respective callback function and as result spectators can see all active games, observe the other players' game in real time, his actual game stats and game board status.
In addition, player can view the list of his spectators.

## Technologies

- Angular
- TypeScript
- Sass
- RxJS
- Node.js
- Express
- MongoDB
- Socket.IO
