import { Server, Model } from 'miragejs';

export function makeServer({ environment = 'development' } = {}) {
  let server = new Server({
    environment,

    models: {
      employees: Model,
    },

    seeds(server) {
      server.create('employee', { id: 'n3', name: 'Bob Robert', designation: 'SDE 1', team: 'Engineering', managerId: 'n4' });
      server.create('employee', { id: 'n2', name: 'Mark Hill', designation: 'CEO', team: 'Leadership', managerId: null });
      server.create('employee', { id: 'n10', name: 'Linda May', designation: 'Sales Specialist', team: 'Sales', managerId: 'n14' });
      server.create('employee', { id: 'n14', name: 'Emma Sesay', designation: 'Sales Manager', team: 'Sales', managerId: 'n2' });
      server.create('employee', { id: 'n20', name: 'Erica Edward', designation: 'Chief Business officer', team: 'Finance', managerId: 'n2' });
      server.create('employee', { id: 'n1', name: 'Mary Tom', designation: 'Chief Brand officer', team: 'Leadership', managerId: 'n2' });
      server.create('employee', { id: 'n4', name: 'Douglas Ray', designation: 'Engineering Manager', team: 'Engineering', managerId: 'n2' });
      server.create('employee', { id: 'n16', name: 'Michael Palmer', designation: 'SDE 1', team: 'Engineering', managerId: 'n4' });
    },

    routes() {
      this.namespace = 'api';

      this.get('/employees', schema => {
        return schema.employees.all();
      });

      this.patch('/employee/:id', (schema, request) => {
        let newAttrs = JSON.parse(request.requestBody);
        let id = request.params.id;
        let note = schema.employees.find(id);
        return note.update(newAttrs);
      });
    },
  });

  return server;
}
