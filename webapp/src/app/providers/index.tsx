import compose from 'compose-function';
import { withRedux } from './redux';
import { withAntdConfig } from './withAntdConfig';
import { withRouter } from './withRouter';

export const withProviders = compose(withRedux, withRouter, withAntdConfig);
