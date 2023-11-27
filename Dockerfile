# Start your image with a node base image
FROM node:12-alpine

# The /app directory should act as the main application directory
WORKDIR /app

# Copy local directories to the current local directory of our docker image (/app)
COPY ./dist/AwesomeTetrisGame ./dist

RUN npm install -g serve@13.0.4

EXPOSE 3000

# Start the app using serve command
CMD [ "serve", "-s", "dist" ]
