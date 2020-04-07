import { render } from '@testing-library/vue';
import ItemList from '@/ItemList.vue';
import { ItemLists } from '@/constants';
const items: ItemLists = [
  {
    title: 'title',
    items: [
      {
        name: 'one',
        complete: false
      },
      {
        name: 'two',
        complete: true
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
});
