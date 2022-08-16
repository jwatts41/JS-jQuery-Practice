function createDiv() {
    $(document).ready(function() {
        let test = {
            id: "div",
            class: "divclass",
            css: {
                "color": "red"
            }
        };
        let $div = $("<div>", test);
        $div.html('New div tag created');
        $('body').append($div);
    });
}