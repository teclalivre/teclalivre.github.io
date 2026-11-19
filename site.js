const release = window.teclaLivreRelease
const repo = 'https://github.com/diozhn/tecla-livre-download'
if (release?.filename) {
  const preview = location.protocol === 'file:' || ['localhost', '127.0.0.1'].includes(location.hostname)
  const folder = preview ? '../../release/' : `${repo}/releases/download/v${release.version}/`
  document.querySelector('[data-download]').href = folder + release.filename + '.zip'
  document.querySelector('[data-checksum]').href = folder + release.filename + '.sha256'
  document.querySelector('[data-release]').href = repo + '/releases'
  document.querySelector('[data-version]').textContent = `${release.version}${release.sizeMB ? ` · ${release.sizeMB} MB` : ''}`
  if (release.installer) {
    document.querySelector('[data-intro]').textContent = 'Estude com aulas em português ou inglês e pratique músicas com notas na tela. Use um controlador MIDI ou o teclado do computador.'
    document.querySelector('[data-lessons]').textContent = '41 aulas em português e inglês'
    document.querySelector('[data-install-run]').textContent = 'Abra o instalador .exe na pasta extraída. Depois, abra o Tecla Livre pelo menu Iniciar.'
  }
}
