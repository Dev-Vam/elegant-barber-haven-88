import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import Hero from './Hero';

describe('Hero Component', () => {
	it('renders correctly', () => {
		const { getByText } = render(<Hero />);
		expect(getByText('Hero Title')).toBeInTheDocument();
	});
});