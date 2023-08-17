// dropdown javascript

var currentlyOpenDropdown = null;
    
        function toggleDropdown(id, button) {
            var dropdownContent = document.getElementById(id);
    
            if (currentlyOpenDropdown && currentlyOpenDropdown === dropdownContent) {
                // Clicking the same dropdown again to close it
                closeDropdown();
            } else {
                // Close previously open dropdown if any
                closeDropdown();
    
                // Open the clicked dropdown
                dropdownContent.classList.add("show");
                currentlyOpenDropdown = dropdownContent;
    
                // Toggle chevron icon
                var chevronIcon = button.querySelector("i");
                chevronIcon.classList.remove("bi-chevron-down");
                chevronIcon.classList.add("bi-chevron-up");
    
            }
        }
    
        function closeDropdown() {
            if (currentlyOpenDropdown) {
                currentlyOpenDropdown.classList.remove("show");
                currentlyOpenDropdown.previousElementSibling.querySelector("i").classList.remove("bi-chevron-up");
                currentlyOpenDropdown.previousElementSibling.querySelector("i").classList.add("bi-chevron-down");

    
                currentlyOpenDropdown = null;
            }
        }
    
        // Close dropdown when clicking away from the dropdown button or dropdown content
        document.addEventListener("click", function (event) {
            var isDropdownButton = event.target.classList.contains("dropbtn");
            var isDropdownContent = event.target.classList.contains("dropdown-content");
            if (!isDropdownButton && !isDropdownContent) {
                closeDropdown();
            }
        });

    