## Introduction

url-for-react is a factory class to centralize router handling for page components.

A big problem using React's `react-router-dom` is the disconnect between Components,
URL routes and parameters.  This can end up in string constants all over the place
,making maintaining routes and components confusing.

The main idea is to have an exported factory Class that builds routes, links
and parameter handling.  This factory class is kept with the component, allowing
easier handling of routing, parameter and component changes.

Importing the factory class into a component allows that component to route to or link
using it.  The component used by `UrlFor` does not need to be exported.  This greatly 
simplifies handling routed components.  Providing further decoupling.

## Installation

```shell
npm install url-for-react
```

## Quick start

Before
------

#### Routed component

```JavaScript
    export default function Word(props) {
        const [word, setWord] = useState(null);
    
        useEffect(() => {
            setWord(props?.match?.params.word)
        }, [props]);
    
        return <h1>Word {word}</h1>
    }
``` 

#### Navigation and switching.

```html
    <ul>
        <li>
            <Link to="/word/hello">Word hello</Link>
        </li>
    </ul>    
    <Switch>
        <Route exact path="/word/:word" component={Word}>
        </Route>
    </Switch>
```

After
-----
#### Routed component

```JavaScript
    export const routeWord = new UrlFor("/word/:word", Word, "Words", "Pick the word");

    export default function Word(props) {
        const [word, setWord] = useState(null);
    
        useEffect(() => {
            setWord(routeWord.matchId(props))
        }, [props]);
    
        return <h1>Word {word}</h1>
    }
``` 
#### Navigation and switching.

```html
    <ul>
        <li>
            {routeWord.LinkTo('hello', 'hello')}
        </li>
    </ul>
    <Switch>
        {routeWord.Route()}
    </Switch>
```
Usage
-----

Factory class

```Javascript
UrlFor(route, component, text, title)
```

| parameter | description | example |
| ---- | ---- | ---- |
| route | a react-router-dom route specification | "/show_word/:word" |
| component | the React component that responds to the route | Word |
| text | text of a link if non supplied by `LinkTo` | "Click me" |
| title | the `title=` attribute for a `LinkTo` | "Open the show word page" |

### methods

#### LinkTo

```javascript
LinkTo(request_id, text, title)
```

Returns a `react-router-dom` Link component.

| parameter | description |
| ---- | ---- | 
| request_id | any single parameter for the link | 
| text | text of the link |
| title | the `title=` attribute |

NOTE: only one parameter or none is allowed.

#### Route

```javascript
Route()
```

Returns a `react-router-dom` Route component for use in `<Switch>`.

NOTE: always uses the `exact` attribute.

#### matchId

```javascript
matchId(props)
```

Returns the parameter passed into the route.  `props` can be `props` or `match` or `params`.

NOTE: only one parameter is supported.  