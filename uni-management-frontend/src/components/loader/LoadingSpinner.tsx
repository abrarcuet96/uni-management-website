import {cn} from "@/lib/utils"

interface LoadingSpinnerProps {
    size?: "sm" | "md" | "lg" | "xl"
    color?: "primary" | "secondary" | "accent" | "muted" | string
    className?: string
}

const sizeClasses = {
    sm: "w-6 h-6",   // 24px
    md: "w-8 h-8",   // 32px
    lg: "w-12 h-12", // 48px
    xl: "w-16 h-16", // 64px
}

const strokeWidthMap: Record<NonNullable<LoadingSpinnerProps["size"]>, number> = {
    sm: 3,
    md: 4,
    lg: 6,
    xl: 8,
}

const colorClasses = {
    primary: "text-primary",
    secondary: "text-secondary",
    accent: "text-accent",
    muted: "text-muted-foreground",
}

export function LoadingSpinner({
                                   size = "md",
                                   color = "primary",
                                   className,
                               }: LoadingSpinnerProps) {
    const isCustomColor = !Object.keys(colorClasses).includes(color)
    const strokeWidth = strokeWidthMap[size]

    return (
        <div className={cn("inline-flex items-center justify-center", className)}>
            <svg
                className={cn(sizeClasses[size], isCustomColor ? "" : colorClasses[color as keyof typeof colorClasses])}
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopOpacity="0"/>
                        <stop offset="100%" stopOpacity="1"/>
                    </linearGradient>
                </defs>

                {/* Background circle */}
                <circle
                    cx="50"
                    cy="50"
                    r="35"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={strokeWidth}
                    vectorEffect="non-scaling-stroke"
                    className="opacity-20"
                />

                {/* Animated arc */}
                <circle
                    cx="50"
                    cy="50"
                    r="35"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    strokeDasharray="60 200"
                    vectorEffect="non-scaling-stroke"
                    className={isCustomColor ? "" : "text-inherit"}
                    style={isCustomColor ? {stroke: color} : {}}
                >
                    <animateTransform
                        attributeName="transform"
                        type="rotate"
                        values="0 50 50;360 50 50"
                        dur="1.5s"
                        repeatCount="indefinite"
                    />
                </circle>

                {/* Inner pulsing dot */}
                <circle
                    cx="50"
                    cy="50"
                    r="4"
                    className={isCustomColor ? "" : "text-inherit"}
                    style={isCustomColor ? {fill: color} : {}}
                >
                    <animate attributeName="r" values="4;6;4" dur="1.5s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0.8;1;0.8" dur="1.5s" repeatCount="indefinite"/>
                </circle>
            </svg>
        </div>
    )
}
