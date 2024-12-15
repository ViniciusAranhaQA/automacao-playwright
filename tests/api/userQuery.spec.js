const { test, expect } = require('@playwright/test');
const { request } = require('graphql-request');

const endpoint = 'https://graphqlzero.almansi.me/api';

test.describe('GraphQL API - User Query', () => {
  test('Validar resposta da query user(id: 1)', async () => {
    const query = `
      query {
        user(id: 1) {
          id
          username
          email
          address {
            geo {
              lat
              lng
            }
          }
        }
      }
    `;

    const response = await request(endpoint, query);

    expect(response.user.id).toBe('1');
    expect(response.user.username).toBeDefined();
    expect(response.user.email).toContain('@');
    expect(response.user.address.geo.lat).toBeDefined();
    expect(response.user.address.geo.lng).toBeDefined();
  });
});
