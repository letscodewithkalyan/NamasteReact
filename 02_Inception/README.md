## Topics Covered

- Understanding Git and GitHub (Differences and Usage)
- Configuring a GitHub project locally
- Preparing a production-ready application:
  - Minification
  - Bundling
  - Chunking
  - Image optimization
  - Removing comments
  - Code splitting
  - Compressing images
  - Deploying to production
- Creating a React Project manually (without CLI commands)
- Initializing npm in a project and adding dependencies and devDependencies
- Understanding `package.json`, `package-lock.json`, and `node_modules`
- Common Bundlers: Webpack, Parcel, Vite
- Introduction to Parcel (Bundler) for fast and production-ready React apps
- NPM - The standard repository for packages (not an acronym for Node Package Manager)
- Understanding versioning: caret (`^`) and tilde (`~`)
- Semantic versioning (Major.Minor.Patch)
- Managing transitive dependencies
- Introduction to `npx`
- Installing React and React-DOM via dependencies
- BrowsersList
- Building a production-ready web app with Parcel (generating `dist` folder):

  ```sh
  npx parcel index.html
  npx parcel build index.html

  ```

- React is fast not only with React but with bundle tools coming along with it.
- [Parcel](https://parceljs.org/) is a zero-configuration build tool (bundler) that helps optimize React apps by improving build speed, reducing bundle size, and enhancing performance. Here’s how it makes React fast:

# Parcel

- DEV Build
- Local Server
- HMR - Hot Module Replacement (Hot reload in mobile) (Parcel uses file wacther algarotham which is written in c++ for this)
- Caching - For faster builds
- Image optimization
- Minification
- Bundling
- Compress
- Consistent hashing
- Code spliting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPS
- [ParcelJs](https://parceljs.org/)

- Native performance
- Multi-core
- Reliable caching
- Lazy Dev Builds
- Tree Shaking

## for building with parcel

- npx parcel index.html (DEV)
- npx parcel build index.html (Prod)

# Browers List

-[BrowersList](https://browserslist.dev/?q=bGFzdCAyIHZlcnNpb25z)

```
"browserslist":[
"last 2 chrome versions",
"last 2 firefox versions"
]
```
