ItemSchema = new SimpleSchema({
  id: {
    type: String,
    label: "Item id",
    index: true,
    unique: true
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

  accepted: {
    type: Boolean,
    defaultValue: false
  },
  votesFor: {
    type: [String],
    defaultValue: [],
  },
  votesAgainst: {
    type: [String],
    defaultValue: [],
  },
  creator: {
    type: String,
    autoValue: function () {
      return Meteor.user().name;
    }
  }
});

ItemCollection.attachSchema(ItemSchema);