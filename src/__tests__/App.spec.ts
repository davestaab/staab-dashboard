import mockNow from "jest-mock-now";
import { render, waitFor } from "@testing-library/vue";
import App from "@/App.vue";
const NOW = 1586204625862;
import { mocked } from 'ts-jest/utils';
import {FIFTEEN_MINUTES, FIVE_SECONDS, THIRTY_SECONDS} from "@/constants";
window.fetch = jest.fn();
const mockFetch = mocked(window.fetch);

describe('App', function () {
    beforeEach(() => {
      jest.useFakeTimers();
      mockNow(new Date(NOW));
      mockFetch.mockClear();
      mockFetch.mockResolvedValueOnce({
        json() {
          return Promise.resolve({"buildTime":NOW})
        }
      } as Response)
    });
  it('should countdown to refresh', async function () {
    const { findByText } = render(App);
    await findByText('4/6/2020, 4:23:45 PM: Refresh in 180');

    mockNow(new Date(NOW + FIVE_SECONDS));
    jest.runOnlyPendingTimers();
    await findByText('4/6/2020, 4:23:45 PM: Refresh in 179');

    mockNow(new Date(NOW + FIFTEEN_MINUTES - 1));
    jest.runOnlyPendingTimers();
    await findByText('4/6/2020, 4:23:45 PM: Refresh in 1');

    mockNow(new Date(NOW + FIFTEEN_MINUTES));
    mockFetch.mockResolvedValueOnce({
      json() {
        return Promise.resolve({"buildTime":NOW })
      }
    } as Response)
    jest.runOnlyPendingTimers();
    await findByText('4/6/2020, 4:23:45 PM: Refresh in 180');

    mockNow(new Date(NOW + FIFTEEN_MINUTES + FIVE_SECONDS));
    jest.runOnlyPendingTimers();
    await findByText('4/6/2020, 4:23:45 PM: Refresh in 179');

  });
});
