import './styles.modules.css'

type ContainerProps = {
    children: React.ReactNode
}

export function Container(props: ContainerProps) {
    return (
        <>
            <h1>{props.children}</h1>
        </>
    )
}