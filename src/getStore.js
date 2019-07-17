import { createStore, combineReducers, applyMiddleware} from "redux";
import { identity } from 'lodash';
import createSagaMiddleware from 'redux-saga';
import { createLogger} from "redux-logger";
import fetchTeamsSaga from './sagas/fetch-teams.saga';


export default function (defaultState) {
    const sagaMiddleware = createSagaMiddleware();
    const middlewareChain = [sagaMiddleware];
    if (process.env.NODE_ENV === 'development') {
        const logger = createLogger();
        middlewareChain.push(logger);
    }
    const store = createStore(identity, defaultState, applyMiddleware(...middlewareChain));
    sagaMiddleware.run(fetchTeamsSaga);
    return store;
}
