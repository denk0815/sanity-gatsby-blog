export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e8c1b078ba8c30ed2d0ca3b',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-nsak9u7c',
                  apiId: 'b37e2b18-65df-4121-b75a-1b6da8e0568f'
                },
                {
                  buildHookId: '5e8c1b07114e5830228e5c9c',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-qzv6m2bo',
                  apiId: 'aeea6cf6-0e94-4e95-bb6d-110c4645a004'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/denk0815/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-qzv6m2bo.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
