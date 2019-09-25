export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d8bcf1dbc5526bbe356a135',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-m-erling-studio',
                  apiId: '1591f91c-0019-457a-b9a0-e130ad250b59'
                },
                {
                  buildHookId: '5d8bcf1dbc5526b20156a131',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-m-erling',
                  apiId: 'bc1fa7f3-059e-4b25-aff9-76f063a7dbe9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/magnushi/sanity-gatsby-blog-m-erling',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-m-erling.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
