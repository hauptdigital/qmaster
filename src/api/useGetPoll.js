import React from 'react';
import { getPoll } from './polls';

function useGetPoll(pollId) {
  const [poll, setPoll] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState(false);
  React.useEffect(() => {
    setIsLoading(true);
    getPoll(pollId)
      .then(poll => {
        setPoll(poll);
        setIsLoading(false);
      })
      .catch(error => {
        setErrorMessage(error.message);
      });
  }, [pollId]);
  return { poll, isLoading, errorMessage };
}

export default useGetPoll;
