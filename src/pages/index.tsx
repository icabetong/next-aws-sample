import Head from 'next/head'
import { Auth } from 'aws-amplify'
import { Button, Flex } from '@aws-amplify/ui-react'

export default function Home() {
  const handleSignOut = () => Auth.signOut()

  return (
    <>
      <Head>
        <title>Kebab</title>
        <meta name="description" content="AWS Amplify Sample App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="flex items-center p-4">
          <Button variation="primary" onClick={handleSignOut}>
            Sign Out
          </Button>
          Main Page
        </div>
      </main>
    </>
  )
}
