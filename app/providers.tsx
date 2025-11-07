'use client'
import React, { createContext, useContext, useState } from 'react'

type Answers = {
  feeling?: 'fine' | 'not_well'
  miss?: 'yes' | 'no'
}

type Ctx = {
  answers: Answers
  setAnswers: React.Dispatch<React.SetStateAction<Answers>>
}

const Ctx = createContext<Ctx | null>(null)

export const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [answers, setAnswers] = useState<Answers>({})
  return <Ctx.Provider value={{ answers, setAnswers }}>{children}</Ctx.Provider>
}

export function useAnswers() {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useAnswers must be used inside <Providers>')
  return ctx
}
