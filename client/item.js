var selected = new ReactiveVar("none");
Session.set("collection", "item");

currentCollection = function () {
    return collections[Session.get("collection")];
};

Template.item.created = function () {
    this.submenu = new ReactiveVar("list");
    this.selectedItem = new ReactiveVar("none");
};

Template.item.helpers({
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

Template.listItems.created = function () {
    this.search = new ReactiveVar("");
    this.sort = new ReactiveVar("id");
};

Template.listItems.helpers({
    items: function () {
        var sort = {};
        sort[Template.instance().sort.get()] = -1;

        return currentCollection().find({
            $where: "this.id.indexOf('"+Template.instance().search.get()+"') != -1" ,
        }, { sort: sort });
    },
});

Template.listItems.events({
    "click [item]": function (e) {
        var item = e.currentTarget.getAttribute("item");
        selected.set(item);
        $("[submenu='view']").click();
    },

    "keyup .list-search": function () {
        Template.instance().search.set($(".monster-search").val());
    },

    "click [sort]": function (e) {
        var sort = e.currentTarget.getAttribute("sort");
        Template.instance().sort.set(sort);
    }
});

Template.viewItem.helpers({
    item: function () {
        return currentCollection().findOne({ id: selected.get() });
    },
});

Template.viewItem.events({
    "click [vote]": function (e) {
        var vote = e.currentTarget.getAttribute("vote");
        Meteor.call("ItemVote", { collection: Session.get("collection"), vote: vote, id: selected.get() });
    }
});