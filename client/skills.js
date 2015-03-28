Template.registerHelper("physicalSkills", function () {
    return Skill.physicalSkills;
});
Template.registerHelper("mentalSKills", function () {
    return Skill.mentalSKills;
});
Template.registerHelper("weaponSkills", function () {
    return Skill.weaponSkills;
});
Template.registerHelper("spellSkills", function () {
    return Skill.spellSkills;
});
Template.registerHelper("craftingSkills", function () {
    return Skill.craftingSkills;
});
Template.registerHelper("allSkills", function () {
    var all = [];
    all.concat(Skill.physicalSkills)
        .concat(Skill.mentalSKills)
        .concat(Skill.weaponSkills)
        .concat(Skill.spellSkills)
        .concat(Skill.craftingSkills);
    return all;
});
