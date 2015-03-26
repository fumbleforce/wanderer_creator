Template.item.created = function () {
    this.submenu = new ReactiveVar();
    this.submenu.set("list");

    this.selectedItem = new ReactiveVar();
    this.selectedItem.set("none");
};

Template.item.helpers({
    submenu: function (el) {
        return Template.instance().submenu.get() === el;
    },

    submenuClass: function (el) {
        return Template.instance().submenu.get() === el ? "item active": "item";
    },

    items: function () {
        return ItemCollection.find();
    },

    item: function () {
        return ItemCollection.findOne(Template.instance().selectedItem.get());
    },
});

Template.item.events({
    "click [submenu]": function (e) {
        var submenu = e.currentTarget.getAttribute("submenu");
        Template.instance().submenu.set(submenu);
    },

    "click [item]": function (e) {
        var item = e.currentTarget.getAttribute("item");
        Template.instance().selectedItem.set(item);
    }
});

AutoForm.hooks({
    insertItemForm: {
        before: {
            method: function (doc) {
                doc.creator = Meteor.user().name;
                return doc;
            }
        },
    }
});