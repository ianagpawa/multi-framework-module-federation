import React, { useEffect, useRef } from 'react';
import { registry } from './registry';
// const ReactRemote = React.lazy(() => import('reactRemote/App'));

export function ImportedAppWraper(props) {
    const ref = useRef(null);
    const { modName } = props;
    const { importFunc, elementName, type} = registry[modName];
    const element = React.createElement(elementName);
    // useEffect(() => {
    //     importFunc
    //         .then(x => {
    //             console.log(x);
    //             x.mount()
    //         })
    //         .catch((err) => console.error(`error loading ${elementName}:`, err));
    
    // }, []); 
    // const ReactRemote = importFunc;
    return (
        // <div ref={ref}></div>
        // <React.Suspense fallback="loading">
        //     <ReactRemote />
        // </React.Suspense>
        <div id={elementName}>{element}</div>
    );
}

export default ImportedAppWraper;
