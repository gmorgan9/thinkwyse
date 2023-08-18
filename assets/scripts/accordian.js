var accHeaders = document.getElementsByClassName("accordion-header");
var panels = document.getElementsByClassName("panel");
var chevrons = document.querySelectorAll(".accordion-header .accordion-icon");
var i;

for (i = 0; i < accHeaders.length; i++) {
    accHeaders[i].addEventListener("click", function () {
        var parentSet = this.parentElement.parentElement; // Get the parent .faq-accordian-set
        var panel = this.nextElementSibling;
        var chevron = this.querySelector(".accordion-icon");

        // Close all other panels
        for (var j = 0; j < panels.length; j++) {
            if (panels[j] !== panel) {
                panels[j].style.maxHeight = null;
                chevrons[j].classList.remove("bi-chevron-up");
                chevrons[j].classList.add("bi-chevron-down");
                accHeaders[j].parentElement.classList.remove("active");
            }
        }

        // Toggle the clicked panel
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            chevron.classList.remove("bi-chevron-up");
            chevron.classList.add("bi-chevron-down");
            parentSet.classList.remove("active");
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
            chevron.classList.remove("bi-chevron-down");
            chevron.classList.add("bi-chevron-up");
            parentSet.classList.add("active");
        }
    });
}
