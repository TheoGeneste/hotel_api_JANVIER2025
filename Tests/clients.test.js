const http = require('http');


function getToken() {
  return new Promise((resolve, reject) => {
    const req = http.request({
      hostname: 'localhost',
      port: 3000,
      path: '/auth/login',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        if (res.statusCode === 200) {
          const token = JSON.parse(data).token;
          resolve(token);
        } else {
          reject(new Error('Failed to get token'));
        }
      });
    });

    req.on('error', (e) => {
      reject(e);
    });

    req.write(JSON.stringify({ email: 'tbialasik@fcdigital.fr', password: 'azerty' }));
    req.end();
  })
}
// Tester les routes de Clients
describe('Tester les routes de Clients', () => {
  // GET /clients/
  test('GET /users -> Devrait me retourner un tableau avec les clients', (done) => {
    // Je fais une requête HTTP GET sur mon serveur
    http.get("http://localhost:3000/clients", (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      // Je m'attend à recevoir une réponse
      res.on('end', () => {
        // Je m'attend que le status code de ma réponse soit 200
        expect(res.statusCode).toBe(200);
        // Je m'attend que le content-type de ma réponse soit application/json
        expect(res.headers['content-type']).toBe('application/json; charset=utf-8');
        // Je m'attend que le contenu de ma réponse soit un tableau
        const clients = JSON.parse(data);
        // Je m'attend que le contenu de ma réponse soit un tableau
        expect(Array.isArray(clients)).toBe(true);
        // Je m'attend que le contenu de ma réponse soit un tableau
        done();
      });
    });


  });

  // POST /clients/
  test('POST /clients -> Devrait créer un nouveau client', async () => {
    // Je fais une requête HTTP POST sur mon serveur
    const req = http.request({
      hostname: 'localhost',
      port: 3000,
      path: '/clients',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'authorization': "Bearer " + await getToken()
      }
    }, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      // Je m'attend à recevoir une réponse
      res.on('end', () => {
        // Je m'attend que le status code de ma réponse soit 201
        expect(res.statusCode).toBe(201);
        // Je Parse le contenu de ma réponse
        const client = JSON.parse(data);
        // Je m'attend que le contenu de ma réponse soit un objet avec une propriété id
        expect(client).toHaveProperty('id_client');
        // Je m'attend que le contenu de ma réponse soit un objet avec une propriété password cryptée
        expect(client.password != "password").toBe(true);
        return;
      });
    });

    req.write(JSON.stringify({ first_name: 'John', last_name: "Doe", phone: '1456987565', email: 'john.doe@example.com', password: "password" }));
    req.end();
  })

  // PATCH /clients/:id
  test('PATCH /clients/:id -> Devrait modifier un client', async () => {
    // Je fais une requête HTTP PATCH sur mon serveur
    const req = http.request({
      hostname: 'localhost',
      port: 3000,
      path: '/clients/1',
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'authorization': "Bearer " + await getToken()
      }
    }, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      // Je m'attend à recevoir une réponse
      res.on('end', () => {
        // Je m'attend que le status code de ma réponse soit 200
        expect(res.statusCode).toBe(200);
        // Je Parse le contenu de ma réponse
        const client = JSON.parse(data);
        // Je m'attend que le contenu de ma réponse soit un objet avec une propriété id
        expect(client).toHaveProperty('id_client');
        // Je m'attend que le contenu de ma réponse soit un objet avec une propriété password cryptée
        expect(client.password != "password").toBe(true);
        return;
      });
      req.write(JSON.stringify({ first_name: 'DurandBis'}));
      req.end();
    });
  })

  // DELETE /clients/:id
  test('DELETE /clients/:id -> Devrait supprimer un client', async () => {
    // Je fais une requête HTTP DELETE sur mon serveur
    const req = http.request({
      hostname: 'localhost',
      port: 3000,
      path: '/clients/19',
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'authorization': "Bearer " + await getToken()
      }
    }, (res) => {
      // Je m'attend à recevoir une réponse
      // Je m'attend que le status code de ma réponse soit 204
      expect(res.statusCode).toBe(204);
      return;
    }
    );
  })
})