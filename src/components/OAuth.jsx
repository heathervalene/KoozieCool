import { useEffect } from 'react';
import { useOAuth2 } from 'react-oauth2-auth-code-flow';

import { oauthConfig } from '../oauthConfig';

const OAuth = ({ onAuthenticated }) => {
  const { authCode, getAuthCode, getToken, token } = useOAuth2({
    authorizationUri: oauthConfig.authEndpoint,
    clientId: oauthConfig.clientId,
    redirectUri: oauthConfig.redirectUri,
  });

  useEffect(() => {
    if (authCode) {
      getToken(authCode, {
        grant_type: 'authorization_code',
        client_id: oauthConfig.clientId,
        client_secret: oauthConfig.clientSecret,
        redirect_uri: oauthConfig.redirectUri,
      }).then((token) => {
        onAuthenticated(token);
      });
    }
  }, [authCode, getToken, onAuthenticated]);

  return (
    <div>
      {!token && <button onClick={getAuthCode}>Login with Etsy</button>}
      {token && <p>Authenticated!</p>}
    </div>
  );
};

export default OAuth;