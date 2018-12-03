import { invert, each, size, includes, set as _set, Many, get } from 'lodash'

const iterable = value => typeof value === 'function' || typeof value === 'object'

export const
  toEnum = (ob: { [k: string]: any }) => ({ ...ob, ...invert(ob) }),
  setRecursive = (on: object | any[] | Function, to: { [k: string]: any }, whenExist = true) => {

    if (size(to)) {

      each(on, (_, key) => {
        if (key in to) on[key] = to[key]
        else if (iterable(on[key])) setRecursive(on[key], to, whenExist)
      })

      if (!whenExist) each(to, (_, key) => on[key] = to[key])

    }

    return on

  },
  delRecursive = (on: object | any[] | Function, to: any[]) => {

    if (size(to)) each(on, (_, key) => {
      if (includes(to, key)) delete on[key]
      else if (iterable(on[key])) delRecursive(on[key], to)
    })

    return on

  },
  set = <T extends object>(object: T, value: any, ...paths: Array<Many<string | number | symbol>>) => {

    each(paths, path => _set(object, path, typeof value !== 'function' ? value : value(get(object, path), path, object)))

    return object

  },
  setEach = <T extends object>(obs: T[], value: any, ...paths: Array<Many<string | number | symbol>>) => obs.map(object => set(object, value, ...paths))