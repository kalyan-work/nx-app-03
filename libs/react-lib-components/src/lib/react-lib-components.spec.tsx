import { render } from '@testing-library/react';

import ReactLibComponents from './react-lib-components';

describe('ReactLibComponents', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactLibComponents />);
    expect(baseElement).toBeTruthy();
  });
});
