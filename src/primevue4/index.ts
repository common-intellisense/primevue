import { getComponentsMap, getPropsMap } from './mapping'
// import directives from '../directives.json'

export function primevue4() {
  return {
    uiName: 'primevue',
    lib: 'primevue',
    map: getPropsMap(),
  }
}

export function primevue4Components() {
  return {
    map: getComponentsMap(),
    isSeperatorByHyphen: false,
    prefix: '',
    isReact: true,
    lib: 'primevue',
    dynamicLib: 'primevue/${name}',
    importWay: 'default',
    // directives: directives.primevue4,
  }
}
