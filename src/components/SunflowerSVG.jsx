/**
 * SunflowerSVG — proper teardrop petals using cubic bezier paths.
 * Each petal radiates outward from the centre disc edge, pointed at the tip,
 * wide at the base — exactly like a real sunflower.
 */
export default function SunflowerSVG({ className, color = '#FBB825', petals = 16 }) {
  const cx = 50, cy = 50          // centre of the 100×100 viewBox
  const discR   = 12              // centre disc radius
  const petalLen = 20             // how far petals extend beyond disc edge
  const petalW   = 7              // half-width of petal at its base

  const petalPath = () => {
    // Petal drawn pointing straight UP (negative Y), then rotated per instance.
    // Base sits at (cx, cy - discR), tip at (cx, cy - discR - petalLen).
    const bx = cx, by = cy - discR                        // base centre
    const tx = cx, ty = cy - discR - petalLen             // tip
    const lx = cx - petalW, ly = by - petalLen * 0.25    // left control
    const rx = cx + petalW, ry = by - petalLen * 0.25    // right control
    // Teardrop: start at base-left, cubic to tip, cubic back to base-right, close
    return [
      `M ${bx - petalW} ${by}`,
      `C ${lx} ${ly}, ${tx - 3} ${ty + 6}, ${tx} ${ty}`,
      `C ${tx + 3} ${ty + 6}, ${rx} ${ry}, ${bx + petalW} ${by}`,
      `Z`
    ].join(' ')
  }

  const path = petalPath()

  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Petals — each rotated evenly around centre */}
      {Array.from({ length: petals }, (_, i) => {
        const angle = (360 / petals) * i
        return (
          <path
            key={i}
            d={path}
            fill={color}
            opacity="0.88"
            transform={`rotate(${angle}, ${cx}, ${cy})`}
          />
        )
      })}

      {/* Centre disc — two layers for depth */}
      <circle cx={cx} cy={cy} r={discR + 1} fill={color} opacity="0.6" />
      <circle cx={cx} cy={cy} r={discR}     fill={color} opacity="1" />
      {/* Seed pattern suggestion */}
      <circle cx={cx} cy={cy} r={discR * 0.62} fill="rgba(26,14,0,0.30)" />
      <circle cx={cx} cy={cy} r={discR * 0.32} fill="rgba(26,14,0,0.15)" />
    </svg>
  )
}
