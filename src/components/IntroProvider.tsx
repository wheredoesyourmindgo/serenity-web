'use client'

import {createContext, useCallback, useContext, useMemo, useState} from 'react'

/*
 * Remembers whether the homepage's opening sky has played (see SerenityHero.tsx). The provider sits
 * in the root layout, which stays mounted while moving between pages, so coming back to the
 * homepage skips the opening; a refresh starts it over.
 */

type IntroState = {played: boolean; markPlayed: () => void}

const IntroContext = createContext<IntroState>({played: false, markPlayed: () => {}})

export function IntroProvider({children}: {children: React.ReactNode}) {
  const [played, setPlayed] = useState(false)
  const markPlayed = useCallback(() => setPlayed(true), [])
  const value = useMemo(() => ({played, markPlayed}), [played, markPlayed])

  return <IntroContext value={value}>{children}</IntroContext>
}

export function useIntro() {
  return useContext(IntroContext)
}
