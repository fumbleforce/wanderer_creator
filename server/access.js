Meteor.publish(null, function() {
    return Meteor.users.find({}, {fields: {
        name: 1,
    }});
});
