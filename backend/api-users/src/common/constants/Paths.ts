
export default {
  Base: '/api',
  Users: {
    Base: '/users',
    Get: '/all',
    GetOne: '/get/:id',
    Add: '/add',
    Update: '/update',
    Delete: '/delete/:id',
  },
} as const;
