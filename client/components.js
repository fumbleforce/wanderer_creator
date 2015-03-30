Template.tooltips.rendered = function () {
    $("[data-content], [title]").popup();
};

Template.accordion.rendered = function () {
    $(".accordion").accordion();
};

Template.sticky.rendered = function () {
    console.log(Template.instance().data.follow)
    $(".sticky").sticky({
        context: Template.instance().data.follow
    });
};