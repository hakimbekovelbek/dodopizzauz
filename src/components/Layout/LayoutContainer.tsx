export interface ILayoutContainer {
	children: JSX.Element | null
}

export const LayoutContainer: React.FC<ILayoutContainer> = (
	props: ILayoutContainer
) => {
	return <div className='container'>{}</div>
}
