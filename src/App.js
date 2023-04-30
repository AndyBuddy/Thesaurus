import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css';
import { Home } from './components/Home'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient()

function App() {
  return (
  <QueryClientProvider client={queryClient}>
    <Router>
      <div>
        <nav >
          <ul>
            Welcome to my Thesaurus
            <h6>Created using <a href='https://www.datamuse.com/api/'>datamuse API</a></h6>
          </ul>
        </nav>
        <Switch>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    <ReactQueryDevtools position = 'bottom-right' />
  </QueryClientProvider>
  );
}

export default App;
