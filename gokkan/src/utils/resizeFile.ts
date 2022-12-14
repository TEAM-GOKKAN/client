import imageCompression from 'browser-image-compression';

const fileListToBase64 = async (fileList: File[]) => {
  // create function which return resolved promise
  // with data:base64 string
  function getBase64(file: File): Promise<string> {
    const reader = new FileReader();
    return new Promise((resolve) => {
      reader.onload = (ev: ProgressEvent<FileReader>) => {
        if (!ev.target) return;
        resolve(String(ev.target.result));
      };
      reader.readAsDataURL(file);
    });
  }
  // here will be array of promisified functions
  const promises: Promise<string>[] = [];

  // loop through fileList with for loop
  fileList.forEach((file) => {
    promises.push(getBase64(file));
  });

  // array with base64 strings
  return await Promise.all(promises);
};

const fileListToNewFileList = async (fileList: File[]) => {
  const options = {
    maxSizeMB: 1,
    maxWidthOrHeight: 1020,
    useWebWorker: true,
    fileType: 'image/jpeg',
  };
  const newBlobList = await Promise.all(
    fileList.map((file) => {
      return imageCompression(file, options);
    })
  );

  const newFileList = newBlobList.map((blob) => {
    return new File([blob], blob.name, {
      type: blob.type,
    });
  });
  return newFileList;
};

export { fileListToBase64, fileListToNewFileList };
