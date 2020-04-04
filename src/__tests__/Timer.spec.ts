import { render, fireEvent } from '@testing-library/vue';
import Timer from '@/Timer.vue';
import { THIRTY_SECONDS } from '@/constants';

describe('Timer', function() {
  it('should increment thirtySecond value when time changes', async function() {
    const start = Date.now();
    const { getByText, updateProps } = render(Timer, {
        props: { now: start },
        scopedSlots: {
          default:
            '<p slot-scope="{ thirtySeconds }">30 sec counter: {{thirtySeconds}}</p>'
        }
    });
    getByText('30 sec counter: 0');
    await updateProps({ now: start + THIRTY_SECONDS - 1 });
    getByText('30 sec counter: 0');
    await updateProps({ now: start + THIRTY_SECONDS });
    getByText('30 sec counter: 1');
    await updateProps({ now: start + THIRTY_SECONDS * 2 });
    getByText('30 sec counter: 2');
  });
});
