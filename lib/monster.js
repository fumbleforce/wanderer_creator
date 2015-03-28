
MonsterSchema = new SimpleSchema({
  id: {
    type: String,
    label: "Monster ID",
    max: 100,
    index: true,
    unique: true
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
    label: "Item id",
    autoform: {
      options: _.object(_.map(ItemCollection.find().fetch(), function (s) { return [s.id, labelify(s.id)]; }))
    }
  },
  "loot.$.chance": {
    type: Number,
    label: "Drop chance",
    min: 0,
    max: 1,
  },
  "loot.$.qty": {
    type: Number,
    label: "Max dropped",
    min: 1,
    defaultValue: 1,
  },
  spells: {
    type: [String],
    minCount: 1,
    label: "List of spells the monster can cast, in order",
    autoform: {
      options: _.object(_.map(SpellCollection.find().fetch(), function (s) { return [s.id, labelify(s.id)]; }))
    }
  },
  physicalSkills: {
    type: [Object],
    label: "The physical skills of the monster",
    optional:true,
  },
  "physicalSkills.$.id": {
    type: String,
    label: "Skill id",
    autoform: {
      options: _.object(_.map(Skill.physicalSkills, function (s) { return [s, labelify(s)]; }))
    }
  },
  "physicalSkills.$.value": {
    type: Number,
    label: "Skill value",
  },
  mentalSkills: {
    type: [Object],
    label: "The mental skills of the monster",
    optional:true,
  },
  "mentalSkills.$.id": {
    type: String,
    label: "Skill id",
    autoform: {
      options: _.object(_.map(Skill.mentalSkills, function (s) { return [s, labelify(s)]; }))
    }
  },
  "mentalSkills.$.value": {
    type: Number,
    label: "Skill value",
  },
  desc: {
    type: String,
    label: "Description",
    optional: true,
    max: 1000,
    autoform: {
      rows: 10
    }
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

MonsterCollection.attachSchema(MonsterSchema);