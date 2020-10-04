import * as functions from 'firebase-functions'

export const isProduction = () => functions.config()?.environment?.mode === 'production'
export const isDev = () => functions.config()?.environment?.mode === 'development'

// const environment = () => isProduction() ? 'production' : 'development'

export const environmentVariables = {}
