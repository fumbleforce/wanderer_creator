



Item = typeof Item !== 'undefined' ? Item : {};


Item.categories = [
    "coin",
    "utility",
    "ore",
    "material",
    "body",
    "book",
    "herb",
    "prey",
    "quest",
    "trash",
    "weapon",
];



ItemSchema = new SimpleSchema({
  id: {
    type: String,
    label: "Item id",
  },
  category: {
    type: String,
    label: "Category",
    allowedValues: Item.categories
  },
  desc: {
    type: String,
    label: "Description",
  },
  
});
