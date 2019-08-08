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
                  buildHookId: '5d4be12f17b92e11ef3ea256',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-a7h6ho1j',
                  apiId: 'f5ab14d0-0892-452e-a8d4-d25aee2f28ae'
                },
                {
                  buildHookId: '5d4be12ff6fcb2bfb0c9db78',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-mkce98p2',
                  apiId: 'a24ddc86-19ee-49f5-9ed3-e7dfa9460834'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/foriacus/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-mkce98p2.netlify.com', category: 'apps'}
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
