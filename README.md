# Formation React JS niveau 2
_Auteur: Christophe DUFOUR - opusidea@gmail.com_
```
git clone https://github.com/cdufour/inetum-react.git
cd inetum-react
```

## Utilisation de React sans JSX
```
cd demo-react-no-jsx
npx serve
```
[Intro avec exemples](https://reactgo.com/react-createelement-example/)

## React concepts avancés
```
cd react-advanced
npm i
```
* [Live Demo (build de l'application en production)](http://reactjs-niveau2-demo.opusidea.org/)

### Création d'un projet react demo avec env de développement intégré
```
npm i -g create-react-app
create-react-app demo --template typescript
```

**API utilisée pour les composants Issues/IssuesFc**
* https://api.github.com/repos/ContentPI/ContentPI/issues

### useEffect
```
useEffect(() => {
// When you pass an array of dependencies the useEffect hook will only
// run
// if one of the dependencies changes.
}, [dependencyA, dependencyB])
```

### useCallback
The React useCallback Hook returns a memoized callback function.\
The useCallback Hook only runs when one of its dependencies update.\
This can improve performance.

### HOC
The memo High Order Component (HOC) is similar to PureComponent of a React class.\
It performs a shallow comparison of the props (meaning a superficial check).\
If we try to render a component with the same props all the time, the component will render just once and will memorize.\
The only way to re-render the component is when a prop changes its value.\
[Exemple HOC: AuthWrapper](https://codepen.io/chrischuck/pen/yRwMeo?editors=0010)

### Context
Context provides a way to share data between components without passing a prop to all the child components.\
[Context avec Typescrypt](https://felixgerschau.com/react-typescript-context)

### i18n
```
npm install react-i18next i18next
```
**Liens**
* [Site web](https://react.i18next.com/)
* [Tuto Youtube (en)](https://youtu.be/Od6VRVJH15Y)

### Animations
```
npm i react-transition-group
```
[Tuto Youtube (en)](https://youtu.be/BZRyIOrWfHU)


### Reactjs code snippets (vscode extension)
[Installation](https://marketplace.visualstudio.com/items?itemName=xabikos.ReactSnippets)

### Suspense/swr
```
npm i swr react-loading-skeleton styled-components
npm i @types/styled-components
```
**Liens**
* [Site web Skeleton React](https://skeletonreact.com/)
* [Site web SWR](https://swr.vercel.app/)
* [How React Suspense and Concurrent mode work with Promises | Tutorial](https://youtu.be/C-AlTVKgs3Y)

### Route based Code Splitting with React Router
[Tuto youtube (en)](https://youtu.be/5ZFK_5V8VpI)

### Testing
```
npm test src/tmp/DemoTesting
```
### Redux
* [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=fr)
* [Utiliser Redux DevTools avec TypeScript](https://www.mydatahack.com/getting-redux-devtools-to-work-with-typescript/)

#### Redux Persist
```
npm i redux-persist
```
* [Documentation depuis le site de redux](https://redux-toolkit.js.org/usage/usage-guide#use-with-redux-persist)
* [Page NPM](https://www.npmjs.com/package/redux-persist)

#### Redux Form
```
npm i redux-form @types/redux-form
```
[Exemple de code](https://codesandbox.io/s/mZRjw05yp)


## Demo Nextjs
Le framework Nextjs permet de créer des applications react côté serveur\
et de pré-rendre les réponses HTTP avant de les envoyer au client.\
Le client dispose ainsi d'une page html complète favorisant le SEO et le partage de contenu
```
cd demo-nextjs
npm i
npm run dev
```
**Liens**
* [Site web](https://nextjs.org/)
* [Rapide présentation sur Youtube (en)](https://youtu.be/Sklc_fQBmcs)