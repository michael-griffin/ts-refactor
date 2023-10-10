interface TodoInterface extends NewTodoInterface {
  id: number | string;
}

interface NewTodoInterface {
  title: string;
  description: string;
  priority: number;
}

interface FormDataInterface {
  title: string;
  description: string;
  priority: number;
}

export type { TodoInterface, NewTodoInterface, FormDataInterface };
