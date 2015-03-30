Template.generalView.helpers({
    item: function () {
        return currentCollection().findOne({ id: selected.get() });
    },
});

Template.generalView.events({
    "click [vote]": function (e) {
        var vote = e.currentTarget.getAttribute("vote");
        Meteor.call("ItemVote", { collection: Session.get("collection"), vote: vote, id: selected.get() });
    }
});