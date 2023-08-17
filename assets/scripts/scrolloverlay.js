document.addEventListener("DOMContentLoaded", function() {
    OverlayScrollbars(document.body, {
        className: "os-theme-light",
        resize: "both",
        paddingAbsolute: true,
        scrollbars: {
            visibility: "auto",
            autoHide: "never",
        },
    });
});
