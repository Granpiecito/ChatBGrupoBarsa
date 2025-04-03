import { addAnswer, addKeyword } from '@builderbot/bot'
import { MetaProvider as Provider } from '@builderbot/provider-meta'
import { MysqlAdapter as Database } from '@builderbot/database-mysql'

export const ServicesFlow = addKeyword<Provider, Database>(['servicios', 'eventos', 'información'])
    .addAnswer('Claro con gusto te brindaré información acerca de nuestros servicios.', { delay: 800 })
    .addAnswer(
        'Grupo Barsa ofrece una amplia gama de servicios, incluyendo:\n\n' +
        '1️⃣ *Show de los niños sin mamá*\n\n' +
        '🎩 Niños sin mamá es un espectáculo de magia y comedia que combina la magia con la comedia para crear una experiencia única y divertida para toda la familia. \n\n' +
        'El espectáculo es presentado por un mago profesional que utiliza trucos de magia, humor y participación del público para mantener a todos entretenidos. \n\n' +
        'Es adecuado para todas las edades y es perfecto para fiestas de cumpleaños, eventos corporativos y celebraciones familiares.', 
        {
            media: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYTJ0ZGdjd2syeXAwMjQ4aWdkcW04OWlqcXI3Ynh1ODkwZ25zZWZ1dCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LCohAb657pSdHv0Q5h/giphy.mp4',
            delay: 800,
        }
    );