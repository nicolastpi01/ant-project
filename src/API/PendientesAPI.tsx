

const obj = {
    idUsuario : 3
}


export const getPendientes= async () => {
    const response = await fetch("https://pedidos-por-usuario-puda-portalunificado-dev.devcloud.bancogalicia.com.ar/api/pedidosPorUsuario", {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            'Content-Type': 'application/json',
            //'Authorization': "Bearer " + await getFreshToken(reqExtras.msalInstance)
        }
    })
    return response.json()
}