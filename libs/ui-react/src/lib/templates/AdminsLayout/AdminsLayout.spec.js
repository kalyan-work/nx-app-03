import { render } from '@testing-library/react';
import AdminsLayout from './AdminsLayout';
describe('AdminsLayout', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<AdminsLayout />);
        expect(baseElement).toBeTruthy();
    });
});
