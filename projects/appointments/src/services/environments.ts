import { IEnvironments } from "../models/environments"

export const getEnvironments = () => JSON.parse(localStorage.getItem(`environment`) || `[]`)

export const getEnvironmentById = (id: string) => {
    const environments = getEnvironments()
    const environment = environments.find((env: IEnvironments) => env.id === id)
    return environment
}

export const saveEnvironment = (environment: IEnvironments) => {
    const environments = getEnvironments()
    localStorage.setItem(`environment`, JSON.stringify([...environments, environment]))
}

export const deleteEnvironment = (id: string) => {
    const environments = getEnvironments()
    const updatedEnvironments = environments.filter((env: IEnvironments) => env.id !== id)
    return updatedEnvironments
}
