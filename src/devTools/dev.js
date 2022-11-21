import { composeWithDevTools } from 'redux-devtools-extension';

export default function withDevTools(middlewares) {
  const composeEnhancers = composeWithDevTools({ trace: true });
  return composeEnhancers(middlewares);
}
