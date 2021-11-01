INSERT INTO task (id, title, description)
VALUES (
    default,
    'sample title',
    'sample description'
  );

INSERT INTO task_list (id, title)
VALUES (
    default,
    'sample task list title'
  );

INSERT INTO task_list_task (task_list_id, task_id)
VALUES (
    1,
    1
  );
