FROM node:16.15-alpine3.15 as build

# Create app directory
WORKDIR /usr/src/app

# Set the environment to
ENV NODE_ENV production

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY ./package*.json ./

# Install dependencies (no devdependencies)
RUN npm ci --omit=dev

# Copy code
COPY . .

# Expose port
EXPOSE 8000

# Change user
RUN chown node:node .
USER node

# Run the application
CMD [ "node", "." ]