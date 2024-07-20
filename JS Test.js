function checkPhotos(L, N, photos) {
    for (let i = 0; i < N; i++) {
        const { W, H } = photos[i];

        if (W < L || H < L) {
            console.log('UPLOAD ANOTHER');
        } else if (W === H) {
            console.log('ACCEPTED');
        } else {
            console.log('CROP IT');
        }
    }
}

const L = 180;
const N = 3;
const photos = [
    { W: 640, H: 480 },
    { W: 120, H: 300 },
    { W: 180, H: 180 },
];
checkPhotos(L, N, photos);
