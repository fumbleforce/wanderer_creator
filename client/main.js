Session.set("createCategory", false);

Template.main.helpers({
    category: function (cat) {
        if (cat == undefined) return Session.get("createCategory");
        return cat === Session.get("createCategory");
    }
});


Template.main.events({
    "click [category]": function (e) {
        var category = e.currentTarget.getAttribute("category");
        Session.set("createCategory", category);
    }
});