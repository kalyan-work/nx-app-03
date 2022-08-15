import { render } from '@testing-library/react';
import TransferList from './TransferList';
describe('TransferList', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<TransferList />);
        expect(baseElement).toBeTruthy();
    });
});
