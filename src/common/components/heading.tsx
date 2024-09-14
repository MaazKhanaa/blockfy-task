
export const HeadingComponent = ({ children, variant= 'h3', type = 'default', classes }: { children: React.ReactNode, variant?: string, type?: string, classes?:string }) => {
    
    
    if(variant === 'h1') return <h1 className={`${type === 'primary' ? 'text-primary' : ''} ${classes}`}>{children}</h1>
    if(variant === 'h2') return <h2 className={`${type === 'primary' ? 'text-primary' : ''} ${classes}`}>{children}</h2>
    if(variant === 'h4') return <h3 className={`${type === 'primary' ? 'text-primary' : ''} ${classes}`}>{children}</h3>
    if(variant === 'h5') return <h4 className={`${type === 'primary' ? 'text-primary' : ''} ${classes}`}>{children}</h4>
    if(variant === 'h6') return <h5 className={`${type === 'primary' ? 'text-primary' : ''} ${classes}`}>{children}</h5>

    return (
        <h3 className={`${type === 'primary' ? 'text-primary' : ''} ${classes}`}>{children}</h3>
    )
}
