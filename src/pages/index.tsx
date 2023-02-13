import Head from 'next/head'
import { Auth } from 'aws-amplify'
import {
  Button,
  Card,
  Flex,
  Heading,
  TextField,
  SelectField,
} from '@aws-amplify/ui-react'

export default function Home() {
  return (
    <>
      <Head>
        <title>Kebab</title>
        <meta name="description" content="AWS Amplify Sample App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="p-4">
          <Card width="relative.full" padding="xl">
            <Heading marginBottom="medium">Checkout</Heading>
            <TextField label="Name" placeholder="Joachim von Ribbentrop" />
            <Heading marginTop="medium" marginBottom="small">
              Address
            </Heading>
            <Flex>
              <TextField
                label="House/Apt. No."
                placeholder="1600 Wilhelm Staße"
              />
              <TextField label="Barangay" placeholder="Mittelplatz" />
              <TextField label="City" placeholder="Germania" />
            </Flex>
            <Flex>
              <SelectField label="Province" placeholder="Select">
                <option value="brandenburg">Brandenburg</option>
                <option value="hessen">Hessen</option>
                <option value="wesser-ems">Wesser-Ems</option>
                <option value="bayern">Bayern</option>
              </SelectField>
              <TextField
                label="ZIP/Postal Code"
                type="number"
                placeholder="XXXX"
              />
            </Flex>
            <Heading marginTop="medium" marginBottom="small">
              Billing Details
            </Heading>
            <SelectField label="Card">
              <option value="bank1">Deutsche Bank - VISA</option>
              <option value="bank2">Bank of England</option>
            </SelectField>
            <Button marginTop="large" variation="primary" isFullWidth>
              Place Order
            </Button>
          </Card>
        </div>
      </main>
    </>
  )
}
