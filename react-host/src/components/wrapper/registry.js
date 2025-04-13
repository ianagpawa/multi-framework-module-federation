export const registry = {
  'angRemote': {
    type: 'angular',
    importFunc: import('angRemote/Module'),
    elementName: 'app-root'
  },
  'angRemoteComponent': {
    type: 'angular',
    importFunc: import('angRemote/Component'),
    elementName: 'app-export-comp'
  },
  'reactRemote': {
    type: 'react',
    importFunc: import('reactRemote/App'),
    elementName: 'react-remote-app',
  },
  'reactRemoteComp': {
    // type: 'react',
    importFunc: import('reactRemote/Component'),
    // elementName: 'react-remote-component',
  }
};
