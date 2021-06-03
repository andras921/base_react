import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import UnauthenticatedContent from "./unauthenticatedContent";
import AuthenticatedContent from "./authenticatedContent";
import {MuiThemeProvider} from "@material-ui/core";
import {theme} from "./styles/theme";
import {QueryClient, QueryClientProvider} from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

function App() {

    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                retry: 2,
                //cacheTime: 10000,
                refetchOnWindowFocus: false,
            },
        },
    });

    const user = false;

    return (
        <QueryClientProvider client={queryClient}>
            <MuiThemeProvider theme={theme}>
                <Router>
                    {user ? <AuthenticatedContent/> : <UnauthenticatedContent/>}
                </Router>
            </MuiThemeProvider>
            <ReactQueryDevtools initialIsOpen />
        </QueryClientProvider>)
}

export default App;
