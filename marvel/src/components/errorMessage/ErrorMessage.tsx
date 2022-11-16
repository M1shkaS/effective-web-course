import { FC } from 'react';
import img from '../../../public/error.gif';

const ErrorMessage: FC = () => {
  return (
    <img
      src={img}
      alt="Error"
      style={{
        display: 'block',
        width: '250px',
        height: '250px',
        margin: '0 auto'
      }}
    />
  );
};

export default ErrorMessage;
