# Social Network

> Hi, I'm Violet, a passionate web developer who loves to create. This is my attempt to build a social network like Twitter or VK, or maybe something in between. I'm not sure yet, but I'm having fun exploring the possibilities. This is my long-time dream and now that I've learned vue, I want to learn nuxt and make it come true.
>
> This project is still a work in progress, but you can check out the future features and screenshots below. You can also clone this repo and run it locally if you want to see it in action or contribute to it. I welcome any feedback or suggestions. Thank you for reading!

## The features that will be

- Create an account and customize your profile
- Post messages, images, and links
- Like posts and comment them
- Search for users and topics

Maybe some of these features will be (I'm still stupid lol):

- Follow other users and see their posts on your timeline
- Receive notifications for new messages and interactions
- Chat with other users in real-time

## Screenshots

> Coming soon

# Installation

To run this project locally, you need to have node.js and npm installed on your machine. Then follow these steps:

<!-- start:code block -->

## Clone this repository

```bash
git clone https://github.com/wivvz/social-nuxt
cd social-nuxt
```

## Install dependencies

```bash
# npm
npm install

# pnpm
pnpm install
```

## Copy the example .env file

```bash
cp .env.example .env
```

### Edit the .env file and set your mongoDB connection string

> I also left a hint in .env.example on how to create random strings for JWT (of course, it's stupid that one is in nuxt.config.ts, and the other is in .env, but okay)

```bash
# .env
MONGODB_URI="mongodb://localhost:27017"
```

## Run the app

```bash
# npm
npm run dev

# pnpm
pnpm run dev
```

## Technologies

This project is built with the following technologies:

- Nuxt.js - a framework for building Vue.js applications
- Tailwind CSS - a utility-first CSS framework
- MongoDB - a document database
- JWT - a JSON Web Token
- Pinia - a state management library
- TypeScript - a superset of JavaScript

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
