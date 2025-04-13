import React, { useEffect, useRef } from 'react';
import { registry } from './registry';

export function ImportedAppWraper(props) {
    const ref = useRef(null);
    const { modName } = props;
    const { importFunc, elementName, type} = registry[modName];
    const isNotReact = type !== 'react';
    const element = React.createElement(elementName);
    useEffect(() => {
        importFunc
            .then(x => isNotReact && x.mount())
            .catch((err) => console.error(`error loading ${elementName}:`, err));
    
    }, []); 
    return (
        <div id={elementName}>{element}</div>
    );
}

export default ImportedAppWraper;
