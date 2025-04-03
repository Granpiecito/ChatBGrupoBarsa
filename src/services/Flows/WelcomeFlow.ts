import { addKeyword } from '@builderbot/bot'
import { MetaProvider as Provider } from '@builderbot/provider-meta'
import { MysqlAdapter as Database } from '@builderbot/database-mysql'


export const welcomeFlow = addKeyword <Provider, Database>(['hi', 'hello', 'hola', 'Hola', '/./', 'ola'])
    .addAnswer(`🙌🙌 ¡Hola! Bienvenido a Grupo Barsa 🚀, soy tu asistente virtual y estoy aquí para ayudarte.`, {delay:800})
    .addAnswer('Selecciona una opción para continuar:\n\n' +

        '1️⃣ Servicios\n' +

        '2️⃣ Redes Sociales\n' +

        '3️⃣ Conocer más sobre nosotros\n' 
    )