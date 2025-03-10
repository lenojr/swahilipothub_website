import React from 'react';
import { NextPageContext } from 'next';

interface ErrorProps {
    statusCode: number;
}

const ErrorPage = ({ statusCode }: ErrorProps) => {
    return (
        <div>
            <h1>{statusCode ? `Error ${statusCode}` : 'An error occurred'}</h1>
            <p>
                {statusCode
                    ? `An error ${statusCode} occurred on server`
                    : 'An error occurred on client'}
            </p>
        </div>
    );
};

ErrorPage.getInitialProps = ({ res, err }: NextPageContext) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode };
};

export default ErrorPage;