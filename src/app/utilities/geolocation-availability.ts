import 'permissions.request';
export default async function geolocationAvailability() {
    const { state } = await navigator.permissions.query({ name: 'geolocation' });
    switch (state) {
        case 'denied':
            return false;
        case 'granted':
        case 'prompt':
            return true;
    }
};
