import Vue from 'vue';
import Vuetify from 'vuetify/lib';

// import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {//Eğer mevcut renklerin dışına çıkmak istiyorsak renkleri burada tanımlıyoruz
            light: {
                primary: '#424242',
                secondary: '#FAFAFA',
                success: '#3cd1c2',
                info: '#ffaa2c',
                error: '#f83e70'
                
            },
        },
    },
   });
