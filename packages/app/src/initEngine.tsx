import init from '@xulc/engine'

function initEngine() {
  const lcEngine = init()

  lcEngine.material.addMaterial({
    name: '@xulc/material-web',
    title: '页面材质',
    components: [
      {
        name: 'test',
        comp: () => 'test',
      },
      {
        name: 'undefined',
        comp: () => undefined,
      },
      {
        name: 'div',
        comp: 'div',
      },
      {
        name: 'header',
        comp: () => (
          <header>
            <span>666</span>
          </header>
        ),
      },
    ],
  })

  const scene = lcEngine.scene.addScene({
    children: [
      {
        componentName: 'div',
        materialName: '@xulc/material-web',
        props: {
          id: 'div-id',
        },
        children: [
          {
            componentName: 'test',
            materialName: '@xulc/material-web',
          },
          {
            componentName: 'undefined',
            materialName: '@xulc/material-web',
          },
          {
            componentName: 'test',
            materialName: '@xulc/material-web',
          },
          {
            componentName: 'header',
            materialName: '@xulc/material-web',
          },
        ],
      },
    ],
  })

  lcEngine.scene.currentScene = scene
  console.log('~~~~~!lcEngine', lcEngine)
  return lcEngine
}

export default initEngine
