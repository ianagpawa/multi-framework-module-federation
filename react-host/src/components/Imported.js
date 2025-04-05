import * as React from 'react';

const ReactRemote = React.lazy(() => import('reactRemote/App'))

function Imported() {
    return (
        <React.Suspense fallback="loading">
           <ReactRemote />
        </React.Suspense>
    )
}

export default Imported;