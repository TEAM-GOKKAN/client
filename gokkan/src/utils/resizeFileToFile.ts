import Resizer from 'react-image-file-resizer';

const resizeFileToFile = (file: File) =>
  new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      1920,
      1920,
      'JPEG',
      100,
      0,
      (file) => {
        resolve(file);
      },
      'file'
    );
  });

export default resizeFileToFile;
