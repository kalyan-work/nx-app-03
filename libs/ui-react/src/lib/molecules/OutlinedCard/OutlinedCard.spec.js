import { render } from '@testing-library/react';
import OutlinedCard from './OutlinedCard';
describe('OutlinedCard', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<OutlinedCard />);
        expect(baseElement).toBeTruthy();
    });
});
