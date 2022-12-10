import Resizer from 'react-image-file-resizer';

const resizeFileToBase64 = (file: File) =>
  new Promise((resolve: (uri: string) => any) => {
    Resizer.imageFileResizer(
      file,
      1920,
      1920,
      'JPEG',
      100,
      0,
      (uri) => {
        const stringUrl = String(uri);
        resolve(stringUrl);
      },
      'base64'
    );
  });

export default resizeFileToBase64;
