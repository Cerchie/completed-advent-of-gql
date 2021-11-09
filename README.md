# completed-advent-of-gql

This is the completed version of StepZen's Advent of GraphQL challenge. 

Feel free to clone down and play around! 

A few things to keep in mind:

## Getting Started

You'll want to [sign up for a StepZen account](https://stepzen.com/signup) first thing to get the value for your `STEPZEN_API_KEY`. 

Next, `git clone https://github.com/Cerchie/completed-advent-of-gql && cd completed-advent-of-gql`, then `npm install` (this project uses npm, not yarn).

There are a couple missing files in the .gitignore you'll need to add:

1. `config.yaml`
```
configurationset:
  - configuration:
      name: unsplash_config
      unsplash_clientId: "YOUR_UNSPLASH_CLIENT_ID_WITH_NO_ID_PREFACE_HERE"
```
Then, cd into `/unsplash` and run 'stepzen start'. You'll see a message like:

```
Watching ~/project-name for GraphQL changes

http://localhost:5000/api/random-name

Deploying to StepZen...... done

Successfully deployed api/random-name at 9:51:55 AM

Your endpoint is available at https://username.stepzen.net/api/random-name/__graphql
```

You'll use this endpoint in your .env

2. `.env`

This will look like:

```
STEPZEN_API_URL={{https://username.stepzen.net/api/random-name/__graphql}} (not localhost url)
STEPZEN_API_KEY={{KEY_HERE}}
```

## Running locally

Run `node api/unsplash.js` then open up [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).

Your app is now running locally at your Live Server address! 

## Get help

See StepZen's [Discord](https://discord.com/invite/9k2VdPn2FR) for assistance. 

