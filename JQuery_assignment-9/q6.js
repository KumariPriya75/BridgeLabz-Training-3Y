$(document).ready(function () {
    let subscribed = false;

    function showMessage(message) {
        // Update a message element dynamically after each action.
        $("#message").text(message).hide().fadeIn();
    }

    function topicClick() {
        showMessage("Selected topic: " + $(this).clone().children().remove().end().text().trim());
    }

    // Delegated .on() works for existing and newly added topic elements.
    $("#topics").on("click", ".topic", topicClick);

    $("#subscribe").click(function () {
        subscribed = true;
        showMessage("Successfully subscribed. Notifications are enabled.");
    });

    $("#unsubscribe").click(function () {
        subscribed = false;
        showMessage("Unsubscribed. Notifications are disabled.");
    });

    $("#add").click(function () {
        let topic = $("#newTopic").val().trim();
        if (topic === "") {
            showMessage("Please enter a topic.");
            return;
        }
        $("#topics").append('<div class="topic">' + $("<div>").text(topic).html() + ' <button class="remove">Remove</button></div>');
        $("#newTopic").val("");
        showMessage("New topic added successfully.");
    });

    // .off() detaches the delegated click event from the topic being removed.
    $("#topics").on("click", ".remove", function (event) {
        event.stopPropagation();
        let topic = $(this).parent();
        topic.off("click");
        topic.remove();
        showMessage("Topic removed.");
    });
});