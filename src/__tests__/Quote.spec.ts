import { Quote as QuoteType } from '@/constants';
import Quote from '@/Quote.vue';
import { render } from '@testing-library/vue';
import '@testing-library/jest-dom';

const quotes: Array<QuoteType> = [
  {
    quote: 'first',
    source: 'author'
  },
  {
    quote: 'second',
    source: 'verse'
  }
];

describe('quotes', function() {
  it('should show the first quote', function() {
    const { getByText } = render(Quote, {
      props: {
        quoteList: quotes
      }
    });
    getByText('first');
    getByText('- author');
  });

  it('should show default quote with empty array', function() {
    const { getByTestId } = render(Quote, {
      props: {
        quoteList: []
      }
    });
    expect(getByTestId('quote')).toHaveTextContent(
      'Wherever you are - be all there.'
    );
    expect(getByTestId('source')).toHaveTextContent('- Jim Elliot');
  });

  it('should show quote based on counter', async function() {
    const { getByTestId, updateProps } = render(Quote, {
      props: {
        quoteList: quotes,
        counter: 0
      }
    });
    expect(getByTestId('quote')).toHaveTextContent('first');
    expect(getByTestId('source')).toHaveTextContent('- author');
    await updateProps({ counter: 1 });
    expect(getByTestId('quote')).toHaveTextContent('second');
    expect(getByTestId('source')).toHaveTextContent('- verse');

    await updateProps({ counter: 2 });
    expect(getByTestId('quote')).toHaveTextContent('first');
    expect(getByTestId('source')).toHaveTextContent('- author');
  });
});
