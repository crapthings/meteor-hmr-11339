App.accessRule('*')
App.accessRule("blob:*")

App.accessRule('http://*/*', { type: 'navigation' })
App.accessRule('https://*/*', { type: 'navigation' })
App.accessRule('data:*', { type: 'navigation' })

App.appendToConfig(`
  <edit-config
    xmlns:android="http://schemas.android.com/apk/res/android"
    file="app/src/main/AndroidManifest.xml"
    target="/manifest/application"
    mode="merge"
  >
    <application android:usesCleartextTraffic="true"></application>
  </edit-config>
`)
