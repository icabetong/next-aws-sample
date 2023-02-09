import { Amplify } from 'aws-amplify'
import { Authenticator } from '@aws-amplify/ui-react'
import config from '@/aws-exports'
import '@/styles/globals.css'
import '@aws-amplify/ui-react/styles.css'
import type { AppProps } from 'next/app'

Amplify.configure({ ...config, ssr: true })
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Authenticator>
      <Component {...pageProps} />
    </Authenticator>
  )
}
