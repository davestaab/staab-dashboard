import { ItemLists } from '@/constants';

export default [
  {
    title: 'Activities',
    items: [
      { name: 'Boke ride', complete: false },
      { name: 'Baxter Gardens', complete: true }
    ]
  },
  {
    title: 'Meals',
    items: [
      { name: 'Chicken cordon blue pasta', complete: false },
      { name: 'Keto pizza casserole', complete: false },
      { name: 'Pork chops', complete: false },
      { name: 'Chicken Carbonara', complete: false },
      { name: 'Steak and Chicken Stir Fry', complete: false },
      { name: 'Salmon', complete: false },
      { name: 'Barbecue Quesadillas', complete: false },
      { name: 'Orange Chicken (from Costco)', complete: false },
      { name: 'Shredded beef sandwiches', complete: false },
      { name: 'Grilled chicken/shrimp', complete: false },
      { name: 'Food Truck', complete: false },
      { name: 'Tacos', complete: true },
      { name: 'Shrimp and sausage sheet pan', complete: true},
      { name: 'Ribs', complete: true },
      { name: 'Food truck', complete: true },
      { name: 'Grilled pork tenderloin', complete: true },
      { name: 'Chicken burritos', complete: true },
      { name: 'Shredded pork sandwiches', complete: true },
      { name: 'Beef and broccoli', complete: true },
      { name: 'Chicken Tikka', complete: true }
    ]
  },
  {
    title: 'House List',
    items: [
      { name: 'Pressure wash Driveway/sidewalk', complete: false },
      { name: 'Pressure wash Sides of house', complete: false },
      { name: 'Paint Our room', complete: false },
      { name: '4x4s for swing', complete: false },
      { name: 'Get something for costumes', complete: false },
      { name: 'Clean carpets', complete: false },
      { name: 'Hang contact paper in our room', complete: true },
      { name: 'Polyurethane butcher block', complete: true }
    ]
  }
] as ItemLists;
