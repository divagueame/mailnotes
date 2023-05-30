export default async () => {
  if (process.client) {
    const originalReplaceState = window.history.replaceState
    const originalPushState = window.history.pushState

    const waitForOfficeObject = () =>
      new Promise((resolve) => {
        const script = document.createElement('script')
        script.src =
            'https://appsforoffice.microsoft.com/lib/1/hosted/office.js'
        script.onload = resolve
        script.async = false
        document.head.appendChild(script)
      })

    await waitForOfficeObject() // Office wrapper object ready

    window.history.replaceState = originalReplaceState
    window.history.pushState = originalPushState
  }
}
