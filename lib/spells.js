SpellCollection = new Mongo.Collection("books");

SpellSchema = new SimpleSchema({
  id: {
    type: String,
    label: "Spell ID",
    max: 100
  },
  damage: {
    type: Number,
    label: "Damage done on impact",
    min: 0,
    optional: true,
  },
  healing: {
    type: Number,
    label: "Healing done on impact",
    min: 0,
    optional: true,
  },
  target: {
    type: String,
    allowedValues: ["ally", "enemy"],
    label: "The type of target",
  },
  baseSkill: {
    type: String,
    label: "The skill that is increased on use"
  },
  scaling: {
    type: [Object],
    label: "List of scaling factors",
    optional:true
  },
  "scaling.$.id": {
    type: String,
    label: "ID of the stat that scales"
  },
  "scaling.$.affects": {
    type: String,
    allowedValues: ["damage", "healing", "accuracy"],
    label: "What the scaling affects"
  },
  "scaling.$.value": {
    type: Number,
    label: "How much it scales"
  },
  requires: {
    type: [Object],
    label: "List of requirements to use",
    optional:true
  },
  "requires.$.type": {
    type: String,
    allowedValues: ["weapon", "skill"],
    label: "The type of requirement"
  },
  "requires.$.weaponType": {
    type: String,
    optional:true,
    label: "What the type of weapon required"
  },
  "requires.$.skill": {
    type: String,
    optional:true,
    label: "The skill required"
  },
  "requires.$.value": {
    type: Number,
    label: "Value required",
    optional:true
  },
  desc: {
    type: String,
    label: "Description",
    optional: true,
    max: 1000
  },
});

SpellCollection.attachSchema(SpellSchema);