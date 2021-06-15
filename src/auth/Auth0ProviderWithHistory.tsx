import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import { withRouter } from "react-router-dom";
//import { createBrowserHistory } from 'history';

const Auth0ProviderWithHistory: React.FC = (props) => {

    const domain = 'example-secure-api.auth0.com';//process.env.REACT_APP_AUTH0_DOMAIN;
    const clientId = "QaBJCsGCPpUSY7Wed1QCTIBLh47rNte2"; //process.env.REACT_APP_AUTH0_CLIENT_ID;
    //const audience = process.env.REACT_APP_AUTH0_AUDIENCE;
    //const redirectUri={window.location.origin}

    /*
    const history = createBrowserHistory(); 
    const onRedirectCallback = (appState: any) => {
        history.push(appState?.returnTo || window.location.pathname);
    };
    */

    return (
    <Auth0Provider
        domain={domain}
        clientId={clientId}
        redirectUri={window.location.origin}
        //onRedirectCallback={this.onRedirectCallback}
        //audience={this.audience}
    >
        {props.children}
    </Auth0Provider>
    );
    
}

export default withRouter(Auth0ProviderWithHistory);