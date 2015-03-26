
MonsterSchema = new SimpleSchema({
  id: {
    type: String,
    label: "Monster ID",
    max: 100
  },
  habitat: {
    type: [String],
    label: "Habitat, where the monster lives",
    allowedValues: Locations.biomes
  },
  danger: {
    type: Number,
    label: "Danger level of monster",
    min: 0,
    max: 10
  },
  health: {
    type: Number,
    label: "Amount of health",
  },
  loot: {
    type: [Object],
    label: "Loot table",
  },
  "loot.$.item": {
    type: String,
    label: "Item id"
  },
  "loot.$.chance": {
    type: Number,
    label: "Drop chance",
    min: 0,
    max: 1,
  },
  spells: {
    type: [String],
    minCount: 1,
    label: "List of spells the monster can cast, in order"
  },
  physicalSkills: {
    type: [Object],
    label: "The physical skills of the monster",
    optional:true,
  },
  "physicalSkills.$.id": {
    type: String,
    label: "Skill id",
  },
  "physicalSkills.$.value": {
    type: Number,
    label: "Skill value",
  },
  magicalSkills: {
    type: [Object],
    label: "The magical skills of the monster",
    optional:true,
  },
  "magicalSkills.$.id": {
    type: String,
    label: "Skill id",
  },
  "magicalSkills.$.value": {
    type: Number,
    label: "Skill value",
  },
  desc: {
    type: String,
    label: "Description",
    optional: true,
    max: 1000
  },

  accepted: {
    type: Boolean,
    defaultValue: false
  },
  votes: {
    type: Number,
    defaultValue: 0,
  },
  creator: {
    type: String,
    autoValue: function () {
      return Meteor.user().name;
    }
  }
});

MonsterCollection.attachSchema(MonsterSchema);