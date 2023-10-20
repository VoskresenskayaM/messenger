import {resolve} from 'path';

export default {
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                user: resolve(__dirname, 'user/index.html')
            }
        }
    }
}