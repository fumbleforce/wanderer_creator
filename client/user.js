
Template.user.events({
    "click #log-in": function (e, t) {
        var email = t.find('#email').value,
            password = t.find('#password').value;

        Meteor.loginWithPassword(email, password);
    },

    "click #create-user": function (e, t) {
        var email = t.find('#new-email').value,
            password = t.find('#new-password').value,
            character = t.find('#new-character').value;


        Accounts.createUser({
            email: email,
            password: password,
            name: character
        });
    },
});