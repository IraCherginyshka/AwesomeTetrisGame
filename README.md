# Awesome Tetris Game

## Project details

- Project name: Awesome Tetris Game
- Project key: ATG
- Project Lead: Oleksandr Starov (https://github.com/oleksandrstarov)

## Overview

The application will allow user to play Tetris by using controls such as Play, Pause and Reset and controls for rotating or moving blocks - Left, Right, Down, Drop, Rotation. User will be able to use mouse and keyboard, set customer settings (key assignment, show/hide labels for controls).

The application will show information about the level, score, speed, next block view. I will add functionality to the spinner component for visualization of loading status and a component for indication of losing the game.

Also, the application will allow user to see leaderboard and become part of it by winning the game (for this functionality authorization and back-end will be used in the app).

## Way of work

1. Create the backlog (a list of all the desired features of the application) and board in JIRA:

   - create Issue: Task, Bug, Story, Sub-Task (“To Do” status) with the origin estimate, assignee and description;
   - create Epics (Project Skeleton, Game logic, Back-end, User management). Decompose all issues into Epics;
   - planning, difficulty rating and analysis Sprints (2 weeks);

2. Start work with Issue:

   - change status of issue to “IN PROGRESS”;
   - create a New branch in project (name: ‘feature/’ or ‘bugfix/’ with ‘ATG-<#>’ );

3. When the task is finished, create merge request in github:

   - assign mentor to code review;
   - log work;
   - update JIRA with link to request and status of issue “IN REVIEW”;
   - mentor code review;

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
