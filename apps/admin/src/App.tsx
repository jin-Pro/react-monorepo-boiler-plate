import { Outlet } from 'react-router-dom';

const App = () => (
  <>
    <Outlet />
  </>
);

App.Error = () => <>error</>;

export default App;
