export const registry = {
  'angRemote': {
    type: 'angular',
    importFunc: import('angRemote/Module'),
    elementName: 'app-root'
  },
  'reactRemote': {
    type: 'react',
    importFunc: import('reactRemote/App'),
    elementName: 'react-remote-app',
  }
};
