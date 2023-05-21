# mailnotes

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

## 1 - Start ##
Create new nuxt app

## 2 - Setup Nuxtjs/Auth ##
Add nuxtjs/auth-next to handle auth logic through middleware. If user is not logged in, he'll be redirected to /login

## 3 - Show user status on navbar ##
Basic setup of the navbar showing the user auth status

## 4 - Types for notes && emails  ##
Adding types according to the openapi specs

## 5 - Setup Pinia and NotesStore ##
Add Pinia keep the state of the notes we'll retrieve from the server 