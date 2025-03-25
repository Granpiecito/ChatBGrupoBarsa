import { addKeyword } from '@builderbot/bot'
import { MetaProvider as Provider } from '@builderbot/provider-meta'
import { MysqlAdapter as Database } from '@builderbot/database-mysql'

export const ServicesFlow = addKeyword<Provider, Database>(['servicios', 'eventos', 'información'])
.addAnswer('Claro con gusto te brindare información acerca de nuestros servicios',{ delay: 800 })
    .addAnswer('Solo permitenos un momento para brindarte la información necesaria', { delay: 800 })
    .addAnswer('🔹 *Servicios*:\n\n🔹 *Eventos*:\n\n🔹 *Información*:', { delay: 900 })