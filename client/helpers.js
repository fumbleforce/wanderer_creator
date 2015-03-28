Template.registerHelper("collection", function (c) {
    if (c) return Session.equals("collection", c);
    return Session.get("collection");
});