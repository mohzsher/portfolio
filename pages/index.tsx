import { Stack,Checkbox  } from '@fluentui/react';
import { Text } from '@fluentui/react/lib/Text';
import Image from 'next/image';
import home from "../app/images/home.jpg";



// Used to add spacing between example checkboxes
const stackTokens = { childrenGap: 10 };

export const CheckboxBasicExample: React.FunctionComponent = () => {
  // These checkboxes are uncontrolled because they don't set the `checked` prop.
  return (
    <Stack tokens={stackTokens}>
      <Checkbox label="Unchecked checkbox (uncontrolled)" onChange={_onChange} />

      <Checkbox label="Checked checkbox (uncontrolled)" defaultChecked onChange={_onChange} />

      <Checkbox label="Disabled checkbox" disabled />

      <Checkbox label="Disabled checked checkbox" disabled defaultChecked />
    </Stack>
  );
};

function _onChange(ev?: React.FormEvent<HTMLElement | HTMLInputElement>, isChecked?: boolean) {
  console.log(`The option has been changed to ${isChecked}.`);
}

export default function Home() {
  return (
    <Stack>
     <Stack horizontalAlign='center'>
        <Text variant='mega'>Sher Mohammad</Text>
        <CheckboxBasicExample/>
    </Stack>
    <Stack>
      <Image src={home} height={500} alt='hello'/>
    </Stack>
    </Stack>
  )
}
