import React from 'react';
import { Helmet } from 'react-helmet';

const PageTitle = ({ title, desc }) => {
    return (
        <Helmet htmlAttributes={{ lang: "en" }} title={`${title} | Sara Portfolio`}>
            <meta property="og:title" content={`${title} | Sara Portfolio`} />
            <meta name="description" content={desc} />
            <meta property="og:description" content={desc} />
        </Helmet>
    );
}

export default PageTitle;