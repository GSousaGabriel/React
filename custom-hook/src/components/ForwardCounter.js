import Card from './Card';
import useCounter from '../hooks/use-counter';

const ForwardCounter = () => {
  const counter= useCounter('forward')

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
