import { ItemLists } from '@/constants';

export default [
  {
    title: 'Activities',
    items: [
      { name: 'Bike ride', complete: false },
      { name: 'Hammock Camping', complete: false }
    ]
  },
  {
    title: 'Meals',
    items: [
      { name: 'Chicken cordon blue pasta', complete: false },
      { name: 'Pork tenderloin', complete: false },
      { name: 'Chicken Carbonara', complete: false },
      { name: 'Shredded beef sandwiches', complete: false },
      { name: 'Food Truck', complete: false },
      { name: 'Burgers & Fries', complete: true },
      { name: 'Barbecue Chicken', complete: true },
      { name: 'Orange Chicken (from Costco)', complete: true },
      { name: 'Grilled chicken/shrimp', complete: true },
      { name: 'Steak and Chicken Stir Fry', complete: true },
      { name: 'Salmon', complete: true },
      { name: 'Pork chops', complete: true }
    ]
  },
  {
    title: 'House List',
    items: [
      { name: 'Pressure wash Driveway/sidewalk', complete: false },
      { name: 'Pressure wash Sides of house', complete: false },
      { name: 'Paint Our room', complete: false },
      { name: 'Shelf in laundry room', complete: false },
      { name: 'Clean carpets', complete: false },
      { name: 'Build swing', complete: true },
      { name: 'Get something for costumes', complete: true },
      { name: '4x4s for swing', complete: true },
      { name: 'Hang contact paper in our room', complete: true },
      { name: 'Polyurethane butcher block', complete: true }
    ]
  }
] as ItemLists;
