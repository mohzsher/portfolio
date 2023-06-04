import { Stack } from '@fluentui/react';
import { Text } from '@fluentui/react/lib/Text';
import Image from 'next/image';
import home from "../app/images/home.jpg";




export default function Home() {
  return (
    <Stack>
     <Stack horizontalAlign='center'>
        <Text variant='mega'>Sher Mohammad</Text>
    </Stack>
    <Stack>
      <Image src={home} height={500}/>
    </Stack>
    </Stack>
  )
}
