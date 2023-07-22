import LcEngine from '@xulc/engine'

function initEngine() {
  const lcEngine = new LcEngine()

  lcEngine.material.addMaterial({
    name: '@xulc/material-web',
    title: '页面材质',
    components: [
      {
        name: 'test',
        title: 'test',
        component: 'test',
      },
    ],
  })

  lcEngine.scene.addScene({
    children: [
      {
        name: 'test',
        materialName: '@xulc/material-web',
        title: 'test',
      },
    ],
  })

  console.log('~~~~~!lcEngine', lcEngine)
  return lcEngine
}

export default initEngine
