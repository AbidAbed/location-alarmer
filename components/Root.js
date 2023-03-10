import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import useNavigator from '../hooks/useNavigator';
function Root() {
  const alarms = useSelector(state => state.alarms);
  const [renderedComponent, setRenderedComponent] = useState();
  const currentPath = useSelector(state => state.config.currentPath);
  useEffect(() => {
    setRenderedComponent(useNavigator());
  }, [currentPath]);
  return <>{renderedComponent}</>;
}
export default Root;
