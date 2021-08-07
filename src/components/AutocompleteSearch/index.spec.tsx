/**
 * @jest-environment jsdom
 */

import renderer, { act } from 'react-test-renderer';
import { waitFor } from '@testing-library/react';
import fetchMock from 'jest-fetch-mock';
import AutocompleteSearch from './index';

describe('<AutocompleteSearch/>', () => {
  let rootElement;
  let testRenderer;
  const event = {
    target: { value: 'Germany' },
  };
  beforeEach(() => {
    // eslint-disable-next-line prefer-const,react/display-name
    rootElement = () => <AutocompleteSearch />;
    // eslint-disable-next-line prefer-const
    testRenderer = renderer.create(rootElement());
    fetchMock.resetMocks();
  });

  it('should call fetchData after 1000ms after typing', async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify([
        {
          currencies: [{ code: 'EUR', name: 'Euro', symbol: '€' }],
          name: 'Germany',
          alpha3Code: 'DEU',
          capital: 'Berlin',
          population: 81770900,
        },
      ]),
    );
    await act(async () => {
      testRenderer.root.findByType('input').props.onChange(event);
      await waitFor(
        () => {
          expect(
            testRenderer.root.findAllByProps({ 'data-test-id': 'suggested' }).length,
          ).toBe(1);
        },
        {
          timeout: 4000,
        },
      );
    });
  });

  it('should not call fetchData before 1000ms after typing', async () => {
    await act(async () => {
      testRenderer.root.findByType('input').props.onChange(event);
      await waitFor(
        () => {
          expect(
            testRenderer.root.findAllByProps({ 'data-test-id': 'suggested' }).length,
          ).toBe(0);
        },
        {
          timeout: 500,
        },
      );
    });
  });

  it('Should render correctly', () => {
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
