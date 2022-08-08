import { render } from '@testing-library/react';

import UiForm from './ui-form';

describe('UiForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiForm />);
    expect(baseElement).toBeTruthy();
  });
});
