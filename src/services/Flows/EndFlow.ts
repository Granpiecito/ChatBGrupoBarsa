import { addKeyword } from '@builderbot/bot';
import { MetaProvider as Provider } from '@builderbot/provider-meta';
import { MysqlAdapter as Database } from '@builderbot/database-mysql';

export const EndFlow = addKeyword<Provider, Database>(['adios', 'bye', 'chao', 'Chao'])
    .addAnswer('¡Gracias por contactarnos! Si tienes más preguntas, no dudes en volver. ¡Hasta luego! 👋', { delay: 800 })
   