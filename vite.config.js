/*import { handlebars } from 'hbs';*/
import { defineConfig } from 'vite'
import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';
/*import handlebars from '@vituum/vite-plugin-handlebars'*/
import userMainForm from './src/helpers/userMainForm/userMainForm';
import userPopup from './src/helpers/userPopup/userPopup';
import regForm from './src/helpers/regForm/regForm';

export default defineConfig({

    plugins: [handlebars({
        partialDirectory: resolve(__dirname, 'src/partials'),
        helpers: {
            userMainForm,
            userPopup,
            regForm
        },

        context: {
            currentUser: {
                login: 'ivanivanov',
                email: 'pochta@yandex.ru',
                first_name: 'Иван',
                second_name: 'Иванов',
                display_name: 'Иван',
                phone: '+7(909)-967-30-30'
            },
            isOpenPopup: false
        },

    }),

    ],

    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                login: resolve(__dirname, 'src/pages/login/login.html'),
                login: resolve(__dirname, 'src/pages/register/register.html'),
                userProfile: resolve(__dirname, 'src/pages/userProfile/userProfile.html'),
                userUpdate: resolve(__dirname, 'src/pages/userUpdate/userUpdate.html'),
                updatePassword: resolve(__dirname, 'src/pages/updatePassword/updatePassword.html'),
                register: resolve(__dirname, 'src/pages/register/register.html'),
                login: resolve(__dirname, 'src/pages/login/login.html'),
                page404: resolve(__dirname, 'src/pages/page404/page404.html'),
                page505: resolve(__dirname, 'src/pages/page505/page505.html'),
            }
        }
    },
    /* assetsInclude: ['**input/*.hbs'],*/
    /*root: resolve(__dirname, 'src/'),
    build: {
        outDit: (__dirname, 'dist/')
    },*/
    server: {
        port: 3000
    },
    preview: {
        port: 3000,
    }

})