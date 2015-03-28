Session.set("collection", false);

Template.main.rendered = function () {
    $("[data-content]").popup();
};

Template.main.helpers({
    category: function (cat) {
        if (cat == undefined) return Session.get("collection");
        return Session.equals("collection", cat);
    }
});


Template.main.events({
    "click [category]": function (e) {
        var category = e.currentTarget.getAttribute("category");
        $("[category]").removeClass("active");
        $(e.currentTarget).addClass("active");
        Session.set("collection", category);
    },
    "click .back": function () {
        Session.set("collection", false);
    }
});