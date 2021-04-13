# hoodr.github.io -> [drewhoo.com](https://drewhoo.com/)

This is my personal website and photo portfolio. Check out my site for more information.

# Notes:

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

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), because what isn't?
