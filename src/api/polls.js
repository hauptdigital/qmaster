export const APP_POLLS_API =
  process.env.REACT_APP_POLLS_API ||
  'https://my-json-server.typicode.com/hauptdigital/qmaster/polls';

export async function postPoll(poll) {
  const response = await fetch(APP_POLLS_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(poll)
  });
  const createdPoll = await response.json();
  return createdPoll;
}
