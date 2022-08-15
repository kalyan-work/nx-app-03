import { render } from '@testing-library/react';
import GuestLayout from './GuestLayout';
describe('GuestLayout', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<GuestLayout />);
        expect(baseElement).toBeTruthy();
    });
});
