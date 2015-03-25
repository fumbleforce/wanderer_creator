
ItemRefSchema = new SimpleSchema({
  id: {
    type: String,
    label: "Item id",
  },
  choices: {
    type: Number,
    label: "Quantity",
    defaultValue: 1
  },
});

RequirementSchema = new SimpleSchema({
  type: {
    type: String,
    label: "Type of requirement",
    allowedValues: ["item", "location", "skill"],
  },
  item: {
    type: ItemRefSchema,
    label: "Item required",
    optional: true
  },
  loc: {
    type: String,
    label: "Location required",
    optional: true
  },
  skill: {
    type: Object,
    label: "Skill required",
    optional: true
  },
  "skill.id": {
    type: String,
    label: "Skill id",
  },
  "skill.level": {
    type: Number,
    label: "Skill level",
  },
});