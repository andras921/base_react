import React from 'react';
import Alert from '@material-ui/lab/Alert';


const ErrorMessage = () => {
    return (
        <div>
            <Alert severity="error">Unexpected error!</Alert>
        </div>
    );
};

export default ErrorMessage;