import { useRouter } from "../hook/useRouter"

export function Route ({path, component: Component}) {
    const {currentPath} = useRouter()

    if (currentPath !== path) return null

    return <Component />
}