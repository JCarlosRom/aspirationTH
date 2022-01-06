import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from "@apollo/client"
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./Home/Home"
import Detail from "./Detail/Detail"

const httpLink = {
  uri: 'https://api.github.com/graphql',
  headers:{
    authorization:`bearer ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`
  }
}
console.log(`bearer ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`)
// Initialize Apollo Client
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink(httpLink),
})



function AppRouter(){
  return (
    <div id="wrapper" >
       <Router>
          <Switch>
            <Route path="/detail">
              <Detail/>
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
      </Router>
    </div>
   
  )
}

function App() {
  return (
      <ApolloProvider client={client}>
        <AppRouter/>
      </ApolloProvider>
  );
}

export default App;
