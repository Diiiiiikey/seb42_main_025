import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Images from 'Components/Images';
import { imageProcess } from 'utils/imageProcess';

export const PostImage = ({ commission }) => {
  const images = imageProcess(commission.imageUrl);

  const [currItem, setCurrItem] = useState(images[0]);
  const canvasRef = useRef(null);

  const onView = idx => {
    setCurrItem(images[idx]);
  };

  useEffect(() => {
    // 검색해보기
    const canvas = canvasRef.current;
    // 검색해보기
    const ctx = canvas.getContext('2d');
    // 검색해보기
    const img = new Image();
    img.src = currItem.url;
    // 검색해보기
    img.onload = () => {
      let width = img.width;
      let height = img.height;

      if (width > 700) {
        height *= 700 / width;
        width = 700;
      }
      if (height > 600) {
        width *= 600 / height;
        height = 600;
      }

      canvas.width = width;
      canvas.height = height;
      ctx.drawImage(img, 0, 0, width, height);
    };
  }, [currItem]);

  return (
    <>
      <ThumbnailBox>
        <CanvasThumbnail ref={canvasRef} />
      </ThumbnailBox>
      <ImageBox>
        {images.map((item, idx) => (
          <Button key={item.url + idx} onClick={() => onView(idx)}>
            <Images src={item.url} alt={item.url} imgStyle="postSmall" />
          </Button>
        ))}
      </ImageBox>
    </>
  );
};

const ThumbnailBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 600px;
`;

const CanvasThumbnail = styled.canvas`
  max-width: 700px;
  max-height: 600px;
  width: 100%;
  height: 100%;
  object-fit: contain;
  border: 1px solid #cecece;
  border-radius: 0.25rem;
`;

const ImageBox = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  height: 100px;
  border: none;
  background-color: #fff;
  margin: 6px 3px;
  border-radius: 0.25rem;
  cursor: pointer;

  &:active {
    background-color: #fff;
    filter: brightness(70%);
    transform: translate(0, 1px);
  }
`;
