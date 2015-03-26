Template.monster.created = function () {
    this.submenu = new ReactiveVar();
    this.submenu.set("list");

    this.selectedMonster = new ReactiveVar();
    this.selectedMonster.set("none");
};

Template.monster.helpers({
    submenu: function (el) {
        return Template.instance().submenu.get() === el;
    },

    submenuClass: function (el) {
        return Template.instance().submenu.get() === el ? "item active": "item";
    },

    monsters: function () {
        return MonsterCollection.find();
    },

    monster: function () {
        return MonsterCollection.findOne(Template.instance().selectedMonster.get());
    },
});

Template.monster.events({
    "click [submenu]": function (e) {
        var submenu = e.currentTarget.getAttribute("submenu");
        Template.instance().submenu.set(submenu);
    },

    "click [monster]": function (e) {
        var monster = e.currentTarget.getAttribute("monster");
        Template.instance().selectedMonster.set(monster);
    }
});

