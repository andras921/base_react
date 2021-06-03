import React from 'react';
import { useTheme } from '@material-ui/core/styles';

const FullPageError = () => {
    const theme = useTheme();

    return (
        <div
            role="alert"
            style={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <p style={{color: theme.palette.error.main}}>Uh oh... There's a problem. Try refreshing the app.</p>
        </div>
    );
};

export default FullPageError;