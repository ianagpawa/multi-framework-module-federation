import * as React from 'react';
import { registry } from './registry';

function LazyComponent(props) {
    const { modName } = props;
    const { importFunc } = registry[modName];
    const ReactRemote = React.lazy(() => importFunc);
    return (
        <React.Suspense fallback="loading">
           <div>
                <h3>This is lazy loaded</h3>
                <ReactRemote />
           </div>
        </React.Suspense>
    );
}

export default LazyComponent;