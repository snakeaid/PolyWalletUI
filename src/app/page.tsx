import { Card, Title, Text } from '@tremor/react';

export const dynamic = 'force-dynamic';

export default async function IndexPage() {

  return (
    <main className='p-4 md:p-10 mx-auto max-w-7xl'>
      <Title>Users</Title>
      <Text>
        Some text.
      </Text>
      <Card marginTop='mt-6'>

      </Card>
    </main>
  );
}