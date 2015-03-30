
Template.generalList.created = function () {
    this.search = new ReactiveVar("");
    this.sort = new ReactiveVar("id");
    this.sortDir = new ReactiveVar(1);
};

Template.generalList.helpers({
    items: function () {
        var sort = {};
        sort[Template.instance().sort.get()] = Template.instance().sortDir.get();

        return currentCollection().find({
            $where: "this.id.indexOf('"+Template.instance().search.get()+"') != -1" ,
        }, { sort: sort });
    },
});

Template.generalList.events({
    "click [item]": function (e) {
        var item = e.currentTarget.getAttribute("item");
        selected.set(item);
        $("[submenu='view']").click();
    },

    "keyup .search": function () {
        Template.instance().search.set($(".search").val());
    },

    "click [sort]": function (e) {
        var sort = e.currentTarget.getAttribute("sort");
        Template.instance().sort.set(sort);
        Template.instance().sortDir.set(Template.instance().sortDir.get() === 1 ? -1:1);
    }
});
