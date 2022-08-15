import { render } from '@testing-library/react';
import LoginBox from './LoginBox';
describe('LoginBox', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<LoginBox />);
        expect(baseElement).toBeTruthy();
    });
});
