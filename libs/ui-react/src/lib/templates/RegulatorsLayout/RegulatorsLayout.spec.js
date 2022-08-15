import { render } from '@testing-library/react';
import RegulatorsLayout from './RegulatorsLayout';
describe('RegulatorsLayout', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<RegulatorsLayout />);
        expect(baseElement).toBeTruthy();
    });
});
