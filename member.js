function skillsMembers() {
  return {
    name: 'skillsMembers',
    path: '/skills/members',
    component: () => import('@/views/skills/members'),
    meta: {
      title: 'Skills Members',
      icon: 'people',
      roles: ['admin', 'editor']
    }
  }
}