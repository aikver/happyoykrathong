export default function Lanterns() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="moon" />
      {/* Floating lanterns */}
      <span className="lantern" style={{ ['--x' as any]: '10%', ['--delay' as any]: '0s', ['--scale' as any]: 1 }} />
      <span className="lantern" style={{ ['--x' as any]: '25%', ['--delay' as any]: '3s', ['--scale' as any]: 0.9 }} />
      <span className="lantern" style={{ ['--x' as any]: '40%', ['--delay' as any]: '6s', ['--scale' as any]: 1.1 }} />
      <span className="lantern" style={{ ['--x' as any]: '60%', ['--delay' as any]: '1s', ['--scale' as any]: 0.8 }} />
      <span className="lantern" style={{ ['--x' as any]: '75%', ['--delay' as any]: '5s', ['--scale' as any]: 1.05 }} />
      <span className="lantern" style={{ ['--x' as any]: '88%', ['--delay' as any]: '2s', ['--scale' as any]: 0.95 }} />

      {/* River and a floating krathong (center) */}
      <div className="river">
        <div className="krathong">
          <span className="base" />
          <span className="flower" />
          <span className="candle" />
          <span className="flame" />
          <span className="ripples" />
        </div>
      </div>
    </div>
  )
}
