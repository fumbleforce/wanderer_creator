
QuestStateSchema = new SimpleSchema({
  text: {
    type: String,
    label: "Text",
  },
  choices: {
    type: [Object],
    label: "Choices",
    optional: true
  },
  "choices.$.choice": {
    type: String,
    label: "Choice text"
  },
  "choice.$.effect": {
    type: String,
    label: "Effect"
  },
  gives: {
    type: [ItemRefSchema],
    label: "Gives quest item",
    optional: true
  },
  requires: {
    type: [RequirementSchema],
    label: "Requirement for completing",
    optional: true
  },
  reward: {
    type: [ItemRefSchema],
    optional: true,
  },
});

QuestSchema = new SimpleSchema({
  id: {
    type: String,
    label: "Quest ID",
    max: 100
  },
  npc: {
    type: String,
    label: "NPC ID",
  },
  states: {
    type: [QuestStateSchema],
    label: "Quest states",
    min: 1,
  },
});

QuestCollection.attachSchema(QuestSchema);