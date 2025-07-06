export const isRenderScanEnabled = () => {
  if (typeof window === 'undefined') return false

  const renderScan = process.env.NEXT_PUBLIC_RENDER_SCAN
  console.log('RenderScan value:', renderScan)
  console.log('RenderScan type:', typeof renderScan)

  return renderScan === 'true'
}
