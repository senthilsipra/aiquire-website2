interface AiquireLogoProps {
    /** Height in px. Width scales proportionally. Default: 36 */
    height?: number;
    className?: string;
}

/**
 * Aiquire wordmark logo.
 * "AIQ" is rendered as white filled-circle dots arranged into letter shapes.
 * "UIRE" is rendered as solid white heavy text that aligns with the dot grid.
 * Pure inline SVG — no images, no external fonts required.
 */
export function AiquireLogo({ height = 36, className }: AiquireLogoProps) {
    // Viewport: 310 wide × 58 tall
    const viewW = 310;
    const viewH = 58;
    const width = (viewW / viewH) * height;

    const r = 3.0;    // dot radius
    const step = 8.5; // gap between dot centres
    const gapBetweenLetters = 5; // horizontal gap between dotted letters

    // Top padding so dots start a bit away from the SVG edge
    const oy = 3;

    /** Emit dot circles for a 7×5 bitmap letter */
    function dots(ox: number, bitmap: number[][]): React.ReactNode[] {
        const out: React.ReactNode[] = [];
        bitmap.forEach((row, ri) => {
            row.forEach((on, ci) => {
                if (on)
                    out.push(
                        <circle
                            key={`${ox}-${ri}-${ci}`}
                            cx={ox + ci * step}
                            cy={oy + ri * step}
                            r={r}
                            fill="white"
                        />,
                    );
            });
        });
        return out;
    }

    // ── 7-row × 5-col pixel bitmaps ──────────────────────────────────────────

    const bitmapA = [
        [0, 0, 1, 0, 0],
        [0, 1, 0, 1, 0],
        [1, 0, 0, 0, 1],
        [1, 1, 1, 1, 1],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
    ];

    const bitmapI = [
        [1, 1, 1, 1, 1],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [1, 1, 1, 1, 1],
    ];

    // Q with a diagonal tail at bottom-right
    const bitmapQ = [
        [0, 1, 1, 1, 0],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 0, 1, 0, 1],
        [1, 0, 0, 1, 0],
        [0, 1, 1, 0, 1],
    ];

    // Letter widths: 5 cols × step, then gap
    const letterW = 4 * step; // rightmost col centre relative to ox=0
    const colW = letterW + gapBetweenLetters + step; // total advance per letter

    const aX = r + 1;
    const iX = aX + colW;
    const qX = iX + colW;

    // "UIRE" text starts after Q's last dot column + a small gap
    const textX = qX + 4 * step + r + 5;

    // Baseline: bottom of the 7-row grid (rows 0..6, centres at oy + 6*step)
    const baseline = oy + 6 * step + r + 1;

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox={`0 0 ${viewW} ${viewH}`}
            width={width}
            height={height}
            aria-label="Aiquire"
            role="img"
            className={className}
            style={{ display: "block" }}
        >
            {/* ── Dotted A ── */}
            {dots(aX, bitmapA)}

            {/* ── Dotted I ── */}
            {dots(iX, bitmapI)}

            {/* ── Dotted Q ── */}
            {dots(qX, bitmapQ)}

            {/* ── Solid "UIRE" ── */}
            <text
                x={textX}
                y={baseline}
                fontFamily="'Cabinet Grotesk', 'Arial Narrow', Arial, sans-serif"
                fontWeight="900"
                fontSize={6 * step + r * 2}
                fill="white"
                dominantBaseline="auto"
                letterSpacing="-0.5"
            >
                UIRE
            </text>
        </svg>
    );
}
