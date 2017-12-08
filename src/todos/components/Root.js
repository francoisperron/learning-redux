import React from 'react'
import { ProvideStore } from '../../provide-store'
import { TodoPage } from './TodoPage'

export const Root = ({store}) => (
  <ProvideStore store={store}>
    <TodoPage />
  </ProvideStore>
)
