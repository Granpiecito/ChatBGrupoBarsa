import { addKeyword } from '@builderbot/bot'
import { MetaProvider as Provider } from '@builderbot/provider-meta'
import { MysqlAdapter as Database } from '@builderbot/database-mysql'

export const ReservationsFlow = addKeyword<Provider, Database>(['Reservacion, Reservar, Reservaciones'])
    .addAnswer('Algo')