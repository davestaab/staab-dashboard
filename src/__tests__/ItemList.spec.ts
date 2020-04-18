import { render } from '@testing-library/vue';
import ItemList from '@/ItemList.vue';
import { ItemLists } from '@/constants';
import indexOf from 'lodash/fp/indexOf';

const items: ItemLists = [
  {
    title: 'title',
    items: [
      {
        name: 'one',
        complete: true
      },
      {
        name: 'two',
        complete: false
      }
    ]
  }
];

describe('ItemList', function() {
  it('should show title', function() {
    const { getByText } = render(ItemList, {
      props: {
        items
      }
    });
    getByText('title');
  });
  it('should show item name', function() {
    const { getByText } = render(ItemList, {
      props: {
        items
      }
    });
    getByText('one');
    getByText('two');
  });
  it('should mark items as completed', function() {
    const { getByText } = render(ItemList, {
      props: {
        items
      }
    });
    expect(getByText('one')).not.toHaveClass('line-through');
    expect(getByText('two')).toHaveClass('line-through');
  });
  it('should allow multiple lists', function() {
    const { getByText } = render(ItemList, {
      props: {
        items: [...items, { title: 'title two', items: [] }]
      }
    });
    getByText('title');
    getByText('title two');
  });

  it('should sort finished items last', function() {
    const { getAllByTestId } = render(ItemList, {
      props: {
        items
      }
    });
    const all = getAllByTestId('list-item').map(toTextContent);
    const doneIndex = indexOf('one')(all);
    const todoIndex = indexOf('two')(all);
    expect(todoIndex).toBeLessThan(doneIndex);
  });
});

const toTextContent = (n: HTMLElement) => n.textContent ? n.textContent.trim() : ''
