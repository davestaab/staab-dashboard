import fetchMock from 'jest-fetch-mock';
fetchMock.enableMocks();

import { render, waitFor } from '@testing-library/vue';
import CheckBuildTestComponent from '@/__tests__/CheckBuildTestComponent.vue';
import mockNow from 'jest-mock-now';
import { FIFTEEN_MINUTES } from '@/constants';
const NOW = 1588213747989;
const oldLocation = window.location;
delete window.location;
window.location = { ...oldLocation, reload: jest.fn() };

describe('CheckBuild', function() {
  beforeEach(() => {
    fetchMock.resetMocks();
    jest.useFakeTimers();
    mockNow(new Date(NOW));
  });
  it('should show initial state', async function() {
    fetchMock.mockResponseOnce(JSON.stringify({ buildTime: NOW }));
    const { getByText } = render(CheckBuildTestComponent);
    getByText('local: 0');
    getByText('buildTime: 0');
  });
  it('should load time from the server', async function() {
    fetchMock.mockResponseOnce(JSON.stringify({ buildTime: NOW }));

    const { getByText } = render(CheckBuildTestComponent);
    await waitFor(() => {
      getByText('local: 4/29/2020, 10:29:07 PM');
    });
    getByText(`buildTime: ${NOW}`);
  });

  it('should reload when build times changes', async function() {
    fetchMock.mockResponseOnce(JSON.stringify({ buildTime: NOW }));

    const { getByText } = render(CheckBuildTestComponent);
    await waitFor(() => {
      getByText('local: 4/29/2020, 10:29:07 PM');
    });
    expect(fetchMock.mock.calls.length).toBe(1);
    expect(window.location.reload).not.toHaveBeenCalled();
    // after 15 minutes
    mockNow(new Date(NOW + FIFTEEN_MINUTES));
    fetchMock.mockResponseOnce(
      JSON.stringify({ buildTime: NOW + FIFTEEN_MINUTES })
    );
    jest.runOnlyPendingTimers();
    await waitFor(() => {
      getByText('local: 4/29/2020, 10:44:07 PM');
    });
    expect(fetchMock.mock.calls.length).toBe(2);
    expect(window.location.reload).toHaveBeenCalledTimes(1);
  });
});
