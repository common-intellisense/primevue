import { getComponentMap, getPropsMap } from './mapping'

export function primevue3() {
  return {
    uiName: 'primevue3',
    map: getPropsMap(),
    lib: 'primevue',
  }
}

export function primevue3Components() {
  return {
    map: getComponentMap(),
    isSeperatorByHyphen: false,
    prefix: '',
    lib: 'primevue',
    isReact: false,
  }
}
