import { useState } from 'react';

import { CustomInput } from '@nx-stencil/core-components-react';

export function App() {
  const [value, setValue] = useState('');

  const getIsValid = (value: string): boolean => {
    const pattern =
      /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\\.-]+)+[\w\-\\._~:/?#[\]@!\\$&'\\(\\)\\*\\+,;=.]+$/gm;

    return pattern.test(value);
  };

  const handleChange = (text: string) => {
    setValue(text);
  };

  return (
    <CustomInput
      label="WorkShop Url"
      type="url"
      validationMessage="Fill in a valid URL"
      value={value}
      size="small"
      isValid={getIsValid(value)}
      onChanged={(e) => handleChange(e.detail)}
    />
  );
}

export default App;
