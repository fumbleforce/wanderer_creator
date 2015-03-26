Session.set("createCategory", false);

Template.main.helpers({
    category: function (cat) {
        if (cat == undefined) return Session.get("createCategory");
        return Session.equals("createCategory", cat);
    }
});


Template.main.events({
    "click [category]": function (e) {
        var category = e.currentTarget.getAttribute("category");
        $("[category]").removeClass("active");
        $(e.currentTarget).addClass("active");
        Session.set("createCategory", category);
    },
    "click .back": function () {
        Session.set("createCategory", false);
    }
});