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
                  buildHookId: '5e18de301443eee8215d645d',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-wifnmczg',
                  apiId: 'ac4d30f3-52f8-42ab-94dd-670c4a2d071a'
                },
                {
                  buildHookId: '5e18de3013fd28a28856c672',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-jcj96d5k',
                  apiId: '6d8213ea-02fe-4256-9392-190abacb057d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/danhannigan/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-jcj96d5k.netlify.com', category: 'apps' }
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
