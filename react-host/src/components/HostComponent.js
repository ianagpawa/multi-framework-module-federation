import * as React from 'react';
// import Import from './Imported';
// import ImportedAppWraper from './wrapper/ImportedAppWraper';
function HostComponent() {
  return (
    <div>
        <h1 className='hello'>Hello from React Host!</h1>
        {/* <Import /> */}
        {/* <ImportedAppWraper modName="reactRemote"/> */}
        {/* <ImportedAppWraper modName="angRemote"/> */}
    </div>
  );
}

export default HostComponent;