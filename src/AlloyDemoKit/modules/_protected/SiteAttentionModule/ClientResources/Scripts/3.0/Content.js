﻿define(["dojo",
    "dojo/_base/declare",
    "epi/_Module",
    "epi/dependency",
    "epi/routes",
    "epi/shell/_ContextMixin",
    "siteattention/commandproviders/SiteAttentionCommandProvider"],
    function (e, t, n, r, i, s, o) {
        return t("siteattention.Content", [s], { initialize: function () { e.when(this.getCurrentContext(), function (e) { }) } })
    })