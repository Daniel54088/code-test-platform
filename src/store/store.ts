import {
    createStore,
    applyMiddleware
  } from 'redux';
  
  import {
    createEpicMiddleware
  } from 'redux-observable';


  import rootEpic from './epics';
  import rootReducer from './reducers';
  
  const epicMiddleware = createEpicMiddleware();
  
  
  const middleware = [
    epicMiddleware,
  ];
  const store = createStore(
    rootReducer(),
    applyMiddleware(...middleware),
  );
  
  epicMiddleware.run(rootEpic);
  
  export default store;
  