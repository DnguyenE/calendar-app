import React from 'react';
import ReactDOM from 'react-dom/client';
import Calendar from './Calendar';
import { registerLicense } from '@syncfusion/ej2-base';

registerLicense('Ngo9BigBOggjHTQxAR8/V1NBaF5cXmZCekxwWmFZfVpgc19DYlZVRGY/P1ZhSXxXdkZgWX5XdXZRRmFZWEM=');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <link href={"https://cdn.syncfusion.com/ej2/material.css"} rel={"stylesheet"} type={"text/css"} />
        <Calendar />
    </div>
);
