Meteor.methods({

    /**
    * Vote for monster.
    * A user can only vote once, for or against.
    *
    * @param {object} opts
    *   @param {string} collection - The collection being updated
    *   @param {string} id - ID
    *   @param {string} vote - "for" or "against"
    */
    ItemVote: function (opts) {

        var vote = opts.vote,
            id = opts.id,
            Collection = collections[opts.collection],
            obj = Collection.findOne({ id: id });

        if (!obj)
            throw new Meteor.Error("Invalid obj");

        if (_.some(obj.votesFor, function (u) { return u === Meteor.userId(); }) && vote === "for")
            throw new Meteor.Error("Already voted for this obj");

        if (_.some(obj.votesAgainst, function (u) { return u === Meteor.userId(); }) && vote === "against")
            throw new Meteor.Error("Already voted against this obj");

        var alternativeVote = vote === "for" ? "against" : "for",
            push = vote === "for" ? { votesFor: Meteor.userId() } : { votesAgainst: Meteor.userId() },
            pull = vote !== "for" ? { votesFor: Meteor.userId() } : { votesAgainst: Meteor.userId() };

        Collection.update({ id: id }, {
            $push: push,
            $pull: pull
        });
    }
})