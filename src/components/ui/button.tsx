import { Slot } from '@radix-ui/react-slot'
import * as React from 'react'
import type { ForwardedRef } from 'react'
import { twMerge } from 'tailwind-merge'

interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	loading?: boolean
	asChild?: boolean
	sizes?: 'xs' | 'sm' | 'lg' | 'icon' | 'full'
	variants?:
		| 'primary'
		| 'secondary'
		| 'outline'
		| 'ghost'
		| 'accent'
		| 'disabled'
		| 'link'
		| 'danger'
		| 'warning'
		| 'success'
		| 'shine'
		| 'swipe'
	ref?: ForwardedRef<HTMLButtonElement>
}

const variantClasses = {
	primary: 'bg-primary text-primary-foreground hover:bg-primary-hover',
	secondary:
		'bg-secondary text-secondary-foreground hover:bg-secondary-hover',
	outline:
		'text-accent bg-accent-foreground hover:bg-accent-hover hover:text-accent-foreground',
	ghost:
		'bg-background text-foreground hover:bg-muted-hover select-none outline-none focus:bg-muted-hover',
	accent: 'text-accent-foreground hover:bg-accent-hover  bg-accent',
	disabled: 'bg-opacity-70 bg-accent text-accent-foreground',
	link: 'bg-transparent border-none underline-offset-4 hover:underline text-muted-foreground',
	danger: 'bg-danger hover:bg-danger-hover text-danger-foreground',
	warning: 'bg-warning text-warning-foreground hover:bg-warning-hover',
	success: 'bg-success hover:bg-success-hover text-success-foreground',
	shine:
		'before:ease relative  overflow-hidden bg-primary text-primary-foreground shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-primary-foreground before:opacity-10 before:duration-700 hover:shadow-primary hover:before:-translate-x-40',
	swipe:
		'hover:before:bg-accent-foreground hover:before:text-accent relative overflow-hidden bg-accent text-accent-foreground shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-accent before:transition-all before:duration-500 hover:text-accent-foreground hover:shadow-primary hover:before:left-0 hover:before:w-full',
}
const sizeClasses = {
	xs: 'w-24 h-10 text-xs',
	sm: 'w-28 h-10  text-sm',
	lg: 'w-28 h-10 text-lg',
	icon: 'h-8 w-8 p-1',
	full: 'w-full h-10 text-lg',
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			className,
			loading = false,
			sizes = 'sm',
			variants = 'primary',
			asChild = false,
			...props
		},
		ref,
	) => {
		// Memoizando as classes para melhorar a performance
		const _className = React.useMemo(
			() =>
				twMerge(
					variantClasses[variants],
					sizeClasses[sizes],
					'appearance-none rounded-md px-2 py-1.5 flex gap-1 duration-300 transition-all cursor-pointer',
					' items-center justify-center font-normal ring-offset-background disabled:pointer-events-none disabled:opacity-60',
					'transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
					className,
				),
			[className, sizes, variants],
		)

		// Definindo o componente a ser usado (Slot ou button)
		const Comp = asChild ? Slot : 'button'

		return (
			<Comp
				ref={ref}
				className={_className}
				{...props}
				disabled={variants === 'disabled'}
				aria-busy={loading}
				aria-live={loading ? 'polite' : undefined}
			>
				{props.children}
			</Comp>
		)
	},
)

Button.displayName = 'Button'

export { Button }
export type { ButtonProps }
