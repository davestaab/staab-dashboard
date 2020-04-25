import { ItemLists } from '@/constants';

export default [
  {
    title: 'Activities',
    items: [{ name: 'Baxter Gardens', complete: false }]
  },
  {
    title: 'Meals',
    items: [
      { name: 'Chicken cordon blue pasta', complete: false },
      { name: 'Keto pizza casserole', complete: false },
      { name: 'Pork chops', complete: false },
      { name: 'Tacos', complete: false },
      { name: 'Chicken skillet', complete: false },
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
      { name: 'Hang contact paper in our room', complete: false },
      { name: 'Get something for costumes', complete: false },
      { name: 'Clean carpets', complete: false },
      { name: 'Paint Deanna’s dresser', complete: true },
      { name: 'Kids spigot', complete: true },
      { name: 'Pressure wash Back patio', complete: true },
      { name: 'Paint Laundry Room', complete: true },
      { name: 'Cabinets In laundry room', complete: true },
      { name: 'Dinosaur sign', complete: true },
      { name: 'Clean out Kids closet', complete: true },
      { name: 'Clean out Bonus room', complete: true },
      { name: 'Clean out downstairs closet', complete: true }
    ]
  }
] as ItemLists;
