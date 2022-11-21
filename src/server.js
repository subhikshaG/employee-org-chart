import { Server, Model } from 'miragejs';

export function makeServer({ environment = 'development' } = {}) {
  let server = new Server({
    environment,

    models: {
      employees: Model,
    },

    seeds(server) {
      server.create('employee', { name: 'Bob', designation: 'SDE 1', team: 'Engineering' });
      server.create('employee', { name: 'Mark Hill', designation: 'CEO', team: 'Leadership' });
      server.create('employee', { name: 'Linda May', designation: 'SDE 1', team: 'Sales' });
      server.create('employee', { name: 'Erica', designation: 'Chief Business officer', team: 'Finance' });
      server.create('employee', { name: 'Mary', designation: 'Chief Bran officer', team: 'Leadership' });
      server.create('employee', { name: 'Douglas', designation: 'SDE 1', team: 'Engineering' });
      server.create('employee', { name: 'Michael', designation: 'SDE 1', team: 'Engineering' });
    },

    routes() {
      this.namespace = 'api';

      this.get('/employees', schema => {
        return schema.employees.all();
      })
    },
  });

  return server;
}
