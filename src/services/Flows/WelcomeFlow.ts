import { addKeyword } from '@builderbot/bot'
import { MetaProvider as Provider } from '@builderbot/provider-meta'
import { MysqlAdapter as Database } from '@builderbot/database-mysql'
import { ServicesFlow } from './ServicesFlow'


export const welcomeFlow = addKeyword <Provider, Database>(['hi', 'hello', 'hola', 'Hola', '/./'])
    .addAnswer(`🙌🙌 ¡Hola! Bienvenido a Grupo Barsa 🚀 tu asistente virtual y estoy aquí para ayudarte.`, {delay:900})
    .addAnswer('Selecciona una opción para continuar:\n\n' +

        '1️⃣ Servicios\n' +

        '2️⃣ Reservar un servicio\n' +

        '3️⃣ Contacto',
    )