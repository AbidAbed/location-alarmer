  import Root from './components/Root';
  import {Provider} from 'react-redux';
  import {store} from './store/storeInterface';
  function App() {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
  export default App;
