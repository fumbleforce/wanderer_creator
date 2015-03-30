Session.set("collection", "item");
selected = new ReactiveVar("none");

currentCollection = function () {
    return collections[Session.get("collection")];
};

Template.general.created = function () {
    this.submenu = new ReactiveVar("list");
    this.selectedItem = new ReactiveVar("none");
};

Template.general.helpers({
    submenu: function (el) {
        return Template.instance().submenu.get() === el;
    },

    submenuClass: function (el) {
        return Template.instance().submenu.get() === el ? "item active": "item";
    },

    items: function () {
        return currentCollection().find();
    },

    item: function () {
        return currentCollection().findOne(Template.instance().selectedItem.get());
    },
});

Template.general.events({
    "click [submenu]": function (e) {
        var submenu = e.currentTarget.getAttribute("submenu");
        Template.instance().submenu.set(submenu);
    },

    "click [item]": function (e) {
        var item = e.currentTarget.getAttribute("item");
        Template.instance().selectedItem.set(item);
    }
});