const release = window.teclaLivreRelease
const repo = 'https://github.com/diozhn/tecla-livre-download'
if (release) {
  const preview = location.protocol === 'file:' || ['localhost', '127.0.0.1'].includes(location.hostname)
  const folder = preview ? '../../release/' : `${repo}/releases/download/v${release.version}/`
  document.querySelector('[data-download]').href = folder + release.filename + '.zip'
  document.querySelector('[data-checksum]').href = folder + release.filename + '.sha256'
  document.querySelector('[data-release]').href = repo + '/releases'
  document.querySelector('[data-version]').textContent = `· ${release.version}${release.sizeMB ? ` · ${release.sizeMB} MB` : ''}`
}
