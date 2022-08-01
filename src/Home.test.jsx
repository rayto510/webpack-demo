import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import Home from './Home';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';

const server = setupServer(
	rest.get('https://jsonplaceholder.typicode.com/todos/1', (req, res, ctx) => {
		return res(ctx.json({
			"userId": 1,
			"id": 1,
			"title": "elden ring",
			"completed": false
		}))
	})
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('renders the home text', async () => {
	render(<Home />);
	expect(screen.getByText('Loading. Please wait...')).toBeInTheDocument();

	await waitFor(() => {
		expect(screen.getByText('elden ring')).toBeInTheDocument();
		expect(screen.queryByText('Loading. Please wait...')).not.toBeInTheDocument();
	})
})
