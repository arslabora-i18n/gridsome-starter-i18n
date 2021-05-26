module.export = {
  settings: {
    "vetur.useWorkspaceDependencies": true,
    "vetur.experimental.templateInterpolationService": true
  },
  projects: [
    './src', {
      globalComponents: [
        './components/**/*.vue'
      ]
    }
  ]
}