export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5dfa272b62d6518d3aea3186',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-v3mqq71p',
                  apiId: 'cda7c4d7-ee7a-496b-a23c-54b5a47aebba'
                },
                {
                  buildHookId: '5dfa272b0ded7b79938816a0',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-xqecghve',
                  apiId: 'c17260c4-cb4d-413a-a81f-604b7fcda61f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/JZGaskin/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-xqecghve.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
