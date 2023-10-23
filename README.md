# hoodr.github.io -> [drewhoo.com](https://drewhoo.com/)

This is my personal blog and portfolio. Check out my site for more information.

## Development

### Set up

```sh
yarn install

# for nvim lsp-config tsserver
yarn dlx @yarnpkg/sdks base

# if you haven't already
yarn add -D typescript-language-server
```

## Available Scripts

Note: `yarn run dev == yarn dev`

In the project directory, you can run:

### `yarn dev`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `.next` folder

Your app is ready to be deployed!

### `yarn start`

self explanatory, starts prod server.

### Deployment

Since we're deploying to `gh-pages` we need to build and deply this as a static app

```sh
next build \
  && touch out/.nojekyll \
  && git add out/ \
  && git commit -m \"Deploy\" \
  && git subtree push --prefix out origin gh-pages"
```

see:
- https://nextjs.org/docs/app/building-your-application/deploying#nextjs-build-api
- https://nextjs.org/docs/app/building-your-application/deploying/static-exports

## Links

- [next-learn repo](https://github.com/vercel/next-learn/tree/master/basics)
- [next eslint](https://nextjs.org/docs/basic-features/eslint)
- [typescript eslint config docs](https://typescript-eslint.io/docs/linting/)
- [airbnb typescript / js styleguide](https://github.com/airbnb/javascript)
- [yarn workspaces](https://classic.yarnpkg.com/lang/en/docs/workspaces/)
- [yarn editor sdks](https://yarnpkg.com/getting-started/editor-sdks) currently opting for `yarn sdks` over `yarn dlx`.

### React Links
- https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
- https://facebook.github.io/create-react-app/docs/code-splitting
- https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size
- https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

# Legacy Notes:

React Source is found at: [react-source](https://github.com/hoodr/hoodr.github.io/tree/react-source)
Personal gh pages sites are always served from the master branch, unlike project pages, hence the below workaround.

# Future Development:

- Feature work should be done on a branch with base at `react-source`
- Run 'npm run build' to create the production build with that feature
- Merge react feature changes to `react-source`
- Create a new branch from master called `build/{day}-{month}-{year}/{build-number}`
  - where build number should move in sequential order (for sanity + documentation sake)
- In the build branch, run `git checkout react-source -- build` to pull in the build folder
- Remove existing build files, and replace them with files from the checked out build folder
  - Retain `[README.md, CNAME]`
- Commit changes, and create a PR
- Inspect the PR, and merge with master

At some point, I'll make a shell script to do this, but in the meantime... it's gonna be manual...
