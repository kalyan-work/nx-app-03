import { render } from '@testing-library/react';

import ReactComponents2 from './react-components-2';

describe('ReactComponents2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactComponents2 />);
    expect(baseElement).toBeTruthy();
  });
});
