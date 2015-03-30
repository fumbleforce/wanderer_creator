

Template.insertMonsterForm.helpers({
    spells: function () {
        return _.map(SpellCollection.find().fetch(), function (s) { return { value: s.id, label: labelify(s.id) }; })
    }
});