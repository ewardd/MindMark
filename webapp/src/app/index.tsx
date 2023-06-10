import { Routing } from '@pages/index';
import './index.scss';
import { withProviders } from './providers';

const App = () => <Routing />;

export default withProviders(App);
