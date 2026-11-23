$(document).ready(function () {
    const apiUrl = "http://localhost:3003/tasks";

    function loadTasks() {
        let selected = $("#filter").val();
        let params = {};

        // Send query parameters so JSON Server filters the task records.
        if (selected === "completed") {
            params.completed = true;
        } else if (selected !== "all") {
            params.priority = selected;
        }

        $.ajax({
            url: apiUrl,
            method: "GET",
            data: params,
            success: function (tasks) {
                $("#tasks").empty();

                if (tasks.length === 0) {
                    $("#tasks").text("No tasks found.");
                    return;
                }

                tasks.forEach(function (task) {
                    let row = $("<div>").addClass("task");
                    let checkbox = $("<input>").attr("type", "checkbox").prop("checked", task.completed);
                    let title = $("<span>").text(task.title);
                    if (task.completed) title.addClass("done");

                    checkbox.on("change", function () {
                        updateTask(task, $(this), title);
                    });

                    row.append(checkbox, title, $("<span>").addClass("priority").text(task.priority + " priority"));
                    $("#tasks").append(row);
                });
            },
            error: function () {
                $("#tasks").text("Could not load tasks. Check JSON Server on port 3003.");
            }
        });
    }

    function updateTask(task, checkbox, title) {
        let newValue = checkbox.is(":checked");

        // PATCH changes only the completed field of the selected task.
        $.ajax({
            url: apiUrl + "/" + task.id,
            method: "PATCH",
            contentType: "application/json",
            data: JSON.stringify({ completed: newValue }),
            success: function () {
                task.completed = newValue;
                title.toggleClass("done", newValue);
                $("#message").text("Task updated.");
            },
            error: function () {
                checkbox.prop("checked", !newValue);
                $("#message").text("Could not update task.");
            }
        });
    }

    $("#filter").change(loadTasks);
    loadTasks();
});
