import { addKeyword } from '@builderbot/bot'
import { MetaProvider as Provider } from '@builderbot/provider-meta'
import { MysqlAdapter as Database } from '@builderbot/database-mysql'

export const AboutFlow = addKeyword<Provider, Database>(['Redes sociales', 'acerca de grupo barsa'])
    .addAnswer('Claro con gusto te brindare información acerca de Grupo Barsa',{ delay: 800 })