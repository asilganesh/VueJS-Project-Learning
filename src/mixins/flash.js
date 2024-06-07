import swal from 'sweetAlert';

export default {

    methods: {
        flash(message) {
            return swal('Success', message, 'success');
        }
    }
}