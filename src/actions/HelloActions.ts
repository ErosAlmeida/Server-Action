export async function helloAction(name:string): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Olá , ${name} esse é um teste de server-action`)
        },1000)
    })
    
}