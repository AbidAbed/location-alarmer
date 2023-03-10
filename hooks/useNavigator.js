import {useSelector} from 'react-redux';
import AlarmsPage from '../pages/AlarmsPage';
import MapPage from '../pages/MapPage';
function useNavigator() {
  const currentPath = useSelector(state => state.config.currentPath);
  switch (currentPath) {
    case '/alarms':
      return <AlarmsPage />;
    case '/map':
      return <MapPage />;
    default:
      return 'error';
  }
}
export default useNavigator;
