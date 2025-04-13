import * as React from 'react';
import LazyComponent from './wrapper/LazyComponent';
import ImportedAppWraper from './wrapper/ImportedAppWraper';
function HostComponent() {
  return (
    <div>
        <h1 className='hello'>Hello from React Host!</h1>
        <hr></hr>
        <LazyComponent modName="reactRemoteComp"/>
        <hr></hr>
        <ImportedAppWraper modName="reactRemote"/>
        <hr></hr>
        <ImportedAppWraper modName="angRemote"/>
        <hr></hr>
        <ImportedAppWraper modName="angRemoteComponent"/>
        <hr></hr>
    </div>
  );
}

export default HostComponent;