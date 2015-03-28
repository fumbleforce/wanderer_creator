
QuestStateSchema = new SimpleSchema({
  text: {
    type: String,
    label: "Text",
    index: true,
    unique: true
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

QuestCollection.attachSchema(QuestSchema);