import {PaletteMode} from '@mui/material'
import React, {createContext, useReducer} from 'react'
// type ValueOf<T> = T[keyof T]
// type AnimateDone = ValueOf<State['animateDone']>

interface State {
  mode: PaletteMode
  // animateDone: {
  //   [key: string]: boolean
  // }
}

type ProviderProps = {
  children: React.ReactNode
}

// State
const initialState: State = {
  mode: 'light'
}

// Typescript is crazy and wants a default value passed, hence initialState and empty dispatch function.
export const UiContext = createContext<{
  state: State
  dispatch: React.Dispatch<any>
}>({state: initialState, dispatch: () => {}})

// Action Types
const Type = {
  SET_COLOR_MODE: 'SET_COLOR_MODE',
  TOGGLE_COLOR_MODE: 'TOGGLE_COLOR_MODE'
} as const

// Actions
export const setColorMode = (mode: State['mode']) => {
  return {
    type: Type.SET_COLOR_MODE,
    mode
  }
}
export const toggleColorMode = () => {
  return {
    type: Type.TOGGLE_COLOR_MODE
  }
}

// export const setAnimateDone = (
//   key: keyof State['animateDone'],
//   done: AnimateDone
// ) => {
//   return {
//     type: Type.SET_ANIMATE_DONE,
//     done,
//     key
//   }
// }

// Reducer
const uiReducer = (state: State, action: any): State => {
  switch (action.type) {
    case Type.SET_COLOR_MODE:
      return {
        ...state,
        mode: action.mode
      }
    case Type.TOGGLE_COLOR_MODE:
      return {
        ...state,
        mode: state.mode === 'light' ? 'dark' : 'light'
      }
    // case Type.SET_ANIMATE_DONE:
    //   return {
    //     ...state,
    //     animateDone: {
    //       ...state.animateDone,
    //       [action.key]: action.done
    //     }
    //   }
    default:
      return state
  }
}

// Provider
const UiProvider = ({children}: ProviderProps) => {
  const [state, dispatch] = useReducer(uiReducer, initialState)
  const value = {state, dispatch}
  return <UiContext.Provider value={value}>{children}</UiContext.Provider>
}

export default UiProvider
