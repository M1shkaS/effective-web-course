import ErrorMessage from 'components/errorMessage/ErrorMessage';
import Spinner from 'components/spinner/Spinner';
import { FC } from 'react';

const setListContent = (process: string, Component: FC) => {
  switch (process) {
    case 'loading':
      return <Spinner />;
    case 'error':
      return <ErrorMessage />;
    case 'confirmed':
      return <Component />;
    default:
      throw new Error('Unexpected process state');
  }
};

export default setListContent;
