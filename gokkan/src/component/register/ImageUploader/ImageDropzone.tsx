import { DropEvent, useDropzone, FileRejection } from 'react-dropzone';
import styled from 'styled-components';
import { useAtom } from 'jotai';
import { rawImageFileAtom } from '../../../store/registerAtom';

const StyledInputFileArea = styled.div`
  width: 70vw;
  height: 70vw;
  border: 2px dashed black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageDropZone = () => {
  const [rawImage, setRawImage] = useAtom(rawImageFileAtom);
  // 파일이 입력되었을 때, 실행해줄 함수 선언
  const onDrop = <T extends File>(
    acceptedFiles: T[],
    fileRejections: FileRejection[],
    event: DropEvent
  ) => {
    if (acceptedFiles.length > 0) {
      setRawImage((pre) => {
        return [...pre, ...acceptedFiles];
      });
    }
  };

  // 드랍 존에 함수 설정 및 이미지 파일들만 받도록 설정해줌
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': [],
    },
  });

  return (
    <StyledInputFileArea {...getRootProps()}>
      <input {...getInputProps()} />
      <div>
        {isDragActive ? (
          <p>이미지 파일들을 여기에 넣어주세요</p>
        ) : (
          <p>이미지 파일들을 추가할 수 있습니다.</p>
        )}
      </div>
    </StyledInputFileArea>
  );
};

export default ImageDropZone;
