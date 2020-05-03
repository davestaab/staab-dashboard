import { render, waitFor } from '@testing-library/vue';
import { FIFTEEN_MINUTES, FIVE_SECONDS, THIRTY_SECONDS } from '@/constants';
import mockNow from 'jest-mock-now';
import TimeTestComponent from '@/__tests__/TimeTestComponent.vue';
const NOW = 1586204625862;

describe('Timer', function() {
  beforeEach(() => {
    jest.useFakeTimers();
    mockNow(new Date(NOW));
  });
  it('should increment thirtySecond value when time changes', async function() {
    const { getByTestId, getByText } = render(TimeTestComponent);
    // initial state
    expect(getByTestId('now')).toHaveTextContent(`now: ${NOW}`);
    expect(getByTestId('fiveSeconds')).toHaveTextContent('fiveSeconds: 0');
    expect(getByTestId('thirtySeconds')).toHaveTextContent('thirtySeconds: 0');
    // advancing 5 seconds
    mockNow(new Date(NOW + FIVE_SECONDS));
    jest.runOnlyPendingTimers();
    await waitFor(() => {
      getByText(`now: ${NOW + FIVE_SECONDS}`);
    });
    expect(getByTestId('now')).toHaveTextContent(`now: ${NOW + FIVE_SECONDS}`);
    expect(getByTestId('fiveSeconds')).toHaveTextContent('fiveSeconds: 1');
    expect(getByTestId('thirtySeconds')).toHaveTextContent('thirtySeconds: 0');
    expect(getByTestId('fifteenMinutes')).toHaveTextContent(
      'fifteenMinutes: 0'
    );

    // advancing 30 seconds
    mockNow(new Date(NOW + THIRTY_SECONDS));
    jest.runOnlyPendingTimers();
    await waitFor(() => {
      getByText(`now: ${NOW + THIRTY_SECONDS}`);
    });
    expect(getByTestId('now')).toHaveTextContent(
      `now: ${NOW + THIRTY_SECONDS}`
    );
    expect(getByTestId('fiveSeconds')).toHaveTextContent('fiveSeconds: 6');
    expect(getByTestId('thirtySeconds')).toHaveTextContent('thirtySeconds: 1');
    expect(getByTestId('fifteenMinutes')).toHaveTextContent(
      'fifteenMinutes: 0'
    );

    // advancing 15 minutes
    mockNow(new Date(NOW + FIFTEEN_MINUTES));
    jest.runOnlyPendingTimers();
    await waitFor(() => {
      getByText(`now: ${NOW + FIFTEEN_MINUTES}`);
    });
    expect(getByTestId('now')).toHaveTextContent(
      `now: ${NOW + FIFTEEN_MINUTES}`
    );
    expect(getByTestId('fifteenMinutes')).toHaveTextContent(
      'fifteenMinutes: 1'
    );
  });
});
