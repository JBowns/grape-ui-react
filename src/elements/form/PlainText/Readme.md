Sometimes, you may find yourself wanting to show a form control as just plain text.  Luckily, `<PlainText>` handles this.  Simply use the `plainText` attribute on any form control to show the results as plain text.

```jsx inside Markdown
import { Box, Flex } from '../../grid'; // ... from 'grape-ui-react'
import { CheckboxField } from '../CheckboxField';
import { DateField } from '../DateField';
import { SelectField } from '../SelectField';
import { TextField } from '../TextField';

const swallowOptions = [
  { label: 'They migrated', value: 'migrated' },
  { label: 'One African swallow', value: 'african' },
  { label: 'Two European swallows with a line', value: 'european' },
];

<Flex flexDirection="column">
  <PlainText>I'm just a plain text component.</PlainText>
  <CheckboxField
    labelText="How did the coconuts get to England?"
    options={swallowOptions}
    plainText
    value={[swallowOptions[1], swallowOptions[2]]}
  />
  <DateField
    labelText="When is it?"
    plainText
    value="12/25/932"
  />
  <SelectField
    labelText="How did the coconuts get to England?"
    options={swallowOptions}
    plainText
    value={[swallowOptions[1], swallowOptions[2]]}
  />
  <TextField
    labelText="What is your quest?"
    name="plainTextTextFieldExample"
    plainText
    value="To seek the holy grail."
  />
</Flex>
```