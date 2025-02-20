/*!
 * projekt2024 v1.0.0 (https://www.fh-ooe.at/)
 * Copyright 2017-2024 Alina Peham
 * Licensed under the GPL-2.0-or-later license
 */
//Mitarbeiter flipp
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".team-member").forEach(function (member) {
        member.addEventListener("click", function () {
            this.classList.toggle("flipped");
        });
    });
});


