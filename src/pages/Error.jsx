import { useRouteError, useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

export const Error = () => {
  const error = useRouteError();
  console.error(error);

  const navigate = useNavigate()
  return (
    <div id="error-page">
      <button onClick={() => navigate('/home')}>Back to home</button>
      <h1>Oops! te equivocaste de url</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}