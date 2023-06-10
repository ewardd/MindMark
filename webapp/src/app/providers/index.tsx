import compose from 'compose-function';
import { withRedux } from './redux';
import { withRouter } from './withRouter';

export const withProviders = compose(withRedux, withRouter);
